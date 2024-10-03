import React from 'react';
import { Button } from "@/components/ui/button";
import { Send } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-green-50 to-blue-50 dark:from-blue-900 dark:to-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-10 text-gray-800 dark:text-white">Contact Me</h2>
        <div className="max-w-md mx-auto">
          <form className="space-y-4">
            <div>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Email"
                className="px-2 py-2 mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 dark:bg-gray-800 dark:border-gray-600 dark:text-white"
              />
            </div>
            <div>
              <textarea
                id="message"
                name="message"
                rows={4}
                placeholder="Message"
                className="px-2 py-2 mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 dark:bg-gray-800 dark:border-gray-600 dark:text-white"
              ></textarea>
            </div>
            <div className="flex justify-end">
              <Button type="submit" className="w-fit flex items-center justify-center">
                Send Message
                <Send className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;