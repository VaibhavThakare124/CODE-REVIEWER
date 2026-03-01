import React from 'react'
import PanelPage from './components/pages/PanelPage'
import Navbar from './components/navigation/Navbar'
import ThreeScene from './components/effects/ThreeScene'

const App = () => {
  return (
    <div className="relative w-full h-screen overflow-hidden bg-black">
      <ThreeScene />
      <div className="relative z-10 w-full h-full overflow-hidden">
        <Navbar />
        <PanelPage />
      </div>
    </div>
  )
}

export default App


          // old code


// import { useState } from "react"
// import axios from "axios"
// import EditorPanel from "./components/panels/EditorPanel"
// import ReviewPanel from "./components/panels/ReviewPanel"
// import LandingPage from "./components/pages/LandingPage"

// function App() {
//   const [showLanding, setShowLanding] = useState(true)
//   const [code, setCode] = useState(`function sum(a, b) {
//   return a + b
// }`)

//   const [review, setReview] = useState("")
//   const [isReviewing, setIsReviewing] = useState(false)

//   const API_URL =
//     import.meta.env.VITE_API_URL ||
//     "https://code-reviewer-backend-goml.onrender.com"

//   async function reviewCode() {
//     setIsReviewing(true)
//     setReview("") // Clear previous review

//     try {
//       const response = await axios.post(
//         `${API_URL}/ai/get-review`,
//         { code },
//         { timeout: 60000 }
//       )

//       setReview(response.data ?? "")
//     } catch (err) {
//       const message =
//         err.response?.data?.error || err.message || "Request failed"

//       setReview(`**Error**\n\n${message}`)
//     } finally {
//       setIsReviewing(false)
//     }
//   }

//   if (showLanding) {
//     return <LandingPage onGetStarted={() => setShowLanding(false)} />
//   }

//   return (
//     <div className="h-screen w-screen flex flex-col bg-[#242424] overflow-hidden text-slate-100">
//       {/* Header */}
//       <header className="h-16 flex items-center justify-between px-6 border-b border-slate-700/50 bg-[#242424]/50 backdrop-blur-md z-10 shrink-0">
//         <div className="flex items-center gap-3">
//           <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center font-bold shadow-lg">
//             IQ
//           </div>
//           <h1 className="font-semibold text-lg tracking-wide">codiq.ai</h1>
//         </div>
//         <button
//           onClick={() => setShowLanding(true)}
//           className="text-sm text-slate-400 hover:text-white transition-colors"
//         >
//           Back to Home
//         </button>
//       </header>

//       {/* Main Content */}
//       <main className="flex-1 flex flex-col md:flex-row gap-6 p-6 min-h-0 overflow-hidden relative">
//         {/* Background Decor */}
//         <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none" />
//         <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] bg-purple-600/10 rounded-full blur-[120px] pointer-events-none" />

//         <EditorPanel
//           code={code}
//           setCode={setCode}
//           onReview={reviewCode}
//           isReviewing={isReviewing}
//         />
//         <ReviewPanel
//           review={review}
//           isReviewing={isReviewing}
//         />
//       </main>
//     </div>
//   )
// }

// export default App
