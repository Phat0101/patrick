'use client'
import React, { useRef, useEffect, useState, useCallback } from 'react';
import { useChat } from 'ai/react';
import { Send, User } from "lucide-react";
import { Button } from './ui/button';
import Image from 'next/image';
import profile from '../../public/profile.jpg';
import { motion } from 'framer-motion';

const Chat: React.FC = () => {
  const { messages, input, handleInputChange, handleSubmit: originalHandleSubmit } = useChat();
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const [isOpen, setIsOpen] = useState(false);
  const [showInitialPrompts, setShowInitialPrompts] = useState(true);

  const initialPrompts = [
    "Tell me about your experience.",
    "What are your skills?",
    "Describe your education background."
  ];

  const handleSubmit = useCallback((prompt?: string) => {
    setShowInitialPrompts(false);
    if (prompt) {
      handleInputChange({ target: { value: prompt } } as React.ChangeEvent<HTMLTextAreaElement>);
    }
    originalHandleSubmit();
  }, [setShowInitialPrompts, handleInputChange, originalHandleSubmit]);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if ((event.ctrlKey && event.key === 'Enter') || (event.metaKey && event.key === 'Enter')) {
        handleSubmit();
      }
    };

    const textarea = textareaRef.current;
    if (textarea) {
      textarea.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      if (textarea) {
        textarea.removeEventListener('keydown', handleKeyDown);
      }
    };
  }, [handleSubmit]);

  const handlePromptClick = (prompt: string) => {
    handleSubmit(prompt);
  };

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="fixed bottom-8 right-4"
      >
        <button
          className="relative inline-flex items-center justify-center p-0.5 mb-1 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group dark:text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span className="relative px-5 py-2.5 transition-all ease-in duration-75 rounded-md bg-white/40 dark:bg-slate-900/10 group-hover:bg-white/70 dark:group-hover:bg-slate-900/20">
            TLDR, Ask me!
          </span>
          <span className="absolute inset-0 border-2 border-transparent rounded-lg animate-spin-border"></span>
        </button>
      </motion.div>
      <div
        className={`fixed bottom-[92px] right-6 w-80 h-96 bg-white/80 dark:bg-gray-900/80 shadow-lg rounded-lg flex flex-col transition-transform duration-300 ease-in-out ${isOpen ? 'transform translate-x-0 scale-100 opacity-100' : 'transform scale-50 translate-x-full opacity-0 pointer-events-none'}`}
      >
        <div className='flex flex-col h-5/6 p-2 overflow-auto'>
          {showInitialPrompts && (
            <div className="mt-36">
              <p className="text-sm mb-2 font-semibold text-gray-600 dark:text-gray-300">Some suggestions:</p>
              {initialPrompts.map((prompt, index) => (
                <button
                  key={index}
                  className="block w-full text-left text-sm p-2 mb-2 bg-gray-200 dark:bg-gray-700 rounded hover:bg-gray-300 dark:hover:bg-gray-600"
                  onClick={() => handlePromptClick(prompt)}
                >
                  {prompt}
                </button>
              ))}
            </div>
          )}
          {messages.map((message, index) => (
            <div
              key={index}
              className={`max-w-[75%] mb-2 p-2 border rounded ${message.role === 'user' ? ' self-end text-right' : 'self-start text-left'
                }`}
            >
              <div className={`flex items-center ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                {message.role === 'user' ? (
                  <div className='text-xl ml-2 '>
                    <User className='w-4 h-4' />
                  </div>
                ) : (
                  <div className='text-xl'>
                    <Image src={profile} alt='Profile' width={25} height={25} className='rounded-full' />
                  </div>
                )}
              </div>
              <div className='text-sm'>{message.content}</div>
            </div>
          ))}
        </div>
        <form onSubmit={(e) => e.preventDefault()} className="p-2 flex border-t border-gray-300 dark:border-gray-700">
          <textarea
            ref={textareaRef}
            className="flex-grow p-2 text-sm rounded mt-1 text-black dark:text-white resize-none overflow-hidden bg-white dark:bg-gray-800 focus:outline-none"
            value={input}
            placeholder="Ask me... (Ctrl/Cmd + Enter)"
            onChange={handleInputChange}
            rows={1}
            style={{ height: 'auto' }}
            onInput={(e) => {
              const target = e.target as HTMLTextAreaElement;
              target.style.height = 'auto';
              target.style.height = `${target.scrollHeight}px`;
            }}
          />
          <Button
            type="button"
            variant={"ghost"}
            className="ml-1 mt-1 px-1 py-1"
            onClick={() => handleSubmit()}
          >
            <Send className=' h-5 w-5' />
          </Button>
        </form>
      </div>
    </>
  );
};

export default Chat;