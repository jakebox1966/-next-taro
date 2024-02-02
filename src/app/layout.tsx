import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Image from 'next/image'
import Link from 'next/link'
import Head from 'next/head'
import Analytics from './Analytics'

const inter = Inter({ subsets: ['latin'] })

/**
 *
 * 링크 공유시(etc: 카카오톡), 제공되는 이벤트 사이트의 image, title, description 제공을 위한 opengraph 데이터 입니다.
 *
 */
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
        <>
            <html lang="en">
                <body>
                    <Analytics />
                    {children}
                </body>
            </html>
        </>
    )
}
