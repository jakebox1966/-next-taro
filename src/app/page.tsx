'use client'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'

export default function Home() {
    const [isMobile, setIsMobile] = useState(false)

    const handleResize = () => {
        if (window.innerWidth >= 1024) {
            setIsMobile(false)
        } else {
            setIsMobile(true)
        }
    }

    useEffect(() => {
        console.log(isMobile)
    }, [isMobile])

    useEffect(() => {
        const initData = window.innerWidth
        setIsMobile(initData < 1024 ? true : false)
        window.addEventListener('resize', handleResize)

        return () => {
            window.removeEventListener('resize', handleResize)
        }
    }, [])

    return (
        <>
            <div className="flex flex-col justify-start items-center py-8 w-full text-[#01671C] font-black">
                <div className="w-[358px] lg:w-[1422px] y-[789px] lg:y-[1990px] relative">
                    <img
                        className="w-full"
                        src={`${isMobile ? '/main_frame.svg' : '/main_frame_desktop.svg'}`}
                        alt=""
                    />
                    <div className="flex flex-col justify-start items-center w-[298px] lg:w-[1091px] y-[650px] lg:y-[1757px] absolute top-0 lg:top-8 left-1/2 -translate-x-1/2 translate-y-16 gap-6">
                        <img
                            src={`${isMobile ? '/main_title.svg' : '/main_title_desktop.svg'}`}
                            alt=""
                        />
                        <div>
                            <img
                                src={`${isMobile ? '/main_image.svg' : '/main_image_desktop.svg'}`}
                                alt=""
                            />
                        </div>

                        <div className="w-[234px] h-[56px] lg:w-[388px] lg:h-[340px] flex flex-col justify-start items-center gap-6 lg:gap-10 mt-10 lg:mt-20">
                            <Link className="w-full" href={'/username'}>
                                <div className="border-2 text-xs lg:text-2xl border-[#269E45] rounded-full text-center leading-[53px] lg:leading-[72px] flex flex-row justify-center gap-4 items-center">
                                    <img src="/saza.svg" alt="" />
                                    타로점 시작하기
                                </div>
                            </Link>

                            <div className="w-full border-2 text-xs lg:text-2xl border-[#269E45] rounded-full text-center leading-[53px] lg:leading-[72px] flex flex-row justify-center gap-4 items-center">
                                <img src="/saza.svg" alt="" />
                                타로점 공유하기
                            </div>

                            <div className="w-full flex flex-col lg:text-4xl justify-start items-center text-black mt-10">
                                <div>지금까지</div>
                                <div>0,000명이 참여했어요.</div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col justify-start items-center w-[298px] lg:w-[815px] y-[650px] lg:y-[185px] gap-6 mt-8 lg:mt-16">
                    <div className="w-[234px] h-[56px] lg:w-full text-center leading-[56px] text-black lg:text-4xl">
                        사자와 가자 만나러 가기
                    </div>

                    <div className="flex flex-col lg:flex-row justify-center lg:justify-center items-center lg:items-center gap-6">
                        <Link href={'https://www.instagram.com/saza.gaza/'}>
                            <div className="w-[234px] lg:w-[388px] h-[56px] lg:h-[85px] border-2 text-xs lg:text-2xl border-[#269E45] rounded-full text-center leading-[56px] flex flex-row justify-center gap-2 items-center">
                                <img src="/insta.svg" alt="" />
                                사자와 가자 팔로잉하기
                            </div>
                        </Link>

                        <Link href={'https://quadhash.kr/'}>
                            <div className="w-[234px] lg:w-[388px] h-[56px] lg:h-[85px] border-2 text-xs lg:text-2xl border-[#269E45] rounded-full text-center leading-[56px] flex flex-row justify-center gap-2 items-center">
                                <img src="/saza.svg" alt="" />
                                사자와 가자 SHOP 바로가기
                            </div>
                        </Link>
                    </div>
                </div>
                <div className="text-xs lg:text-2xl mt-7 lg:mt-20">
                    ⓒ 2024 Quadhash Corporation. All Rights Reserved.
                </div>
            </div>
        </>
    )
}
