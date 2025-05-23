'use client'
import { useEffect, useState } from 'react'

const ThemeToggle = () => {
  const [isDark, setIsDark] = useState(false)

  useEffect(() => {
    // Check if user has a stored preference
    const storedTheme = localStorage.getItem('theme')
    const prefersDark = window.matchMedia(
      '(prefers-color-scheme: dark)'
    ).matches

    if (storedTheme === 'dark' || (!storedTheme && prefersDark)) {
      document.documentElement.setAttribute('data-theme', 'dark')
      setIsDark(true)
    } else {
      document.documentElement.setAttribute('data-theme', 'light')
      setIsDark(false)
    }
  }, [])

  const toggleTheme = () => {
    const newTheme = isDark ? 'light' : 'dark'
    document.documentElement.setAttribute('data-theme', newTheme)
    localStorage.setItem('theme', newTheme)
    setIsDark(!isDark)
  }

  return (
    <div className="mobile-position">
      <nav className="navigation">
        <div className="theme-switch-wrapper">
          <label className="theme-switch">
            <input
              type="checkbox"
              checked={isDark}
              onChange={toggleTheme}
              id="theme-toggle"
            />
            <div className="mode-container">
              <i className="gg-sun"></i>
              <i className="gg-moon"></i>
            </div>
          </label>
        </div>
      </nav>
    </div>
  )
}

export default ThemeToggle
