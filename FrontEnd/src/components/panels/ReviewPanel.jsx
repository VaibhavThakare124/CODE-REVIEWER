import Markdown from "react-markdown"
import rehypeHighlight from "rehype-highlight"
import "highlight.js/styles/github-dark.css"

export default function ReviewPanel({ review, isReviewing }) {
  return (
    <div className="h-[80vh] flex flex-col min-h-0 bg-slate-900/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl overflow-hidden shadow-xl z-10 w-full md:w-1/2">
      {/* Review Header */}
      <div className="h-10 bg-slate-800/50 border-b border-slate-700/50 flex items-center px-4">
        <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
          AI Review Report
        </span>
      </div>

      <div className="flex-1 overflow-y-auto p-6 scroll-smooth">
        {isReviewing ? (
          <div className="space-y-4 animate-pulse">
            <div className="h-4 bg-slate-700/50 rounded w-3/4"></div>
            <div className="h-4 bg-slate-700/50 rounded w-1/2"></div>
            <div className="h-4 bg-slate-700/50 rounded w-5/6"></div>
            <br />
            <div className="h-4 bg-slate-700/50 rounded w-2/3"></div>
            <div className="h-4 bg-slate-700/50 rounded w-full"></div>
            <div className="h-32 bg-slate-800/50 rounded border border-slate-700/30"></div>
          </div>
        ) : review ? (
          <div className="markdown-body prose prose-invert max-w-none prose-pre:bg-[#1e1e1e] prose-pre:border prose-pre:border-slate-700/50">
            <Markdown rehypePlugins={[rehypeHighlight]}>
              {review}
            </Markdown>
          </div>
        ) : (
          <div className="h-full flex flex-col items-center justify-center text-slate-500 space-y-4 opacity-70">
            <svg className="w-16 h-16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            <p className="text-lg font-medium">Ready to review</p>
            <p className="text-sm">Click the button to analyze your code</p>
          </div>
        )}
      </div>
    </div>
  )
}
