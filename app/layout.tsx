import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import ButtonUp from '@/components/ui/ButtonUp';
import Hydration from '@/components/ui/Hydration';
import ProgressScroll from '@/components/ui/ProgressScroll';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import { Providers } from '@/components/ui/Providers';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Лендінг',
  description: 'Лендінг',
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
          <Providers>
            <ButtonUp />
            <ProgressScroll />
            <Header />
            <main>
              {children}
            </main>
            <Footer />
          </Providers>
        </Hydration>
      </body>
    </html>
  )
}
