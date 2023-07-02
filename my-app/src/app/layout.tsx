import './globals.css'
import { Inter } from 'next/font/google'
import style from './layout.module.css'
import Link from 'next/link'
import { Metadata } from 'next'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: '멋진 제품 사이트',
  description: '멋진 제품을 판매하는 곳입니다.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  // const items = ['product', 'about', 'contact'];
  return (
    <html lang="en">
      <body className={inter.className}>
        <header className={style.header}>
          <h1>Next Study</h1>
          <nav className={style.nav}>
            {/* {items.map((items, index) => (
              <Link key={index} href={`/${items}`}></Link>
            ))} */}
            <Link href='/product'>product</Link>    
            <Link href='/about'>About</Link>
            <Link href='/contact'>Contact</Link>
          </nav>
        </header>
        
        {children}
      </body>
    </html>
  )
}
