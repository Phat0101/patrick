'use client'
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { motion } from 'framer-motion';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';
import { Send, Mail, FileCode, Terminal } from 'lucide-react';
import { sendEmail } from '@/actions/contact';

const Contact: React.FC = () => {
  const [status, setStatus] = useState<{ type: 'success' | 'error'; message: string } | null>(null);
  const { ref, isIntersecting } = useIntersectionObserver({ threshold: 0.1 });

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);

    const response = await sendEmail(formData);

    if (response.error) {
      setStatus({ type: 'error', message: response.error });
    } else {
      setStatus({ type: 'success', message: 'Your message has been sent successfully!' });
      if (event.currentTarget) {
        event.currentTarget.reset();
      }
    }

    setTimeout(() => {
      setStatus(null);
    }, 3000);
  };

  return (
    <section id="contact" className="py-16 px-4 font-mono bg-white dark:bg-[#1e1e1e] text-gray-800 dark:text-gray-200">
      <motion.section
        ref={ref}
        initial={{ opacity: 0, y: 20 }}
        animate={isIntersecting ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
      <div className="container mx-auto">
        {/* File header like a code comment */}
        <div className="mb-8 max-w-4xl mx-auto text-left bg-gray-100 dark:bg-[#2d2d2d] p-4 rounded-md border-l-4 border-blue-500 overflow-x-auto">
          <div className="flex items-center mb-2">
            <FileCode className="w-5 h-5 mr-2 text-blue-600 dark:text-blue-400" />
            <span className="text-lg font-semibold text-blue-600 dark:text-blue-400">Contact.tsx</span>
          </div>
          <pre className="text-blue-600 dark:text-blue-400">
            <code>{`/**
 * Component: Contact
 * Description: Get in touch form
 * Last modified: ${new Date().toISOString().split('T')[0]}
 */`}</code>
          </pre>
        </div>
        
        <div className="max-w-4xl mx-auto mb-8 text-left">
          <div className="flex items-center mb-4">
            <Mail className="w-5 h-5 mr-2 text-purple-600 dark:text-purple-400" />
            <span className="text-xl font-semibold text-purple-600 dark:text-purple-400">Get In Touch</span>
          </div>
          
          <div className="pl-4 mb-6">
            <div className="mb-2">
              <span className="text-purple-600 dark:text-purple-400">async function </span>
              <span className="text-yellow-600 dark:text-yellow-400">sendMessage</span>
              <span className="text-gray-700 dark:text-gray-300">() {`{`}</span>
            </div>
            <div className="pl-4">
              <span className="text-green-600 dark:text-green-400 text-sm">{`// You can reach me at Patrick.Nguyen01@outlook.com`}</span>
            </div>
          </div>
        </div>
        {/* Form styled like a code editor panel */}
        <div className="max-w-xl mx-auto bg-gray-100 dark:bg-[#2d2d2d] rounded-md border border-gray-300 dark:border-gray-700 shadow-lg overflow-hidden">
          {/* Panel header */}
          <div className="bg-gray-200 dark:bg-[#333333] px-4 py-2 flex items-center">
            <Terminal className="w-4 h-4 mr-2 text-blue-600 dark:text-blue-400" />
            <div className="text-sm text-gray-700 dark:text-gray-300">message.send()</div>
          </div>
          
          {/* Form body */}
          <div className="p-6">
            <form onSubmit={handleSubmit} className="space-y-4 line-numbers">
              <div className="line">
                <label htmlFor="email" className="block text-sm text-gray-600 dark:text-gray-400 mb-1">{`// Your email address`}</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="email@example.com"
                  className="w-full px-3 py-2 bg-white dark:bg-[#1e1e1e] border border-gray-300 dark:border-gray-700 rounded-md text-gray-800 dark:text-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
                  required
                />
              </div>
              <div className="line">
                <label htmlFor="message" className="block text-sm text-gray-600 dark:text-gray-400 mb-1">{`// Your message`}</label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  placeholder="Type your message here..."
                  className="w-full px-3 py-2 bg-white dark:bg-[#1e1e1e] border border-gray-300 dark:border-gray-700 rounded-md text-gray-800 dark:text-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 font-mono"
                  required
                ></textarea>
              </div>
              <div className="flex justify-end line">
                <Button 
                  type="submit" 
                  className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md flex items-center justify-center"
                >
                  <span>Send</span>
                  <Send className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </form>
            {status && (
              <div className={`mt-4 ${status.type === 'success' ? 'text-green-600 dark:text-green-400' : 'text-red-600 dark:text-red-400'} border border-gray-300 dark:border-gray-700 p-2 bg-white dark:bg-[#1e1e1e] rounded-md`}>
                <span className="text-gray-600 dark:text-gray-400">{`// `}</span>
                {status.message}
              </div>
            )}
          </div>
        </div>
        
        {/* Close the function */}
        <div className="max-w-4xl mx-auto mt-8 text-left">
          <div className="pl-4">
            <span className="text-gray-700 dark:text-gray-300">{`}`}</span>
          </div>
        </div>
      </div>
      </motion.section>
    </section>
  );
};

export default Contact;