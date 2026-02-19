import React from 'react'
import logo from "../../assets/images/Codiq2.png"

const Navbar = () => {
  return (
    <div className='absolute z-99 w-full'>
      <header className="h-16 flex items-center justify-between px-6 border-b border-slate-700/50 bg-[#242424]/50 backdrop-blur-md z-10 shrink-0">
        <div className="flex items-center justify-start gap-2">
          <div className="w-6 h-6  flex items-center justify-center rounded-full ">
            <img src={logo} alt="logo" />
          </div>
          <h1 className="font-semibold text-[1.5rem] tracking-wide font-[font2]">codiq</h1>
        </div>

        <button
          className="px-5 py-2 text-sm font-medium text-white bg-blue-600 rounded-lg transition-all duration-200 hover:bg-blue-500 hover:shadow-lg hover:shadow-blue-500/25 active:scale-95"
        >
          Sign In
        </button>

      </header>
    </div>
  )
}

export default Navbar
