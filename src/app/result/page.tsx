'use client'

import Link from 'next/link'
import * as React from 'react'
import { CardListModal } from '../components/CardListModal'
import { usePathname, useSearchParams } from 'next/navigation'

export interface IResultPageProps {}

const cardDatas = [
    {
        imageUrl: '/thelover.svg',
        title: 'THE LOVERS',
        top_desc:
            '2024년에는 진정한 사랑과 동반자와의 깊은 연결이 강조돼. 새로운 사랑의 시작이나 기존의 관계에서 뜻밖의 결실이 기다리고 있을 거야.',
        bottom_desc:
            '간혹 의견 충돌로 인한 다툼이 생긴다면 서로에 대한 이해와 대화를 통해 문제를 해결하는 게 중요해.',
    },
    {},
    {},
]

export default function ResultPage(props: IResultPageProps) {
    const [visitorCount, setVisitorCount] = React.useState(0)
    const pathname = usePathname()
    const params = useSearchParams()

    const cardname = params.get('cardType')

    const [open, setOpen] = React.useState(false)
    const [isMobile, setIsMobile] = React.useState(false)

    const handleResize = () => {
        if (window && window.innerWidth >= 1024) {
            setIsMobile(false)
        } else {
            setIsMobile(true)
        }
    }

    const getVisitorCount = async () => {
        const result = await fetch('http://localhost:3000/api/test')

        const domParser = new DOMParser()

        const html = await result.text()
        const svg = domParser.parseFromString(html, 'text/xml')

        const visitorCount = svg.childNodes[0].childNodes[7].childNodes[7].textContent

        setVisitorCount(visitorCount?.split('/')[1] as unknown as number)
    }

    const copyClipboard = async () => {
        try {
            await navigator.clipboard.writeText(`${process.env.NEXT_PUBLIC_HOST_URL}${pathname}`)
            alert('클립보드에 링크가 복사되었어요.')
        } catch (err) {
            console.log(err)
        }
    }

    React.useEffect(() => {
        console.log(isMobile)
    }, [isMobile])

    const handleOpen = () => setOpen(!open)

    React.useEffect(() => {
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
            <div
                className={`${
                    isMobile
                        ? 'bg-[url("/main_background_galaxy.jpg")]'
                        : 'bg-[url("/main_background_galaxy_desktop.jpg")]'
                } flex flex-col justify-start items-center py-8 w-full min-h-screen bg-no-repeat bg-cover text-white font-black`}>
                <div className="w-[358px] lg:w-[1000px] h-[1127px] lg:h-[2324px] relative">
                    <img
                        src={`${
                            isMobile
                                ? '/main_complete_frame.svg'
                                : '/main_complete_frame_desktop.svg'
                        }`}
                        alt=""
                    />

                    <div className="flex flex-col justify-start items-center w-[291px] lg:w-[591px] h-[900px] lg:h-[2110px] absolute top-0 left-1/2 -translate-x-1/2 translate-y-16 gap-3">
                        <img
                            src={`${
                                isMobile
                                    ? '/main_complete_title.svg'
                                    : '/main_complete_title_desktop.svg'
                            }`}
                            alt=""
                        />

                        <img
                            className="mt-5 lg:w-[560px] lg:h-[569px]"
                            src="/thelover.svg"
                            alt=""
                        />

                        <div className="text-4xl lg:text-6xl mt-5 lg:mt-10">THE LOVERS</div>

                        <div className="text-xs lg:text-2xl mt-4 lg:mt-10 text-center">
                            2024년에는 진정한 사랑과 동반자와의 깊은 연결이 강조돼. 새로운 사랑의
                            시작이나 기존의 관계에서 뜻밖의 결실이 기다리고 있을 거야.
                        </div>

                        <div className="text-xs lg:text-2xl mt-2 text-center">
                            간혹 의견 충돌로 인한 다툼이 생긴다면 서로에 대한 이해와 대화를 통해
                            문제를 해결하는 게 중요해.
                        </div>

                        {/* <div className="mt-2">
                        <div className="text-xs text-center">행운의 숫자: 6</div>
                        <div className="text-xs text-center">행운의 컬러: Pink</div>
                    </div> */}

                        <div className="text-[#269E45] w-[234px] h-[56px] lg:w-[388px] lg:h-[340px] flex flex-col justify-start items-center gap-6 lg:gap-10 mt-10 lg:mt-20">
                            <div
                                className="w-full border-2 text-xs lg:text-2xl bg-white border-[#269E45] rounded-full text-center leading-[53px] lg:leading-[72px] flex flex-row justify-center gap-4 items-center cursor-pointer"
                                onClick={handleOpen}>
                                <img src="/saza.svg" alt="" />
                                타로 카드 전체유형보기
                            </div>
                            <div
                                className="w-full border-2 text-xs lg:text-2xl bg-white border-[#269E45] rounded-full text-center leading-[53px] lg:leading-[72px] flex flex-row justify-center gap-4 items-center cursor-pointer"
                                onClick={copyClipboard}>
                                <img src="/saza.svg" alt="" />
                                타로점 공유하기
                            </div>
                            <div className="w-full flex flex-col lg:text-4xl justify-start items-center text-white mt-10">
                                <div>지금까지</div>
                                <div>{visitorCount}명이 참여했어요.</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col justify-start items-center w-[298px] lg:w-[815px] y-[650px] lg:y-[185px] gap-6 mt-8 lg:mt-16">
                    <div className="w-[234px] h-[60px] lg:w-full text-center leading-[56px] text-white lg:text-4xl">
                        사자와 가자 만나러 가기
                    </div>

                    <div className="flex flex-col lg:flex-row justify-center lg:justify-center items-center lg:items-center gap-6 text-[#269E45]">
                        <Link href={'https://www.instagram.com/saza.gaza/'}>
                            <div className="w-[234px] lg:w-[388px] h-[60px] lg:h-[85px] border-2 text-xs lg:text-2xl bg-white border-[#269E45] rounded-full text-center leading-[56px] flex flex-row justify-center gap-2 items-center">
                                <img src="/insta.svg" alt="" />
                                사자와 가자 팔로잉하기
                            </div>
                        </Link>

                        <Link href={'https://quadhash.kr/'}>
                            <div className="w-[234px] lg:w-[388px] h-[60px] lg:h-[85px] border-2 text-xs lg:text-2xl bg-white border-[#269E45] rounded-full text-center leading-[56px] flex flex-row justify-center gap-2 items-center">
                                <img src="/saza.svg" alt="" />
                                사자와 가자 SHOP 바로가기
                            </div>
                        </Link>
                    </div>
                </div>
                <div className="text-xs lg:text-2xl mt-7 mt-20">
                    ⓒ 2024 Quadhash Corporation. All Rights Reserved.
                </div>
            </div>
            <CardListModal open={open} handleOpen={handleOpen} />
        </>
    )
}
