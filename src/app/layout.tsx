import { Noto_Serif, Roboto } from 'next/font/google'
import { Providers } from './providers'
import './globals.css'

const notoSerif = Noto_Serif({ 
  weight: '400',
  subsets: ['latin'],
  variable: '--font-noto-serif'
})

const roboto = Roboto({ 
  weight: ['400', '700'],
  subsets: ['latin'],
  variable: '--font-roboto'
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning className="h-full">
      <body className={`${roboto.variable} ${notoSerif.variable} font-sans min-h-screen flex flex-col`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}

