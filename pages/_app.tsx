import '../styles/globals.scss';
import 'prismjs/themes/prism-tomorrow.css';
import NextNprogress from 'nextjs-progressbar';
import type { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Component {...pageProps} />
      <NextNprogress color="#9040bb" startPosition={0.3} stopDelayMs={200} height={3} />
    </>
  );
}
export default MyApp;
