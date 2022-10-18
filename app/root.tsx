import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLoaderData,
} from '@remix-run/react'
import { css, Global } from '@emotion/react'
import { MetaFunction, LinksFunction, LoaderFunction, json } from '@remix-run/node'
import { withEmotionCache } from '@emotion/react'
import { useContext, useEffect } from 'react'
import { extendTheme, ChakraProvider } from '@chakra-ui/react'

import { ServerStyleContext, ClientStyleContext } from '~/context'

const colors = {}

const breakpoints = {
  sm: '480px',
  md: '720px',
  lg: '1024px',
  xl: '1280px',
  xx: '1440px',
  mw: '1760px',
}

const fonts = {
  heading: `'Roboto', sans-serif, serif`,
  body: `'Roboto', sans-serif, serif`,
}

const globalStyles = css`
  @font-face {
    font-family: Roboto, sans-serif, serif,
    font-style: normal;
    font-weight: 400;
    font-display: swap;
  }

  @font-face {
    font-family: Roboto, sans-serif, serif,
    font-style: bold;
    font-weight: 800;
    font-display: swap;
  }

  * {
    font-size: 16px;
  }

  p,
  span {
    font-size: 16px;
    max-height: 999999px;
  }
`

const theme = extendTheme({ colors, breakpoints, fonts })

export const meta: MetaFunction = () => ({
  charset: 'utf-8',
  title: 'New Remix App',
  viewport: 'width=device-width,initial-scale=1',
})

export let links: LinksFunction = () => {
  return [
    { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
    { rel: 'preconnect', href: 'https://fonts.gstatic.com' },
    {
      rel: 'stylesheet',
      href: 'https://fonts.googleapis.com/css2?family=Roboto:wght@400;600&display=swap',
    },
  ]
}

type DocumentProps = {
  isLoggedIn?: Boolean
  children: React.ReactNode
}

const Document = withEmotionCache(({ children }: DocumentProps, emotionCache) => {
  const serverStyleData = useContext(ServerStyleContext)
  const clientStyleData = useContext(ClientStyleContext)

  useEffect(() => {
    emotionCache.sheet.container = document.head
    const tags = emotionCache.sheet.tags
    emotionCache.sheet.flush()
    tags.forEach((tag) => {
      ;(emotionCache.sheet as any)._insertTag(tag)
    })
    clientStyleData?.reset()
  }, [])

  return (
    <html lang="es">
      <head>
        <Meta />
        <Links />
        {serverStyleData?.map(({ key, ids, css }) => (
          <style
            key={key}
            data-emotion={`${key} ${ids.join(' ')}`}
            dangerouslySetInnerHTML={{ __html: css }}
          />
        ))}
      </head>
      <body>
        <Global styles={globalStyles} />
        {children}
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  )
})

export const loader: LoaderFunction = async () => {
  return json({})
}

export default function App() {
  return (
    <Document>
      <ChakraProvider theme={theme}>
        <Outlet />
      </ChakraProvider>
    </Document>
  )
}
