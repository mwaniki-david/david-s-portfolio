import type { Metadata } from 'next'
import { Oswald } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import Navigation from '@/components/Navigation'

const oswald = Oswald({
  subsets: ['latin']
})

export const metadata: Metadata = {
  title: 'Persoanl Portfolio',
  description: 'This is my portfolio',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={oswald.className}>
      <Navbar/>
        {children}
        <Navigation/>
        </body>
    </html>
  )
}
