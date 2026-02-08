import { CssBaseline, GeistProvider } from '@geist-ui/core';
import type { AppProps } from 'next/app';
import NextHead from 'next/head';
// @ts-ignore
import '../styles/globals.css';

// Imports
import { WagmiProvider } from 'wagmi';
import { getDefaultConfig, RainbowKitProvider } from '@rainbow-me/rainbowkit';
import '@rainbow-me/rainbowkit/styles.css';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import { arbitrum, bsc, gnosis, mainnet, optimism, polygon } from 'viem/chains';
import { http } from 'viem';
import { z } from 'zod';
import { useIsMounted } from '../hooks';

const walletConnectProjectId = z
  .string()
  .parse(process.env.NEXT_PUBLIC_WALLET_CONNECT_PROJECT_ID);

const wagmiConfig = getDefaultConfig({
  appName: 'Drain',
  projectId: walletConnectProjectId,
  chains: [mainnet, polygon, optimism, arbitrum, bsc, gnosis],
  transports: {
    [mainnet.id]: http('https://eth.llamarpc.com'),
    [polygon.id]: http('https://polygon.llamarpc.com'),
    [optimism.id]: http('https://optimism.llamarpc.com'),
    [arbitrum.id]: http('https://arbitrum.llamarpc.com'),
    [bsc.id]: http('https://binance.llamarpc.com'),
    [gnosis.id]: http('https://rpc.gnosischain.com'),
  },
});

const queryClient = new QueryClient();

const App = ({ Component, pageProps }: AppProps) => {
  const isMounted = useIsMounted();

  if (!isMounted) return null;
  return (
    <>
      <WagmiProvider config={wagmiConfig}>
        <QueryClientProvider client={queryClient}>
          <RainbowKitProvider coolMode>
            <NextHead>
              <title>Drain</title>
              <meta
                name="description"
                content="Send all tokens from one wallet to another"
              />
              <link rel="icon" href="/favicon.ico" />
            </NextHead>
            <GeistProvider>
              <CssBaseline />
              <Component {...pageProps} />
            </GeistProvider>
          </RainbowKitProvider>
        </QueryClientProvider>
      </WagmiProvider>
    </>
  );
};

export default App;
