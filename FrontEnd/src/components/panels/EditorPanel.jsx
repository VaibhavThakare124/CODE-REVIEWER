import { useCallback } from "react"
import Editor from "react-simple-code-editor"
import prism from "prismjs"
import "prismjs/themes/prism-tomorrow.css"
import "prismjs/components/prism-javascript"

export default function EditorPanel({ code, setCode, onReview, isReviewing }) {
  const highlight = useCallback(
    (code) => prism.highlight(code, prism.languages.javascript, "javascript"),
    []
  )

  return (
    <div className="h-[80vh] flex flex-col min-h-0 bg-slate-900/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl overflow-hidden shadow-xl z-10 w-full md:w-1/2">
      {/* Editor Header */}
      <div className="h-10 bg-slate-800/50 border-b border-slate-700/50 flex items-center px-4 justify-between">
        <div className="flex gap-2">
          <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
          <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
        </div>
        <div className="text-xs text-slate-400 font-mono">script.js</div>
      </div>

      <div className="flex-1 relative overflow-y-auto scroll-smooth group">
        <Editor
          value={code}
          onValueChange={setCode}
          highlight={highlight}
          padding={20}
          className="font-mono text-[15px]"
          style={{
            fontFamily: '"Fira Code", monospace',
            minHeight: "100%",
            background: "transparent",
            width: "100%",
          }}
          textareaClassName="focus:outline-none"
        />

        <div className=" bottom-6 right-6 fixed">
          <button
            onClick={onReview}
            disabled={isReviewing}
            className={`
              flex items-center gap-2 px-6 py-3 rounded-xl font-semibold shadow-lg transition-all duration-300
              ${isReviewing
                ? 'bg-slate-700 text-slate-400 cursor-wait'
                : 'bg-blue-600 text-white hover:bg-blue-500 hover:shadow-blue-500/20 active:scale-95'
              }
            `}
          >
            {isReviewing ? (
              <>
                <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                <span>Analyzing...</span>
              </>
            ) : (
              <>
                <span>Review Code</span>
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  )
}
