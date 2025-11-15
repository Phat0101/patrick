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
    <section id="contact" className="py-16 md:py-24 px-4 font-mono bg-background text-content-primary">
      <motion.section
        ref={ref}
        initial={{ opacity: 0, y: 20 }}
        animate={isIntersecting ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
      <div className="container mx-auto max-w-container">
        {/* File header like a code comment */}
        <div className="mb-8 max-w-4xl mx-auto text-left bg-surface-muted p-4 md:p-6 rounded border-l-4 border-content-primary overflow-x-auto">
          <div className="flex items-center mb-2">
            <FileCode className="w-5 h-5 mr-2 text-content-primary" />
            <span className="text-lg font-semibold text-content-primary">Contact.tsx</span>
          </div>
          <pre className="text-content-secondary text-xs md:text-sm">
            <code>{`/**
 * Component: Contact
 * Description: Get in touch form
 * Last modified: ${new Date().toISOString().split('T')[0]}
 */`}</code>
          </pre>
        </div>
        
        <div className="max-w-4xl mx-auto mb-8 text-left">
          <div className="flex items-center mb-4">
            <Mail className="w-5 h-5 mr-2 text-content-primary" />
            <span className="heading !mb-0 text-content-primary">Get In Touch</span>
          </div>
          
          <div className="pl-4 mb-6">
            <div className="mb-2">
              <span className="text-content-tertiary">async function </span>
              <span className="text-content-primary">sendMessage</span>
              <span className="text-content-secondary">() {`{`}</span>
            </div>
            <div className="pl-4">
              <span className="text-content-tertiary text-sm">{`// You can reach me at Patrick.Nguyen01@outlook.com`}</span>
            </div>
          </div>
        </div>
        {/* Form styled like a code editor panel */}
        <div className="max-w-xl mx-auto bg-surface-subtle rounded border border-border shadow-lg overflow-hidden">
          {/* Panel header */}
          <div className="bg-surface-overlay px-4 py-2 flex items-center border-b border-border">
            <Terminal className="w-4 h-4 mr-2 text-content-primary" />
            <div className="text-sm text-content-secondary">message.send()</div>
          </div>
          
          {/* Form body */}
          <div className="p-4 md:p-6">
            <form onSubmit={handleSubmit} className="space-y-4 line-numbers">
              <div className="line">
                <label htmlFor="email" className="block caption text-content-tertiary mb-1">{`// Your email address`}</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="email@example.com"
                  className="w-full px-3 py-2 bg-surface-white border border-border rounded text-content-primary focus:outline-none focus:ring-1 focus:ring-content-primary focus:border-content-primary transition-colors"
                  required
                />
              </div>
              <div className="line">
                <label htmlFor="message" className="block caption text-content-tertiary mb-1">{`// Your message`}</label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  placeholder="Type your message here..."
                  className="w-full px-3 py-2 bg-surface-white border border-border rounded text-content-primary focus:outline-none focus:ring-1 focus:ring-content-primary focus:border-content-primary font-mono transition-colors"
                  required
                ></textarea>
              </div>
              <div className="flex justify-end line">
                <Button 
                  type="submit" 
                  className="bg-content-primary hover:bg-content-primary/90 text-content-inverse px-4 py-2 rounded flex items-center justify-center transition-colors"
                >
                  <span>Send</span>
                  <Send className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </form>
            {status && (
              <div className={`mt-4 ${status.type === 'success' ? 'text-content-primary' : 'text-red-600'} border border-border p-2 bg-surface-white rounded`}>
                <span className="text-content-tertiary">{`// `}</span>
                {status.message}
              </div>
            )}
          </div>
        </div>
        
        {/* Close the function */}
        <div className="max-w-4xl mx-auto mt-8 text-left">
          <div className="pl-4">
            <span className="text-content-secondary">{`}`}</span>
          </div>
        </div>
      </div>
      </motion.section>
    </section>
  );
};

export default Contact;