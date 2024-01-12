'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useEffect, useRef, useState } from 'react'
import MoonLoader from 'react-spinners/MoonLoader'

export interface ICardChoicePageProps {}

const cardPool = ['thestar', 'thelover', 'thesun', 'themoney', 'theworld', 'thehermit']

export default function CardChoicePage(props: ICardChoicePageProps) {
    const [visitorCount, setVisitorCount] = useState(0)
    const router = useRouter()
    const [selectedCard, setSelectedCard] = useState(0)

    const [isProcessing, setIsProcessing] = useState(false)

    const clickMenuRef = useRef<any>(null)

    const [isMobile, setIsMobile] = useState(false)

    const handleResize = () => {
        if (window.innerWidth >= 1024) {
            setIsMobile(false)
        } else {
            setIsMobile(true)
        }
    }

    const shuffleCard = () => {
        if (selectedCard === 0) {
            alert('카드를 선택해주세요.')
            return
        }
        const randomNumber = Math.floor(Math.random() * 6)

        setIsProcessing(true)
        setTimeout(() => {
            router.push(`/result?card_typ=${cardPool[randomNumber]}`)
        }, 5000)
    }

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

                        <div className={`${isProcessing ? 'opacity-1' : 'opacity-0'} fade`}>
                            <img
                                src={`${isMobile ? '/main_image.svg' : '/main_image_desktop.svg'}`}
                                alt=""
                            />
                        </div>

                        <div className={`${isProcessing ? 'opacity-1' : 'opacity-0'} fade`}>
                            <MoonLoader color={'#057A24'} />
                        </div>

                        <div className="w-[234px] h-[56px] lg:w-[450px] lg:h-[302px] flex flex-col justify-start items-center">
                            <div className="w-[250px] lg:w-[638px] h-[52px] lg:h-[154px] flex flex-col justify-start items-center gap-6 lg:gap-2 mt-12 lg:mt-28">
                                <div className="text-center text-black lg:text-4xl w-full">
                                    <div>
                                        {!isProcessing ? '당신에게 찾아올 행운을' : '2024년 나에게'}
                                    </div>
                                    <div className="w-full">
                                        {!isProcessing
                                            ? '떠올리며 카드를 한장 골라주세요.'
                                            : '다가올 행운 해석 중...'}
                                    </div>
                                </div>
                            </div>

                            {!isProcessing ? (
                                <div
                                    className="w-[176px] h-[50px] lg:w-[200px] lg:h-[76px] border-2 text-xs lg:text-xl border-[#269E45] rounded-full text-center leading-[56px] flex flex-row justify-center mt-6 gap-2 items-center cursor-pointer"
                                    onClick={shuffleCard}>
                                    <img src="/check.svg" alt="" />
                                    확인
                                </div>
                            ) : (
                                ''
                            )}
                        </div>

                        <div className="absolute top-[28%]">
                            <div
                                className={`${
                                    isProcessing ? 'opacity-0' : 'opacity-1'
                                } w-[220px] lg:w-[414px] h-auto  flex flex-row justify-start items-center flex-wrap gap-3 fade`}
                                ref={clickMenuRef}>
                                <div
                                    className={`card cursor-pointer lg:w-[calc(50%-10px)] ${
                                        selectedCard !== 1
                                            ? 'hover:hover_card1'
                                            : 'select_card1 border-2 border-[#269E45] shadow-2xl '
                                    }`}
                                    // className="hover:hover_card"
                                    onClick={() => {
                                        setSelectedCard(1)
                                    }}>
                                    <img
                                        src={`${isMobile ? '/card.svg' : '/card_desktop.svg'}`}
                                        alt=""
                                    />
                                </div>
                                <div
                                    className={`card cursor-pointer lg:w-[calc(50%-10px)] ${
                                        selectedCard !== 2
                                            ? 'hover:hover_card2'
                                            : 'select_card2 border-2 border-[#269E45] shadow-2x'
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
                                    className={`card cursor-pointer lg:w-[calc(50%-10px)] ${
                                        selectedCard !== 3
                                            ? 'hover:hover_card3'
                                            : 'select_card3 border-2 border-[#269E45] shadow-2x'
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
                                    className={`card cursor-pointer lg:w-[calc(50%-10px)] ${
                                        selectedCard !== 4
                                            ? 'hover:hover_card4'
                                            : 'select_card4 border-2 border-[#269E45] shadow-2x'
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
