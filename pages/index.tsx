import { ConnectButton } from '@rainbow-me/rainbowkit';
import { GetTokens, SendTokens } from '../components/contract';
import Spline from '@splinetool/react-spline';

export default function Home() {
  return (
    <div className="min-h-screen w-full relative">
      {/* Spline 3D Background */}
      <div className="absolute inset-0 z-0">
        <Spline scene="https://prod.spline.design/ZjtCuMPTJaNJoFKb/scene.splinecode" />
      </div>

      {/* UI Overlay - Left Aligned with margin */}
      <div className="relative z-10 min-h-screen flex items-center p-8 pl-16 lg:pl-24">
        <div className="w-full max-w-lg space-y-6">
          {/* Header */}
          <header className="fade-in flex flex-col sm:flex-row items-center justify-between gap-4 mb-8">
            <div className="flex items-center gap-4">
              <div className="logo-icon">D</div>
              <div>
                <h1 className="font-bold text-2xl text-[var(--text-primary)]">
                  Drain
                </h1>
                <p className="text-sm text-[var(--text-secondary)] font-medium">
                  Asset Transfer Protocol
                </p>
              </div>
            </div>
            <ConnectButton />
          </header>

          {/* Main Content - No Cards */}
          <div className="space-y-6">
            {/* Assets Section */}
            <section className="fade-in-delay-1">
              <h2 className="section-header">Detected Assets</h2>
              <div className="bg-white/70 backdrop-blur-md rounded-xl p-4 border border-white/40 max-h-64 overflow-y-auto shadow-lg">
                <GetTokens />
              </div>
            </section>

            {/* Destination Section */}
            <section className="fade-in-delay-2">
              <h2 className="section-header">Transfer Destination</h2>
              <div className="bg-white/70 backdrop-blur-md rounded-xl p-4 border border-white/40 shadow-lg">
                <SendTokens />
              </div>
            </section>
          </div>

          {/* Footer */}
          <footer className="text-xs text-[var(--text-secondary)] font-medium fade-in-delay-2">
            🔒 End-to-End Encrypted • Non-Custodial • Open Source
          </footer>
        </div>
      </div>
    </div>
  );
}
