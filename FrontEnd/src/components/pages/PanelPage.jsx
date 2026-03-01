import React, { useState } from "react"
import axios from "axios"
import EditorPanel from "../panels/EditorPanel"
import ReviewPanel from "../panels/ReviewPanel"
import LandingPage from "./LandingPage"

const PanelPage = () => {
  const [showLanding, setShowLanding] = useState(true)
  const [code, setCode] = useState(`function sum(a, b) {
  return a + b
}`)

  const [review, setReview] = useState("")
  const [isReviewing, setIsReviewing] = useState(false)

  const API_URL =
    import.meta.env.VITE_API_URL ||
    "https://code-reviewer-backend-goml.onrender.com"

  async function reviewCode() {
    setIsReviewing(true)
    setReview("")

    try {
      const response = await axios.post(
        `${API_URL}/ai/get-review`,
        { code },
        { timeout: 60000 }
      )

      setReview(response.data ?? "")
    } catch (err) {
      const message =
        err.response?.data?.error || err.message || "Request failed"

      setReview(`**Error**\n\n${message}`)
    } finally {
      setIsReviewing(false)
    }
  }


  if (showLanding) {
    return (
      <div className="h-full w-full">
        <LandingPage onGetStarted={() => setShowLanding(false)} />
      </div>
    )
  }

  return (
    <div className="relative h-full w-full flex flex-col bg-transparent text-slate-100">

      <main className="flex-1 flex flex-col md:flex-row gap-6 p-6 min-h-0 overflow-auto mt-[6vh] overflow-x-hidden">
        <EditorPanel
          code={code}
          setCode={setCode}
          onReview={reviewCode}
          isReviewing={isReviewing}
        />
        <ReviewPanel
          review={review}
          isReviewing={isReviewing}
        />
      </main>

      <div className="absolute bottom-8 w-full flex justify-center z-10">
          <button
            onClick={() => setShowLanding(true)}
            className="
              group relative
              flex items-center gap-4
              text-xs font-semibold
              tracking-[0.35em]
              uppercase
              text-white/70
              transition-all duration-500
              hover:text-white
              active:scale-95
            "
          >
            {/* Text swap */}
            <span className="relative h-[1em] overflow-hidden">
              <span className="
                block transition-transform duration-500
                group-hover:-translate-y-full
              ">
                Return Home
              </span>

              <span className="
                absolute left-0 top-0
                translate-y-full
                transition-transform duration-500
                group-hover:translate-y-0
              ">
                Exit Playground
              </span>
            </span>

            {/* Arrow */}
            <span className="
              transition-transform duration-500
              group-hover:translate-x-2
            ">
              →
            </span>

            {/* Underline */}
            <span className="
              absolute -bottom-2 left-0 h-px w-0 bg-white
              transition-all duration-500
              group-hover:w-full
            " />
          </button>
      </div>

    </div>
  )
}

export default PanelPage



