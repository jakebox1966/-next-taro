import Image from 'next/image'
import * as React from 'react'

export interface ICardProps {
    setSelectedCard: React.Dispatch<React.SetStateAction<null>>
    cardNumber: number
}

export default function Card({ setSelectedCard, cardNumber }: ICardProps) {
    const selectCard = (index: any) => {
        console.log(index)
        setSelectedCard(index)
    }
    return (
        <>
            <div
                className="overflow-hidden w-[102px] lg:w-[295px] transition-all hover:z-[9999] duration-1000 hover:active_card"
                onClick={() => {
                    selectCard(cardNumber)
                }}>
                <Image
                    className="!relative"
                    objectFit="contain"
                    src={'/card.svg'}
                    alt={'SAZA & GAZA TARO CARD'}
                    fill
                />
            </div>
        </>
    )
}
