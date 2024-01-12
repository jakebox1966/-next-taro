import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Image from 'next/image'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
    metadataBase: new URL('https://tarot.quadhash.kr'),
    title: 'SAZA & GAZA TARO EVENT PAGE',
    description: 'This is Saza & Gaza Taro Event Page.',
    openGraph: {
        images: '/og.png',
        title: 'SAZA & GAZA TARO EVENT PAGE',
        description: 'This is Saza & Gaza Taro Event Page.',
    },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <body
            // className={inter.className}
            >
                {children}
            </body>
        </html>
    )
}
