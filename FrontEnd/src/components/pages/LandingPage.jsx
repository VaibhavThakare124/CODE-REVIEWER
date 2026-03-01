import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import logo from "../../assets/images/Codiq2.png"

export default function LandingPage({ onGetStarted }) {
  const containerRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline()

      tl.to(".hero-title", {
        y: 0,
        opacity: 1,
        duration: 1.2,
        ease: "power4.out",
      })
        .to(
          ".hero-sub",
          {
            y: 0,
            opacity: 1,
            duration: 1,
            ease: "power3.out",
          },
          "-=0.8"
        )
        .to(
          ".hero-btn",
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            ease: "power3.out",
          },
          "-=0.6"
        )
    }, containerRef)

    return () => ctx.revert()
  }, [])

  return (
    <div
      ref={containerRef}
      className="relative h-full w-full bg-transparent text-white overflow-hidden flex items-center justify-center"
    >
      

    
      <div className="relative z-10 text-center max-w-4xl px-6">

        
        <div className="flex items-center justify-center gap-3 mb-10 opacity-80">
          <img src={logo} alt="logo" className="w-8 h-8" />
          <span className="uppercase tracking-[0.4em] text-sm font-semibold">
            Codiq
          </span>
        </div>

        
        <h1 className="hero-title opacity-0 translate-y-20 text-4xl md:text-6xl font-bold leading-tight tracking-tight">
          AI-Powered Code
          <br />
          <span className="text-white/60">Intelligence System</span>
        </h1>

        
        <p className="hero-sub opacity-0 translate-y-10 mt-8 text-lg md:text-xl text-white/50 max-w-2xl mx-auto">
          Analyze, optimize, and elevate your code instantly.
          Designed for developers who demand precision.
        </p>

        
        <div className="hero-btn opacity-0 translate-y-5 mt-12">
          <button
            onClick={onGetStarted}
            className="
              group relative inline-flex items-center justify-center
              px-8 py-3 text-xs
              sm:px-10 sm:py-4 sm:text-sm
              md:px-12 md:py-4 md:text-sm
              font-semibold tracking-[0.25em]
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
            
            <span className="
              absolute inset-0 bg-white
              scale-x-0 origin-left
              transition-transform duration-500
              group-hover:scale-x-100
            " />

            <span className="
              relative flex items-center gap-3
              sm:gap-4
              transition-colors duration-500
              group-hover:text-black
            ">
              Enter Playground
              <svg
                className="w-4 h-4 sm:w-5 sm:h-5 transition-transform duration-500 group-hover:translate-x-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 7l5 5m0 0l-5 5m5-5H6"
                />
              </svg>
            </span>
          </button>
        </div>
        
      </div>

      
      <div className="absolute bottom-12 flex gap-10 text-xs tracking-widest text-white/40 uppercase">
        <span>Real-Time Analysis</span>
        <span>Instant Feedback</span>
        <span>Precision Optimization</span>
      </div>
    </div>
  )
}