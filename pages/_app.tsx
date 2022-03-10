import { AppProps } from "next/app"

import "styles/globals.css"
import "styles/layout.css"

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
