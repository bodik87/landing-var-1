import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import ButtonUp from '@/components/ButtonUp';
import Hydration from '@/components/Hydration';
import Footer from '@/components/Footer';
import Header from '@/components/Header';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Лендінг 1',
  description: 'Лендінг 1',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} flex flex-col min-h-screen`}>
        <Hydration>
          <ButtonUp />
          <Header />
          <main className="wrapper">
            {children}
          </main>
          <Footer />
        </Hydration>
      </body>
    </html>
  )
}
