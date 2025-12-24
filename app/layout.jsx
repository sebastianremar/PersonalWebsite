import { Providers } from './providers'

export const metadata = {
  title: 'Sebastian Remar',
  description: 'Software Engineer - Portfolio',
}

const RootLayout = ({ children }) => {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}

export default RootLayout
