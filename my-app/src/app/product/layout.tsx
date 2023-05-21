import Link from 'next/link'
import style from './layout.module.css'

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function ProductLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <nav className={style.nav}>
        <Link href="/product/women">남성옷</Link>
        <Link href="/product/man">여성옷</Link>
      </nav>
      <section className={style.product}>
        {children}
      </section>
    </>
  )
}