'use client'
import { ThemeProvider } from '../providers/theme-provider'
import { Toaster } from 'sonner'
import { RecoilRoot } from 'recoil'
import './globals.css'
import { Poppins } from 'next/font/google'
const inter = Poppins({
  subsets: ['latin'],
  weight: ['100', '200', '400', '500', '600', '700', '800', '900']
})

function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <RecoilRoot>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            {children}
            <Toaster closeButton richColors />
          </ThemeProvider>
        </RecoilRoot>
      </body>
    </html>
  )
}
export default RootLayout
