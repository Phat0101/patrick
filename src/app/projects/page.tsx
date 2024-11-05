'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { ArrowLeftToLine, ArrowRightToLine, Menu, Grid3x3, Undo2 } from 'lucide-react'
import { SiZoom } from "react-icons/si"
import Image from 'next/image'
import Link from 'next/link'
import profile from '../../../public/profile.jpg';
import ZoomSummariser from './ZoomSummariser'
import Sudoku from './Sudoku'

type ProjectIcon = JSX.Element | string // string for image URLs

interface Project {
  id: string;
  name: string;
  icon: ProjectIcon;
}

const projectsData: Project[] = [
  {
    id: 'sudoku',
    name: "Sudoku",
    icon: <Grid3x3 className="w-5 h-5" />
  },
  {
    id: 'zoom-summariser',
    name: "Zoom Summariser",
    icon: <SiZoom className="w-5 h-5" />
    // Example for using image:
    // icon: '/path/to/image.png'
  }
]

const Projects = () => {
  const [isOpen, setIsOpen] = useState(true)
  const [selectedProject, setSelectedProject] = useState<Project>(projectsData[0])
  const [isMobile, setIsMobile] = useState(false)
  const [darkMode, setDarkMode] = useState(false)

  useEffect(() => {
    const savedMode = localStorage.getItem('darkMode')
    setDarkMode(savedMode === 'true')

    const checkMobile = () => setIsMobile(window.innerWidth < 768)
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobile && isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isMobile, isOpen])

  const toggleSidebar = () => setIsOpen(!isOpen)

  const renderProjectIcon = (icon: ProjectIcon) => {
    if (typeof icon === 'string') {
      return <Image src={icon} alt="" width={20} height={20} className="w-5 h-5" />
    }
    return icon
  }

  const renderSelectedProject = () => {
    switch (selectedProject.id) {
      case 'zoom-summariser':
        return <ZoomSummariser />
      case 'sudoku':
        return <Sudoku />
      default:
        return null
    }
  }

  return (
    <div className={`min-h-screen ${darkMode ? 'dark' : ''} bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-900 dark:to-blue-900`}>
      <div className="flex h-screen">
        {/* Mobile Menu Button */}
        {isMobile && (
          <Button
            variant="ghost"
            className="fixed top-4 left-4 z-50"
            onClick={toggleSidebar}
          >
            <Menu className="w-6 h-6" />
          </Button>
        )}

        {/* Dark Overlay for Mobile */}
        <AnimatePresence>
          {isMobile && isOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
            />
          )}
        </AnimatePresence>

        {/* Sidebar - Modified for collapsed state */}
        <motion.div
          initial={false}
          animate={{
            width: isOpen ? '256px' : '80px',
            x: isMobile ? (isOpen ? 0 : -256) : 0
          }}
          transition={{ duration: 0.3 }}
          className={`
            ${isMobile ? 'fixed left-0' : 'relative'} 
            h-full bg-white/80 dark:bg-gray-800/80 backdrop-blur-md
            overflow-hidden z-50 flex flex-col justify-between
          `}
        >
          <div className={`p-4 ${isOpen ? 'w-64' : 'w-20'}`}>
            {/* Header Section with Fixed Height */}
            <div className="h-12 mb-8 flex items-center">
              {isOpen ? (
                <h2 className="text-xl font-bold dark:text-white">Projects</h2>
              ) : (
                <div className="w-full flex justify-center">
                  <div className="w-10 h-10 rounded-full bg-purple-100 dark:bg-purple-900/50 flex items-center justify-center">
                    <Image
                      src={profile} // Adjust the path if necessary
                      alt="Patrick Nguyen"
                      width={40}
                      height={40}
                      className="rounded-full object-cover w-full h-full shadow-lg"
                    />
                  </div>
                </div>
              )}
            </div>
            {/* Projects List */}
            <div className="space-y-2">
              {projectsData.map((project) => (
                <motion.div
                  key={project.id}
                  whileHover={{ x: 5 }}
                  onClick={() => {
                    setSelectedProject(project)
                    if (isMobile) setIsOpen(false)
                  }}
                  className={`
                    flex items-center p-3 rounded-lg cursor-pointer
                    ${selectedProject.id === project.id
                      ? 'bg-purple-100 dark:bg-purple-900/50'
                      : 'hover:bg-gray-100 dark:hover:bg-gray-700/50'}
                    ${!isOpen && 'justify-center'}
                  `}
                >
                  <div className={`${isOpen ? 'mr-3' : 'mr-0'}`}>
                    {renderProjectIcon(project.icon)}
                  </div>
                  {isOpen && (
                    <span className="dark:text-white whitespace-nowrap">
                      {project.name}
                    </span>
                  )}
                </motion.div>
              ))}
              {/* Replace Button with motion.div for home link */}
              <Link href="/">
                <motion.div
                  whileHover={{ x: 5 }}
                  className={`
                    flex items-center p-3 rounded-lg cursor-pointer
                    hover:bg-gray-100 dark:hover:bg-gray-700/50
                    ${!isOpen && 'justify-center'}
                  `}
                >
                  <div className={`${isOpen ? 'mr-3' : 'mr-0'}`}>
                    <Undo2 className="w-5 h-5 text-gray-700 dark:text-gray-300" />
                  </div>
                  {isOpen && (
                    <span className="dark:text-white whitespace-nowrap">
                      Home
                    </span>
                  )}
                </motion.div>
              </Link>
            </div>
          </div>

          {/* Toggle Button at Bottom */}
          {!isMobile && (
            <div className="p-4 flex justify-end">
              <Button
                variant="ghost"
                onClick={toggleSidebar}
                className={`
                  bg-white dark:bg-gray-800 
                  hover:bg-gray-100 dark:hover:bg-gray-700
                  transition-all duration-300
                  rounded-lg
                `}
              >
                {isOpen ?
                  <ArrowLeftToLine className="w-6 h-6 text-gray-700 dark:text-gray-300" /> :
                  <ArrowRightToLine className="w-6 h-6 text-gray-700 dark:text-gray-300" />
                }
              </Button>
            </div>
          )}
        </motion.div>

        {/* Main Content - Adjusted margin for collapsed state */}
        <motion.div
          layout
          className={`
            flex-1 overflow-y-auto
            transition-all duration-300
            ${!isOpen && !isMobile ? 'ml-2 mr-2' : 'ml-1 mr-1'}
            ${isMobile && isOpen ? 'blur-sm' : ''}
          `}
        >
          {renderSelectedProject()}
        </motion.div>
      </div>
    </div>
  )
}

export default Projects