import './globals.css'
import Header from '../components/Header'
import Footer from '../components/Footer'

export const metadata = {
  title: 'Josiah Uma – Portfolio',
  description: 'ICT Training Specialist · Software Developer · AI Champion',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="antialiased bg-white text-gray-900 dark:bg-gray-950 dark:text-gray-100">
        {/* === Global Header === */}
        <Header />

        {/* === Page Content === */}
        <main>{children}</main>

        {/* === Global Footer === */}
        <Footer />
      </body>
    </html>
  )
}
