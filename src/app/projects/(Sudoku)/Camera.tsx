'use client'

import React, { forwardRef, useCallback, useEffect, useImperativeHandle, useRef, useState } from 'react'
import { Button } from '@/components/ui/button'
import { Camera, SwitchCamera, Check, X, XCircle } from 'lucide-react'
import Image from 'next/image'


export interface CameraProps {
  onCapture: (image: string) => void
  onClose: () => void
}

export interface CameraRef {
  takePhoto: () => void
  switchCamera: () => void
}

export const CameraView = forwardRef<CameraRef, CameraProps>(
  ({ onCapture, onClose }, ref) => {
    const videoRef = useRef<HTMLVideoElement>(null)
    const [facingMode, setFacingMode] = useState<'environment' | 'user'>('environment')
    const [numberOfCameras, setNumberOfCameras] = useState(0)
    const [tempPhoto, setTempPhoto] = useState<string | null>(null)
    const [error, setError] = useState<string | null>(null)

    useEffect(() => {
      if (tempPhoto) return
      let stream: MediaStream | undefined
      let cancelled = false

      navigator.mediaDevices
        ?.getUserMedia({ video: { facingMode, aspectRatio: 1 }, audio: false })
        .then(async (s) => {
          if (cancelled) return s.getTracks().forEach((t) => t.stop())
          stream = s
          if (videoRef.current) videoRef.current.srcObject = s
          const devices = await navigator.mediaDevices.enumerateDevices()
          setNumberOfCameras(devices.filter((d) => d.kind === 'videoinput').length)
          setError(null)
        })
        .catch((e: DOMException) => {
          setError(
            e.name === 'NotAllowedError'
              ? 'Permission denied. Please refresh and give camera permission.'
              : 'No camera device accessible. Please connect your camera or try a different browser.'
          )
        })

      return () => {
        cancelled = true
        stream?.getTracks().forEach((t) => t.stop())
      }
    }, [facingMode, tempPhoto])

    const takePhoto = useCallback(() => {
      const video = videoRef.current
      if (!video || !video.videoWidth) return
      const size = Math.min(video.videoWidth, video.videoHeight)
      const canvas = document.createElement('canvas')
      canvas.width = size
      canvas.height = size
      canvas
        .getContext('2d')
        ?.drawImage(video, (video.videoWidth - size) / 2, (video.videoHeight - size) / 2, size, size, 0, 0, size, size)
      setTempPhoto(canvas.toDataURL('image/jpeg', 0.9))
    }, [])

    const switchCamera = useCallback(() => {
      setFacingMode((mode) => (mode === 'environment' ? 'user' : 'environment'))
    }, [])

    useImperativeHandle(ref, () => ({ takePhoto, switchCamera }), [takePhoto, switchCamera])

    return (
      <div className="relative aspect-square w-full">
        <Button
          variant="ghost"
          size="icon"
          className="absolute top-2 right-2 z-10 bg-white/80 hover:bg-white/90"
          onClick={onClose}
        >
          <XCircle className="h-5 w-5" />
        </Button>

        {tempPhoto ? (
          <div className="relative h-full">
            <div className="relative aspect-square w-full">
              <Image
                src={tempPhoto}
                alt="Captured photo"
                fill
                className="object-contain"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-4">
              <Button variant="destructive" onClick={() => setTempPhoto(null)}>
                <X className="h-4 w-4 mr-2" />
                Retake
              </Button>
              <Button onClick={() => onCapture(tempPhoto)}>
                <Check className="h-4 w-4 mr-2" />
                Use Photo
              </Button>
            </div>
          </div>
        ) : (
          <div className="relative h-full bg-black">
            {error ? (
              <p className="flex h-full items-center justify-center p-6 text-center text-sm text-white">{error}</p>
            ) : (
              <video ref={videoRef} autoPlay playsInline muted className="h-full w-full object-cover" />
            )}
            <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-4">
              <Button onClick={takePhoto} disabled={!!error}>
                <Camera className="h-4 w-4 mr-2" />
                Take Photo
              </Button>
              {numberOfCameras > 1 && (
                <Button variant="outline" onClick={switchCamera}>
                  <SwitchCamera className="h-4 w-4 mr-2" />
                  Switch Camera
                </Button>
              )}
            </div>
          </div>
        )}
      </div>
    )
  }
)

CameraView.displayName = 'CameraView'
