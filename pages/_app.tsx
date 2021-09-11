import '../styles/globals.scss';
import NextNprogress from 'nextjs-progressbar';
import type { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Component {...pageProps} />
      <NextNprogress color="#192028" startPosition={0.3} stopDelayMs={200} height={3} />
    </>
  );
}
export default MyApp;
