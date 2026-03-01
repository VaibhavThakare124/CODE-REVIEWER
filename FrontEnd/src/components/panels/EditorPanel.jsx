import { useCallback, useRef, useEffect } from "react"
import Editor from "react-simple-code-editor"
import prism from "prismjs"
import "prismjs/themes/prism-tomorrow.css"
import "prismjs/components/prism-javascript"
import { gsap } from "gsap"

export default function EditorPanel({ code, setCode, onReview, isReviewing }) {
  const highlight = useCallback(
    (code) => prism.highlight(code, prism.languages.javascript, "javascript"),
    []
  )

  const panelRef = useRef(null)
  const buttonRef = useRef(null)

  // Entrance animation
  useEffect(() => {
    gsap.fromTo(
      panelRef.current,
      { y: 80, opacity: 0, rotateX: 10 },
      { y: 0, opacity: 1, rotateX: 0, duration: 1.2, ease: "power4.out" }
    )
  }, [])

  // Magnetic button effect
  const handleMouseMove = (e) => {
    const rect = buttonRef.current.getBoundingClientRect()
    const x = e.clientX - rect.left - rect.width / 2
    const y = e.clientY - rect.top - rect.height / 2

    gsap.to(buttonRef.current, {
      x: x * 0.2,
      y: y * 0.2,
      duration: 0.3,
      ease: "power2.out"
    })
  }

  const handleMouseLeave = () => {
    gsap.to(buttonRef.current, {
      x: 0,
      y: 0,
      duration: 0.5,
      ease: "elastic.out(1, 0.4)"
    })
  }

  return (
    <div
      ref={panelRef}
      className="
        relative h-[80vh] flex flex-col min-h-0
        bg-black
        rounded-2xl
        border border-white/10
        shadow-[0_40px_100px_rgba(0,0,0,0.8)]
        overflow-hidden
        z-10 w-full md:w-1/2
        perspective-1000
      "
    >
      
      <div className="absolute inset-0 pointer-events-none opacity-10
        bg-[linear-gradient(to_right,white_1px,transparent_1px),linear-gradient(to_bottom,white_1px,transparent_1px)]
        bg-[size:60px_60px]" />

      
      <div className="h-14 flex items-center justify-between px-6 border-b border-white/10">
        <span className="text-white font-semibold tracking-wide">
          Codiq AI Playground
        </span>
        <span className="text-xs text-white/40 uppercase tracking-widest">
          {isReviewing ? "Processing" : "Interactive Mode"}
        </span>
      </div>

      
      <div className="flex-1 relative overflow-y-auto">
        <Editor
          value={code}
          onValueChange={setCode}
          highlight={highlight}
          padding={28}
          className="font-mono text-[15px] text-white"
          style={{
            fontFamily: '"Fira Code", monospace',
            minHeight: "100%",
            background: "transparent",
            width: "100%",
          }}
          textareaClassName="focus:outline-none"
        />

        
        {isReviewing && (
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            <div className="absolute w-full h-24 bg-gradient-to-b from-transparent via-cyan-400/20 to-transparent animate-[scan_2s_linear_infinite]" />
          </div>
        )}

        
        <div
          className="
            fixed bottom-10 right-10
            sm:bottom-8 sm:right-6
            xs:bottom-4 xs:right-2
            z-20
            flex
          "
        >
          <button
            ref={buttonRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            onClick={onReview}
            disabled={isReviewing}
            className={`
              px-10 py-4 rounded-full
              text-sm font-semibold tracking-wide
              transition-colors duration-300
              shadow-xl
              xs:px-7 xs:py-3 
              ${isReviewing
                ? "bg-white/10 text-white/40 cursor-wait"
                : "bg-white text-black hover:bg-cyan-400"
              }
            `}
            style={{
              minWidth: "196px", // maintain original size on all screens
              minHeight: "56px",
              fontSize: "1rem",
            }}
          >
            {isReviewing ? "AI Thinking..." : "Launch AI Review"}
          </button>
        </div>
        
      </div>

      
      <style>
        {`
          @keyframes scan {
            0% { top: -30%; }
            100% { top: 130%; }
          }
        `}
      </style>
    </div>
  )
}