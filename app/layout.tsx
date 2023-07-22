import './globals.css'
import { Inter } from 'next/font/google'
import Sidebar from './components/Sidebar'
import { AuthProvider } from './backjob/authmiddleware'
const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Election Day',
  description: 'Let us work together',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">      
      <body className={inter.className}>
        <AuthProvider>
        {children}
        </AuthProvider>
      </body>  
    </html>
    
  )
}
