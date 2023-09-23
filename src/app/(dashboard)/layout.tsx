import  SideBar  from '@/components/layouts/Sidebar';
import '../globals.css';
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Header from '@/components/layouts/Header';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Job Hunt',
  description: 'Next Js Stack',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main>
          <div className='border-t'>
            <div className='bg-background'>
              <div className='flex flex-row'>
                  <div className='hidden lg:block w-[18%]'>
                    <SideBar/>
                  </div>
                  <div className='col-span-3 overflow=auto lg:col-span-5 lg:border-l w-[82%]'>
                    <div className='px-6 py-6 lg:px-8'>
                      <div><Header/></div>
                      {children}
                    </div>
                  </div>
                </div>
            </div>
          </div>
        </main>
      </body>
    </html>
  )
}
