import React from 'react'

const DarkModeSwitcher = (props) => {
  return (
    <div className="mode-switcher-wrap static mt-4 md:mt-0 md:absolute">
      <input
        type="checkbox"
        id="mode-switcher"
        onclick="
          localStorage.setItem('mode', (localStorage.getItem('mode') || 'light') === 'light' ? 'dark' : 'light');
          localStorage.getItem('mode') === 'dark' ? document.querySelector('App').classList.add('dark-mode') : document.querySelector('App').classList.remove('dark-mode');
        "
        checked={!props.darkMode}
        onChange={() => {
          props.setDarkMode(!props.darkMode)
        }}
      />
      <label htmlFor="mode-switcher" className="switcher">
        <span className="sun-moon">
          <span className="crater crater-1"></span>
        </span>
        <span className="star star-cloud-1"></span>
        <span className="star star-cloud-2"></span>
        <span className="star star-cloud-3"></span>
      </label>
    </div>
  )
}

export default DarkModeSwitcher
