'use client'

import { useState, useEffect } from 'react'
import { useTheme } from 'next-themes'
import About from '@/components/About'
import Hero from '@/components/Hero'
import Projects from '@/components/Projects'
import Skills from '@/components/Skills'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import Experience from '@/components/Experience'
import Chat from '@/components/Chat'
import { experiences, projects, skills } from '@/lib/info';
import { Code, User, Briefcase, Wrench, Mail, Home, Terminal } from 'lucide-react';
import IDETopBar from '@/components/IDETopBar';
import IDESidebar from '@/components/IDESidebar';
import IDETabBar from '@/components/IDETabBar';

export default function Page() {
  const [scrollY, setScrollY] = useState(0)
  const [activeSection, setActiveSection] = useState('home')
  const { theme, setTheme } = useTheme()
  const [activeTab, setActiveTab] = useState('home.tsx')
  const [showTerminal, setShowTerminal] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
      const sections = ['home', 'about', 'experience', 'projects', 'skills', 'contact']
      const currentSection = sections.find(section => {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          return rect.top <= 100 && rect.bottom > 100
        }
        return false
      })
      if (currentSection) {
        setActiveSection(currentSection)
        setActiveTab(`${currentSection}.tsx`)
      }
    }

    // Only add the scroll listener for the content container
    const contentContainer = document.querySelector('.flex-grow.overflow-auto')
    if (contentContainer) {
      contentContainer.addEventListener("scroll", handleScroll)
      return () => contentContainer.removeEventListener("scroll", handleScroll)
    }

    return () => { }
  }, [])

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark')
  }

  const toggleTerminal = () => {
    setShowTerminal(!showTerminal)
  }

  const menuItems = [
    { id: 'home', label: 'Home', icon: <Home size={18} /> },
    { id: 'about', label: 'About', icon: <User size={18} /> },
    { id: 'experience', label: 'Experience', icon: <Briefcase size={18} /> },
    { id: 'projects', label: 'Projects', icon: <Code size={18} /> },
    { id: 'skills', label: 'Skills', icon: <Wrench size={18} /> },
    { id: 'contact', label: 'Contact', icon: <Mail size={18} /> },
  ]

  return (
    <div className="flex flex-col h-screen overflow-hidden">
      {/* IDE Top Bar - fixed at the top */}
      <div className="sticky top-0 z-50">
        <IDETopBar
          toggleDarkMode={toggleTheme}
          toggleTerminal={toggleTerminal}
        />
      </div>

      <div className="flex flex-grow overflow-hidden">
        {/* IDE Sidebar */}
        <IDESidebar
          activeSection={activeSection}
          setActiveSection={setActiveSection}
          menuItems={menuItems}
        />

        <div className="flex flex-col flex-grow overflow-hidden">
          {/* IDE Tab Bar - should stay at the top of content */}
          <div className="sticky z-40">
            <IDETabBar
              activeTab={activeTab}
              setActiveTab={setActiveTab}
              menuItems={menuItems}
            />
          </div>

          {/* Main Content Area (IDE Editor) */}
          <div className="flex-grow overflow-auto bg-background text-content-primary">
            <div id="home">
              <Hero scrollY={scrollY} />
            </div>
            <div id="about">
              <About />
            </div>
            <div id="experience">
              <Experience experiences={experiences} />
            </div>
            <div id="projects">
              <Projects projects={projects} />
            </div>
            <div id="skills">
              <Skills skills={skills} />
            </div>
            <div id="contact">
              <Contact />
            </div>
            <Footer />
          </div>

          {/* Terminal Panel */}
          {showTerminal && (
            <div className="h-[100vh] bg-surface-subtle border-t border-border p-4 font-mono text-sm overflow-auto text-content-secondary">
              <div className="flex items-center mb-2">
                <Terminal size={14} className="mr-2 text-content-primary" />
                <span className="text-content-primary">Terminal</span>
              </div>
              <p className="text-content-primary">$ whoami</p>
              <p className="mb-2 text-content-secondary">patrick</p>
              <p className="text-content-primary">$ pwd</p>
              <p className="mb-2 text-content-secondary">/users/patrick/portfolio</p>
              <p className="text-content-primary">$ cat skills.txt</p>
              <p className="mb-2 text-content-secondary">JavaScript, TypeScript, React, Next.js, Node.js, Python, FastAPI, Langchain, SQL, NoSQL, Git, Docker, AWS</p>
              <p className="text-content-primary">$ _</p>
            </div>
          )}
        </div>
      </div>

      <Chat />
    </div>
  )
}