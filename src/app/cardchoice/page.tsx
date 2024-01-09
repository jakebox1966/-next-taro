'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useEffect, useRef, useState } from 'react'

export interface ICardChoicePageProps {}

export default function CardChoicePage(props: ICardChoicePageProps) {
    const router = useRouter()
    const [selectedCard, setSelectedCard] = useState(0)

    const clickMenuRef = useRef<any>(null)

    const [isMobile, setIsMobile] = useState(false)

    const handleResize = () => {
        if (window.innerWidth >= 1024) {
            setIsMobile(false)
        } else {
            setIsMobile(true)
        }
    }

    const checkResult = () => {}

    useEffect(() => {
        const initData = window.innerWidth
        setIsMobile(initData < 1024 ? true : false)
        window.addEventListener('resize', handleResize)

        return () => {
            window.removeEventListener('resize', handleResize)
        }
    }, [])

    useEffect(() => {
        const handleOutsideClose = (e: { target: any }) => {
            // useRef current에 담긴 엘리먼트 바깥을 클릭 시 드롭메뉴 닫힘

            if (selectedCard !== 0 && !clickMenuRef?.current.contains(e.target)) setSelectedCard(0)
        }
        document.addEventListener('click', handleOutsideClose)

        return () => document.removeEventListener('click', handleOutsideClose)
    }, [selectedCard])

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
                        <div
                            className="w-[212px] lg:w-[614px] h-[323px] lg:h-[929px] flex flex-row flex-wrap gap-2"
                            ref={clickMenuRef}>
                            <div
                                className={`card ${
                                    selectedCard !== 1 ? 'hover:select_card1' : 'select_card1'
                                }`}
                                onClick={() => {
                                    setSelectedCard(1)
                                }}>
                                <img
                                    src={`${isMobile ? '/card.svg' : '/card_desktop.svg'}`}
                                    alt=""
                                />
                            </div>
                            <div
                                className={`card ${
                                    selectedCard !== 2 ? 'hover:select_card2' : 'select_card2'
                                }`}
                                onClick={() => {
                                    setSelectedCard(2)
                                }}>
                                <img
                                    src={`${isMobile ? '/card.svg' : '/card_desktop.svg'}`}
                                    alt=""
                                />
                            </div>
                            <div
                                className={`card ${
                                    selectedCard !== 3 ? 'hover:select_card3' : 'select_card3'
                                }`}
                                onClick={() => {
                                    setSelectedCard(3)
                                }}>
                                <img
                                    src={`${isMobile ? '/card.svg' : '/card_desktop.svg'}`}
                                    alt=""
                                />
                            </div>
                            <div
                                className={`card ${
                                    selectedCard !== 4 ? 'hover:select_card4' : 'select_card4'
                                }`}
                                onClick={() => {
                                    setSelectedCard(4)
                                }}>
                                <img
                                    src={`${isMobile ? '/card.svg' : '/card_desktop.svg'}`}
                                    alt=""
                                />
                            </div>
                        </div>

                        <div className="w-[250px] lg:w-[638px] h-[52px] lg:h-[227px] flex flex-col justify-start items-center gap-6 lg:gap-10 mt-4">
                            <div className="text-center text-black lg:text-4xl w-full">
                                <div>당신에게 찾아올 행운을</div>
                                <div className="w-full">떠올리며 카드를 한장 골라주세요.</div>
                            </div>

                            <div
                                className="w-[176px] h-[50px] lg:w-[200px] lg:h-[76px] border-2 text-xs lg:text-xl border-[#269E45] rounded-full text-center leading-[56px] flex flex-row justify-center gap-2 items-center mt-8 cursor-pointer"
                                onClick={checkResult}>
                                <img src="/check.svg" alt="" />
                                확인
                            </div>
                        </div>
                    </div>
                </div>

                {!isMobile && (
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
                )}
                <div className="text-xs lg:text-2xl mt-7 lg:mt-20">
                    ⓒ 2024 Quadhash Corporation. All Rights Reserved.
                </div>
            </div>
        </>
    )
}
