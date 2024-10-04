'use client'
import React, { useRef, useEffect, useState } from 'react';
import { useChat } from 'ai/react';
import { Bot, SendHorizontal, User } from "lucide-react";
import { Button } from './ui/button';

const Chat: React.FC = () => {
  const { messages, input, handleInputChange, handleSubmit } = useChat();
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const [isOpen, setIsOpen] = useState(false);

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

  return (
    <>
      <div className="fixed bottom-8 right-4">
        <button
          className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group dark:text-white "
          onClick={() => setIsOpen(!isOpen)}
        >
          <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-transparent rounded-md group-hover:bg-opacity-0">
            TLDR, Ask me!
          </span>
          <span className="absolute inset-0 border-2 border-transparent rounded-lg animate-spin-border"></span>
        </button>
      </div>
      <div
        className={`fixed bottom-24 right-6 w-80 h-96 bg-white dark:bg-gray-900 shadow-lg rounded-lg flex flex-col transition-transform duration-300 ease-in-out ${isOpen ? 'transform translate-x-0 scale-100 opacity-100' : 'transform scale-50 translate-x-full opacity-0 pointer-events-none'}`}
      >
        <div className='flex flex-col h-5/6 p-2 overflow-auto'>
          {messages.map((message, index) => (
            <div
              key={index}
              className={`max-w-[75%] mb-4 p-2 border rounded ${message.role === 'user' ? ' self-end text-right' : 'self-start text-left'
                }`}
            >
              <div className={`flex items-center ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                {message.role === 'user' ? (
                    <div className='text-xl ml-2 '>
                      <User />
                    </div>
                ) : (
                    <div className='text-xl'>
                      <Bot />
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
            className="flex-grow p-2 text-sm text-black dark:text-white resize-none overflow-hidden bg-white dark:bg-gray-800"
            value={input}
            placeholder="Ask me... (Ctrl/Cmd + Enter)/Click Send"
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
            className="ml-1 px-1 py-1"
            onClick={handleSubmit}
          >
            <SendHorizontal/>
          </Button>
        </form>
      </div>
    </>
  );
};

export default Chat;