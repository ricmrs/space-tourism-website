import type { AppProps } from 'next/app';
import GlobalStyle from '@/theme/GlobalStyle';
import ThemeProvider from '@/theme/ThemeProvider';
import NavBar from '@/components/NavBar';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <ThemeProvider>
        <GlobalStyle />
        <NavBar />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}
