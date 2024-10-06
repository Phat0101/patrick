import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { motion } from 'framer-motion';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';
import { Send } from 'lucide-react';
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
    <section id="contact" className="py-20 bg-gradient-to-b from-green-50 to-blue-50 dark:from-blue-900 dark:to-gray-900">
      <motion.section
        ref = {ref}
        initial={{ opacity: 0, y: 20 }}
        animate={isIntersecting ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-4 text-gray-800 dark:text-white">Contact Me</h2>
        <h3 className="text-xl font-semibold text-center mb-10 text-gray-600 dark:text-gray-300">At Patrick.Nguyen01@outlook.com or use the form below</h3>
        <div className="max-w-md mx-auto">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Email"
                className="px-2 py-2 mt-1 block w-full rounded-md focus:outline-none border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 dark:bg-gray-500/30 dark:border-gray-600 dark:text-white"
              />
            </div>
            <div>
              <textarea
                id="message"
                name="message"
                rows={4}
                placeholder="Message"
                className="px-2 py-2 mt-1 block w-full rounded-md focus:outline-none border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 dark:bg-gray-500/30 dark:border-gray-600 dark:text-white"
              ></textarea>
            </div>
            <div className="flex justify-end">
              <Button type="submit" className="w-fit flex items-center justify-center">
                Send Message
                <Send className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </form>
          {status && (
            <div className={`mt-4 text-center ${status.type === 'success' ? 'text-green-500' : 'text-red-500'}`}>
              {status.message}
            </div>
          )}
        </div>
      </div>
      </motion.section>

    </section>
  );
};

export default Contact;