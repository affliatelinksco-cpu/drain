import { ConnectButton } from '@rainbow-me/rainbowkit';
import { GetTokens, SendTokens } from '../components/contract';
import Spline from '@splinetool/react-spline';

export default function Home() {
  return (
    <div className="min-h-screen w-full relative overflow-hidden bg-[var(--bg-primary)]">
      {/* Spline 3D Background - Fixed position */}
      {/* Spline 3D Background - Fixed position */}
      <div
        className="fixed -inset-[30%] sm:-inset-[25%] z-0 pointer-events-none"
        style={{
          maskImage:
            'radial-gradient(ellipse at center, black 40%, transparent 80%)',
          WebkitMaskImage:
            'radial-gradient(ellipse at center, black 40%, transparent 80%)',
        }}
      >
        <Spline
          className="w-full h-full scale-125 sm:scale-100"
          scene="https://prod.spline.design/ZjtCuMPTJaNJoFKb/scene.splinecode"
        />
      </div>

      {/* Main Content Container */}
      <div className="relative z-10 w-full h-full min-h-screen flex flex-col lg:flex-row pointer-events-none">
        {/* Left Content Area (Desktop) / Full Layout (Mobile) */}
        <div className="w-full lg:w-1/2 flex flex-col pointer-events-auto min-h-screen">
          <div className="w-full max-w-lg mx-0 lg:mx-0 flex flex-col justify-center flex-grow p-4 pr-20 sm:p-8 lg:p-16 xl:p-24 animate-fade-in">
            {/* Header */}
            <header className="flex flex-row items-center justify-between gap-4 mb-6 lg:mb-8 bg-white/30 lg:bg-transparent backdrop-blur-md lg:backdrop-blur-none p-4 lg:p-0 rounded-2xl lg:rounded-none border border-white/20 lg:border-none shadow-sm lg:shadow-none hover:bg-white/40 transition-colors duration-300">
              <div className="flex items-center gap-3 sm:gap-4">
                <div className="logo-icon shrink-0 scale-90 sm:scale-100 shadow-lg shadow-blue-500/20">
                  D
                </div>
                <div>
                  <h1 className="font-bold text-xl sm:text-3xl text-[var(--text-primary)] leading-tight tracking-tight">
                    Drain
                  </h1>
                </div>
              </div>
              <div className="scale-90 sm:scale-100 origin-right">
                <ConnectButton />
              </div>
            </header>

            {/* Content Card - Centered on Mobile/Tablet */}
            <div className="bg-white/30 lg:bg-transparent backdrop-blur-2xl lg:backdrop-blur-none rounded-3xl p-4 sm:p-8 lg:p-0 border border-white/20 lg:border-none shadow-xl shadow-blue-900/5 lg:shadow-none space-y-4 sm:space-y-6 ring-1 ring-white/30">
              {/* Assets Section */}
              <section>
                <div className="flex items-center justify-between mb-2 px-1">
                  <h2 className="section-header mb-0 opacity-80">
                    Detected Assets
                  </h2>
                </div>
                <div className="bg-white/40 lg:bg-white/40 backdrop-blur-xl rounded-2xl p-4 border border-white/30 max-h-40 sm:max-h-64 overflow-y-auto shadow-inner transition-shadow hover:bg-white/50">
                  <GetTokens />
                </div>
              </section>

              {/* Destination Section */}
              <section>
                <div className="flex items-center justify-between mb-2 px-1">
                  <h2 className="section-header mb-0 opacity-80">
                    Transfer Destination
                  </h2>
                </div>
                <div className="bg-white/40 lg:bg-white/40 backdrop-blur-xl rounded-2xl p-4 border border-white/30 shadow-inner transition-shadow hover:bg-white/50">
                  <SendTokens />
                </div>
              </section>

              {/* Footer */}
              <footer className="text-xs text-[var(--text-secondary)] font-medium text-center lg:text-left py-2 opacity-80">
                🔒 End-to-End Encrypted • Non-Custodial • Open Source
              </footer>
            </div>
          </div>
        </div>

        {/* Right Spacer (Desktop) */}
        <div className="hidden lg:block lg:w-1/2 pointer-events-none" />
      </div>
    </div>
  );
}
