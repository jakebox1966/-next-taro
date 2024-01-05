'use client'

import Image from 'next/image'
import * as React from 'react'
import Card from '../components/Card'

export interface ICardChoiceProps {}

const array = [1, 2, 3, 4]

export default function CardChoice(props: ICardChoiceProps) {
    const [selectedCard, setSelectedCard] = React.useState(null)

    React.useEffect(() => {
        console.log(selectedCard)
    })
    return (
        <>
            <div className="w-[212px] lg:w-[614px] flex flex-row flex-wrap justify-between items-center gap-1">
                {array.map((item, index) => (
                    <Card key={index} setSelectedCard={setSelectedCard} cardNumber={index} />
                ))}
            </div>

            <div className="w-full flex flex-col justify-start items-center text-center max-w-[234px] lg:max-w-[400px]">
                <div className="flex flex-col justify-center items-center w-full gap-7 lg:gap-10 font-black text-sm lg:text-2xl">
                    <div className="lg:text-3xl text-black w-full flex flex-col justify-start items-center gap-3">
                        <div>당신에게 찾아올 행운을</div>
                        <div>떠올리며 카드를 한장 골라주세요.</div>
                    </div>

                    <div className="flex flex-row justify-center items-center gap-2 py-2 lg:py-6 px-7 border-2 border-[#FF5A3F] bg-[#F4ECE0] rounded-full w-[176px]">
                        <div>
                            <Image className="!relative" src={'/check.svg'} alt="insta" fill />
                        </div>
                        확인
                    </div>
                </div>
            </div>
        </>
    )
}
