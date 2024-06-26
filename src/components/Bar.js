import React from 'react'
import VIRUS from '../images/virus.svg'

const Bar = () => {
  return (
    <header className="App-header p-2 flex flex-row justify-center items-center noselect" translate="no">
      <h1 className="text-3xl md:text-4xl leading-none text-center">
        C<img src={VIRUS} alt="" width="50" className="logo inline" />
        VID-19 ID
      </h1>
    </header>
  )
}

export default Bar
