'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useEffect, useRef, useState } from 'react'
import MoonLoader from 'react-spinners/MoonLoader'
import mainImage from '../../../public/main_image.gif'
import Loading from '../components/Loading'

export interface ICardChoicePageProps {}

const cardPool = [
    'the_star',
    'the_lovers',
    'the_money',
    'the_magician',
    'the_world',
    'the_sun',
    'the_strength',
    'the_chariot',
    'the_emperor',
    'the_hermit',
    'ace_of_wands',
]

export default function CardChoicePage(props: ICardChoicePageProps) {
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
        const randomNumber = Math.floor(Math.random() * 11)

        setIsProcessing(true)
        setTimeout(() => {
            router.push(`/result?card_type=${cardPool[randomNumber]}`)
        }, 3000)
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
                    <div className="flex flex-col justify-start items-center w-[298px] lg:w-[591px] y-[650px] lg:y-[1757px] absolute top-0 lg:top-8 left-1/2 -translate-x-1/2 translate-y-16">
                        <img
                            src={`${isMobile ? '/main_title.svg' : '/main_title_desktop.svg'}`}
                            alt=""
                        />

                        <div
                            className={`${
                                isProcessing ? 'opacity-1' : 'opacity-0'
                            } fade w-[350px] h-auto lg:w-[750px] lg:h-auto absolute z-[-9999] top-[-30px] lg:top-[-130px]`}>
                            <Image src={mainImage} width={0} height={0} sizes="100vw" alt="" />
                            <div className="flex flex-col justify-center items-center absolute left-1/2 -translate-x-1/2 -translate-y-[100px] lg:-translate-y-[250px]">
                                <div
                                    className={`w-[64px] ${
                                        isProcessing ? 'opacity-1' : 'opacity-0'
                                    } fade`}>
                                    <Loading />
                                </div>
                                <div className="flex flex-col w-full text-center text-black lg:text-[30px] font-[ScoreDream300] mt-[39px] lg:mt-[60px]">
                                    <div>2024년 나에게</div>
                                    <div>다가올 행운 해석 중...</div>
                                </div>
                            </div>
                        </div>
                        <div
                            className={`${
                                isProcessing ? 'opacity-0' : 'opacity-1'
                            } w-[220px] lg:w-[414px] h-auto flex flex-row justify-around items-center flex-wrap gap-3 fade mt-[50px] lg:mt-[16px]`}
                            ref={clickMenuRef}>
                            <div
                                className={`${
                                    selectedCard === 1 && 'transition-all border-4 rounded-2xl'
                                } card cursor-pointer w-[calc(50%-10px)] border-[#269E45] shadow-2xl`}
                                onClick={() => {
                                    setSelectedCard(1)
                                }}>
                                <img className="rounded-md" src={'/card.png'} alt="card" />
                            </div>
                            <div
                                className={`${
                                    selectedCard === 2 && 'transition-all border-4 rounded-2xl'
                                } card cursor-pointer w-[calc(50%-10px)] border-[#269E45] shadow-2xl`}
                                onClick={() => {
                                    setSelectedCard(2)
                                }}>
                                <img className="rounded-md" src={'/card.png'} alt="card" />
                            </div>
                            <div
                                className={`${
                                    selectedCard === 3 && 'transition-all border-4 rounded-2xl'
                                } card cursor-pointer w-[calc(50%-10px)] border-[#269E45] shadow-2xl`}
                                onClick={() => {
                                    setSelectedCard(3)
                                }}>
                                <img className="rounded-md" src={'/card.png'} alt="card" />
                            </div>
                            <div
                                className={`${
                                    selectedCard === 4 && 'transition-all border-4 rounded-2xl'
                                } card cursor-pointer w-[calc(50%-10px)] border-[#269E45] shadow-2xl`}
                                onClick={() => {
                                    setSelectedCard(4)
                                }}>
                                <img className="rounded-md" src={'/card.png'} alt="card" />
                            </div>
                        </div>
                        <div
                            className={`${
                                isProcessing ? 'opacity-0' : 'opacity-1'
                            } w-[260px] h-[56px] lg:w-full flex flex-col justify-start items-center mt-[39px]`}>
                            <div className="flex flex-col justify-center items-center text-black lg:text-[35px] w-full font-[ScoreDream300]">
                                <div>당신에게 찾아올 행운을</div>
                                <div>
                                    떠올리며 카드를
                                    <span className="font-[ScoreDream400]"> 한 장 </span>
                                    골라주세요.
                                </div>
                            </div>

                            <div
                                className="font-[ScoreDream300] py-3 w-[176px] lg:w-[200px] border-2 text-xs lg:text-xl border-[#269E45] rounded-full text-center flex flex-row justify-center mt-[32px] gap-2 items-center cursor-pointer"
                                onClick={shuffleCard}>
                                <img src="/check.svg" alt="" />
                                확인
                            </div>
                        </div>

                        <div className="absolute top-[22%] lg:top-[27%]"></div>
                    </div>
                </div>

                {!isMobile && (
                    <div className="flex flex-col justify-start items-center w-[298px] lg:w-[515px] y-[650px] lg:y-[185px] gap-6 mt-8 lg:mt-16">
                        <div className="font-[ScoreDream300] w-[234px] h-[56px] lg:w-full text-center leading-[56px] text-black lg:text-4xl">
                            사자랑가자 만나러 가기
                        </div>

                        <div className="flex flex-col lg:flex-row justify-center lg:justify-center items-center lg:items-center gap-6">
                            <Link href={'https://www.instagram.com/saza.gaza/'}>
                                <div className="font-[ScoreDream300] w-[234px] lg:w-[388px] h-[56px] lg:h-[85px] border-2 text-xs lg:text-[23px] border-[#269E45] rounded-full text-center leading-[56px] flex flex-row justify-center gap-2 items-center">
                                    <img src="/insta.png" alt="" />
                                    사자랑가자 팔로잉하기
                                </div>
                            </Link>

                            <Link href={'https://www.sazagaza.co.kr'}>
                                <div className="font-[ScoreDream300] w-[234px] lg:w-[388px] h-[56px] lg:h-[85px] border-2 text-xs lg:text-[23px] border-[#269E45] rounded-full text-center leading-[56px] flex flex-row justify-center gap-2 items-center">
                                    <img src="/saza.png" alt="" />
                                    사자랑가자 SHOP 바로가기
                                </div>
                            </Link>
                        </div>
                    </div>
                )}
                <div className="text-[0.7rem] lg:text-2xl mt-12 lg:mt-20">
                    ⓒ 2024 Quadhash Corporation. All Rights Reserved.
                </div>
            </div>
        </>
    )
}
