import { ConnectButton } from '@rainbow-me/rainbowkit';
import { GetTokens, SendTokens } from '../components/contract';
import Spline from '@splinetool/react-spline';

export default function Home() {
  return (
    <div className="min-h-screen w-full relative overflow-hidden bg-[var(--bg-primary)]">
      {/* Spline 3D Background - Fixed position */}
      <div className="fixed inset-0 z-0 transform -translate-y-[10%] lg:translate-y-0 transition-transform duration-500">
        <Spline scene="https://prod.spline.design/ZjtCuMPTJaNJoFKb/scene.splinecode" />
      </div>

      {/* Mobile/Tablet Gradient Overlay (Only visible on smaller screens) */}
      <div className="fixed inset-0 z-0 bg-gradient-to-t from-[var(--bg-primary)] via-[var(--bg-primary)]/80 to-transparent lg:hidden pointer-events-none" />

      {/* Main Content Container */}
      <div className="relative z-10 w-full h-full min-h-screen flex flex-col lg:flex-row pointer-events-none">
        {/* Left Content Area (Desktop) / Full Layout (Mobile) */}
        <div className="w-full lg:w-1/2 flex flex-col pointer-events-auto h-screen lg:h-auto overflow-hidden">
          <div className="w-full max-w-lg mx-auto lg:mx-0 flex flex-col h-full lg:min-h-0 lg:justify-center animate-fade-in lg:p-16 xl:p-24">
            {/* Header - Top aligned on mobile with padding */}
            <header className="flex flex-row items-center justify-between gap-4 p-5 sm:p-8 lg:p-0 lg:mb-8 bg-gradient-to-b from-[var(--bg-primary)]/90 to-transparent lg:bg-none backdrop-blur-sm lg:backdrop-blur-none z-20 shrink-0">
              <div className="flex items-center gap-3 sm:gap-4">
                <div className="logo-icon shrink-0 scale-90 sm:scale-100">
                  D
                </div>
                <div>
                  <h1 className="font-bold text-xl sm:text-3xl text-[var(--text-primary)] leading-tight">
                    Drain
                  </h1>
                </div>
              </div>
              <div className="scale-90 sm:scale-100 origin-right">
                <ConnectButton />
              </div>
            </header>

            {/* Spacer for Mobile 3D Visualization - Reduced to pull content up */}
            <div className="flex-grow min-h-[15vh] lg:hidden" />

            {/* Content Sections - Bottom Sheet on Mobile */}
            <div className="mobile-sheet rounded-t-3xl lg:rounded-3xl lg:bg-transparent lg:backdrop-blur-none lg:border-none lg:shadow-none p-5 sm:p-8 lg:p-0 pb-8 sm:pb-12 lg:pb-0 overflow-y-auto lg:overflow-visible transition-all duration-300 ease-out z-20 shrink-0">
              <div className="w-full max-w-md mx-auto lg:mx-0 space-y-3 sm:space-y-6">
                {/* Visual handle for mobile sheet */}
                <div className="w-10 h-1 bg-gray-300/50 rounded-full mx-auto mb-3 lg:hidden" />

                {/* Assets Section */}
                <section>
                  <div className="flex items-center justify-between mb-1.5 px-1">
                    <h2 className="section-header mb-0 text-xs sm:text-sm">
                      Detected Assets
                    </h2>
                  </div>
                  <div className="bg-white/60 lg:bg-white/60 backdrop-blur-md rounded-2xl p-3 sm:p-4 border border-white/40 max-h-32 sm:max-h-64 overflow-y-auto shadow-sm hover:shadow-md transition-shadow">
                    <GetTokens />
                  </div>
                </section>

                {/* Destination Section */}
                <section>
                  <div className="flex items-center justify-between mb-2 px-1">
                    <h2 className="section-header mb-0">
                      Transfer Destination
                    </h2>
                  </div>
                  <div className="bg-white/60 lg:bg-white/60 backdrop-blur-md rounded-2xl p-4 border border-white/40 shadow-sm hover:shadow-md transition-shadow">
                    <SendTokens />
                  </div>
                </section>

                {/* Footer */}
                <footer className="text-xs text-[var(--text-secondary)] font-medium text-center lg:text-left py-4 lg:py-2 opacity-80">
                  🔒 End-to-End Encrypted • Non-Custodial • Open Source
                </footer>
              </div>
            </div>
          </div>
        </div>

        {/* Right Spacer (Desktop) */}
        <div className="hidden lg:block lg:w-1/2 pointer-events-none" />
      </div>
    </div>
  );
}
