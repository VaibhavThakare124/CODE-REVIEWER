import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import logo from "../../assets/images/Codiq2.png"

const Navbar = () => {
  const navRef = useRef(null)

  useEffect(() => {
    gsap.fromTo(
      navRef.current,
      { y: -40, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: "power3.out" }
    )
  }, [])

  return (
    <div className="absolute top-0 left-0 w-full z-30">
      <header
        ref={navRef}
        className="
          h-16 flex items-center justify-between
          px-8
          bg-black/40 backdrop-blur-xl
          border-b border-white/10
        "
      >
        {/* Logo Section */}
        <div className="flex items-center gap-3">
          <img src={logo} alt="logo" className="w-7 h-7" />
          <span className="uppercase tracking-[0.35em] text-sm font-semibold text-white/80">
            Codiq
          </span>
        </div>

        {/* Sign In Button */}
        <button
          className="
            group relative
            px-8 py-2
            text-xs font-semibold tracking-[0.2em]
            uppercase
            text-white
            border border-white/20
            rounded-full
            overflow-hidden
            transition-all duration-500 ease-[cubic-bezier(0.77,0,0.175,1)]
            hover:border-white
            active:scale-95
          "
        >
          {/* Expanding Background */}
          <span className="
            absolute inset-0 bg-white
            scale-x-0 origin-left
            transition-transform duration-500
            group-hover:scale-x-100
          " />

          <span className="
            relative
            transition-colors duration-500
            group-hover:text-black
          ">
            Access Portal
          </span>
        </button>
      </header>
    </div>
  )
}

export default Navbar