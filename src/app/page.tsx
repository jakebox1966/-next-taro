'use client'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'
import mainImage from '../../public/main_image.gif'

export const dynamic = 'force-dynamic'
export const fetchCache = 'force-no-store'
export const revalidate = 0

export default function Home() {
    const pathname = usePathname()
    const [isMobile, setIsMobile] = useState(false)
    const [visitorCount, setVisitorCount] = useState(0)

    const handleResize = () => {
        if (window.innerWidth >= 1024) {
            setIsMobile(false)
        } else {
            setIsMobile(true)
        }
    }

    const getVisitorCount = async () => {
        const result = await fetch(`${process.env.NEXT_PUBLIC_HOST_URL}/api/test`)
        // const result = await fetch(`http://localhost:3000/api/test`)

        const domParser = new DOMParser()

        const html = await result.text()
        const svg = domParser.parseFromString(html, 'text/xml')
        console.log(svg)

        const visitorCount = svg.childNodes[0].childNodes[7].childNodes[7].textContent
        console.log(visitorCount)

        setVisitorCount(visitorCount?.split('/')[1] as unknown as number)
    }

    useEffect(() => {
        console.log(visitorCount)
        console.log(typeof visitorCount)
    }, [visitorCount])

    const copyClipboard = async () => {
        try {
            await navigator.clipboard.writeText(`${process.env.NEXT_PUBLIC_HOST_URL}${pathname}`)
            alert('클립보드에 링크가 복사되었어요.')
        } catch (err) {
            console.log(err)
        }
    }

    useEffect(() => {
        getVisitorCount()
        const initData = window.innerWidth
        setIsMobile(initData < 1024 ? true : false)
        window.addEventListener('resize', handleResize)

        return () => {
            window.removeEventListener('resize', handleResize)
        }
    }, [])

    return (
        <>
            <a href="https://hits.seeyoufarm.com">
                <img src="https://hits.seeyoufarm.com/api/count/incr/badge.svg?url=https%3A%2F%2Ftarot.quadhash.kr&count_bg=%2379C83D&title_bg=%23555555&icon=&icon_color=%23E7E7E7&title=hits&edge_flat=false" />
            </a>
            <div className="flex flex-col justify-start items-center py-8 w-full text-[#01671C] font-black">
                <div className="w-[358px] lg:w-[1000px] y-[789px] lg:y-[1990px] relative">
                    <img
                        className="w-full"
                        src={`${isMobile ? '/main_frame.svg' : '/main_frame_desktop.svg'}`}
                        alt=""
                    />
                    <div className="flex flex-col justify-start items-center w-[298px] lg:w-[591px] y-[650px] lg:y-[1757px] absolute top-0 lg:top-8 left-1/2 -translate-x-1/2 translate-y-16 gap-6">
                        <img
                            src={`${isMobile ? '/main_title.svg' : '/main_title_desktop.svg'}`}
                            alt=""
                        />
                        <div className="w-[300px] h-auto lg:w-[750px] lg:h-auto absolute z-[-9999] top-[-50px] lg:top-[-130px]">
                            <Image src={mainImage} width={0} height={0} sizes="100vw" alt="" />
                        </div>

                        <div className="w-[234px] h-[56px] lg:w-[388px] lg:h-[340px] flex flex-col justify-start items-center gap-6 lg:gap-10 mt-72 lg:mt-[36rem]">
                            <Link className="w-full" href={'/cardchoice'}>
                                <div className="font-[NotoSansKR400] border-2 text-xs lg:text-2xl border-[#269E45] rounded-full text-center leading-[53px] lg:leading-[72px] flex flex-row justify-center gap-2 items-center">
                                    <img src="/saza.svg" alt="" />
                                    타로점 시작하기
                                </div>
                            </Link>

                            <div
                                className="font-[NotoSansKR400] w-full border-2 text-xs lg:text-2xl border-[#269E45] rounded-full text-center leading-[53px] lg:leading-[72px] flex flex-row justify-center gap-2 items-center cursor-pointer"
                                onClick={copyClipboard}>
                                <img src="/saza.svg" alt="" />
                                타로점 공유하기
                            </div>

                            <div className="w-full flex flex-col lg:text-4xl justify-start items-center text-black mt-5 lg:mt-2 gap-1 lg:gap-4">
                                <div className="font-[NotoSansKR400]">지금까지</div>
                                <div className="font-[NotoSansKR600]">
                                    {typeof visitorCount === 'number'
                                        ? visitorCount.toLocaleString()
                                        : parseInt(visitorCount).toLocaleString()}
                                    명이 참여했어요.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col justify-start items-center w-[298px] lg:w-[515px] y-[650px] lg:y-[185px] gap-6 mt-8 lg:mt-16">
                    <div className="font-[NotoSansKR400] w-[234px] h-[56px] lg:w-full text-center leading-[56px] text-black lg:text-4xl">
                        사자랑가자 만나러 가기
                    </div>

                    <div className="flex flex-col lg:flex-row justify-center lg:justify-center items-center lg:items-center gap-6">
                        <Link href={'https://www.instagram.com/saza.gaza/'}>
                            <div className="font-[NotoSansKR400] w-[234px] lg:w-[388px] h-[56px] lg:h-[85px] border-2 text-xs lg:text-[23px] border-[#269E45] rounded-full text-center leading-[56px] flex flex-row justify-center gap-2 items-center">
                                <img src="/insta.svg" alt="" />
                                사자랑가자 팔로잉하기
                            </div>
                        </Link>

                        <Link href={'https://www.sazagaza.co.kr'}>
                            <div className="font-[NotoSansKR400] w-[234px] lg:w-[388px] h-[56px] lg:h-[85px] border-2 text-xs lg:text-[23px] border-[#269E45] rounded-full text-center leading-[56px] flex flex-row justify-center gap-2 items-center">
                                <img src="/saza.svg" alt="" />
                                사자랑가자 SHOP 바로가기
                            </div>
                        </Link>
                    </div>
                </div>
                <div className="text-xs lg:text-2xl mt-12 lg:mt-20">
                    ⓒ 2024 Quadhash Corporation. All Rights Reserved.
                </div>
            </div>
        </>
    )
}
