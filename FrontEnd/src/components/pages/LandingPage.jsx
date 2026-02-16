

import logo from "../../assets/images/Codiq2.png"

export default function LandingPage({ onGetStarted }) {
    return (
        <div className="h-screen w-full flex flex-col items-center justify-center bg-[#242424] text-white relative overflow-hidden">
            {/* Background Decor */}
            {/* <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
                <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-600/20 rounded-full blur-[100px]" />
                <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-purple-600/20 rounded-full blur-[100px]" />
            </div> */}

            <div className="z-10 text-center space-y-8 p-4 animate-fade-in">
                {/* <h1 className="text-5xl md:text-7xl font-bold font-[font2] bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                    CODIQ.AI
                </h1> */}

                <div className="flex items-center justify-center gap-2">
                    <div className="w-6 h-6  flex items-center justify-center rounded-full ">
                        <img src={logo} alt="logo" />
                    </div>
                    <h1 className="font-semibold text-[1.5rem] tracking-wide font-[font2]">codiq</h1>
                </div>

                
                <p className="text-xl md:text-[2.5rem] font-[font2] text-slate-400 max-w-[56rem] mx-auto">
                    Elevate your code quality with instant, AI-powered feedback.
                    Clean, analyze, and optimize in seconds.
                </p>

                <button
                    onClick={onGetStarted}
                    className="group relative inline-flex items-center justify-center px-6 py-3 font-semibold text-white transition-all duration-200 bg-blue-600 rounded-full hover:bg-blue-700 hover:scale-105 active:scale-95 shadow-lg shadow-blue-500/30"
                >
                    <span>Get Started</span>
                    <svg
                        className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                </button>
            </div>

            {/* Feature Pills */}
            <div className="absolute bottom-10 flex gap-4 text-sm text-slate-500 z-10">
                <span className="px-4 py-1 rounded-full border border-slate-700 bg-slate-800/50">Details Review</span>
                <span className="px-4 py-1 rounded-full border border-slate-700 bg-slate-800/50">Instant Feedback</span>
                <span className="px-4 py-1 rounded-full border border-slate-700 bg-slate-800/50">Clean Clean Clean</span>
            </div>
        </div>
    )
}
