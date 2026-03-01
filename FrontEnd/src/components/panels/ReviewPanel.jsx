import { useEffect, useRef } from "react"
import Markdown from "react-markdown"
import rehypeHighlight from "rehype-highlight"
import "highlight.js/styles/github-dark.css"
import { gsap } from "gsap"

export default function ReviewPanel({ review, isReviewing }) {
  const panelRef = useRef(null)

  useEffect(() => {
    gsap.fromTo(
      panelRef.current,
      { y: 80, opacity: 0, rotateX: -8 },
      { y: 0, opacity: 1, rotateX: 0, duration: 1.1, ease: "power4.out" }
    )
  }, [])

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
      "
    >
      
      <div className="absolute inset-0 pointer-events-none opacity-5
        bg-[linear-gradient(to_right,white_1px,transparent_1px),linear-gradient(to_bottom,white_1px,transparent_1px)]
        bg-[size:60px_60px]" />

      
      <div className="h-14 flex items-center justify-between px-6 border-b border-white/10">
        <span className="text-white font-semibold tracking-wide">
          AI Intelligence Report
        </span>

        <span className="text-xs text-white/40 uppercase tracking-widest">
          {isReviewing ? "Generating Insights" : review ? "Analysis Complete" : "Standby"}
        </span>
      </div>

      <div className="flex-1 overflow-y-auto p-8 relative">
        {isReviewing ? (
          <div className="space-y-6 animate-pulse">
            <div className="h-4 bg-white/10 rounded w-3/4"></div>
            <div className="h-4 bg-white/10 rounded w-1/2"></div>
            <div className="h-4 bg-white/10 rounded w-5/6"></div>
            <div className="h-32 bg-white/5 rounded border border-white/10"></div>
          </div>
        ) : review ? (
          <div
            className="
              prose prose-invert max-w-none
              prose-headings:text-white
              prose-p:text-white/80
              prose-strong:text-white
              prose-code:text-cyan-400
              prose-pre:bg-white/5
              prose-pre:border prose-pre:border-white/10
              prose-pre:rounded-xl
            "
          >
            <Markdown rehypePlugins={[rehypeHighlight]}>
              {review}
            </Markdown>
          </div>
        ) : (
          <div className="h-full flex flex-col items-center justify-center text-white/40 space-y-6">
            <div className="w-20 h-20 border border-white/20 rounded-full flex items-center justify-center text-3xl">
              ∞
            </div>

            <div className="text-xl font-semibold tracking-wide text-white">
              Awaiting Analysis
            </div>

            <div className="text-sm uppercase tracking-widest">
              Execute AI review to generate insights
            </div>
          </div>
        )}
      </div>

      
      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-white/10"></div>
    </div>
  )
}