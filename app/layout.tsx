import type { Metadata } from 'next'
import { Inter, Space_Grotesk } from 'next/font/google'
import './globals.css'
import Navbar from '@/componentes/Navbar';

const inter = Inter({ subsets: ['latin'] });
const spaceGrotesk = Space_Grotesk({ subsets: ['latin'], weight: ['300', '400', '500', '600', '700']});

export const metadata: Metadata = {
  title: 'Web Scraping',
  description: 'Rastreio preço de produto',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>
        <main className='max-w-10xl mx-auto'>
          <Navbar />
        {children}
        </main>
        </body>
    </html>
  )
}
