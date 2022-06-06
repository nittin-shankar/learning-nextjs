import '../styles/global.css'

export default function App({ Component, pageProps }) {
  console.log(pageProps)
  return <Component {...pageProps} />
  // Why are there three dots?
}