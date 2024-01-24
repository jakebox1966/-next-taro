'use client'
import * as React from 'react'

export interface IMainBottomTextSliderProps {}

export default function MainBottomTextSlider(props: IMainBottomTextSliderProps) {
    const slides = [
        '사자랑가자 타로 공유 이벤트',
        '사자랑가자 타로 공유 이벤트',
        '사자랑가자 타로 공유 이벤트',
        '사자랑가자 타로 공유 이벤트',
        '사자랑가자 타로 공유 이벤트',
        '사자랑가자 타로 공유 이벤트',
        '사자랑가자 타로 공유 이벤트',
        '사자랑가자 타로 공유 이벤트',
        '사자랑가자 타로 공유 이벤트',
        '사자랑가자 타로 공유 이벤트',
        '사자랑가자 타로 공유 이벤트',
        '사자랑가자 타로 공유 이벤트',
        '사자랑가자 타로 공유 이벤트',
        '사자랑가자 타로 공유 이벤트',
        '사자랑가자 타로 공유 이벤트',
        '사자랑가자 타로 공유 이벤트',
        '사자랑가자 타로 공유 이벤트',
        '사자랑가자 타로 공유 이벤트',
        '사자랑가자 타로 공유 이벤트',
        '사자랑가자 타로 공유 이벤트',
    ]
    return (
        <>
            <div className="scroll-text bg-[#FF5A3F] text-[12px] py-6 font-[NotoSansKR400] mt-[81px] lg:mt-[70px]">
                <div className="track">
                    {slides.map((item, index) => (
                        <>
                            <p key={index}>
                                {item}
                                &nbsp;<span>&nbsp;•</span>
                            </p>
                        </>
                    ))}
                </div>
            </div>
        </>
    )
}
