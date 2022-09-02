import type { AppProps } from 'next/app'
import { Provider } from 'react-redux'
import '../styles/globals.css'

import { setupStore } from '../modules/store/store'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={setupStore()}>
      <Component {...pageProps} />
    </Provider>
  )
}

export default MyApp
