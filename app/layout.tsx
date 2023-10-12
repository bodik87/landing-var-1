import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import ButtonUp from '@/components/ui/ButtonUp';
import Hydration from '@/components/ui/Hydration';
import ProgressScroll from '@/components/ui/ProgressScroll';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import { LangContextProvider } from '@/context/LangContext';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Лендінг Шуліка Богдан',
  description: 'Лендінг Шуліка Богдан',
  keywords: [
    "Створення сайтів",
    "Створити сайт",
    "Создание сайтов",
    "Создание сайта",
    "Написать сайт",
    "Шулика Богдан",
    "Заправить кондиционер Вишневое",
    "заправити кондиціонер авто ціна",
    "Заправка автокондиционера в Киеве",
    "Заправка автокондиціонера в Києві",
    "Шуліка Богдан",
  ],
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className='!scroll-smooth'>
      <body className={`${inter.className} flex flex-col min-h-screen`}>
        <LangContextProvider>
          <Hydration>
            <ButtonUp />
            <ProgressScroll />
            <Header />
            <main>
              {children}
            </main>
            <Footer />
          </Hydration>
        </LangContextProvider>
      </body>
    </html>
  )
}
