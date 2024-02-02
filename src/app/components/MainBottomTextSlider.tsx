'use client'
import * as React from 'react'

export interface IMainBottomTextSliderProps {}

/**
 *
 * 결과 페이지 하단의 텍스트 슬라이드 입니다.
 *
 */
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
            {/* <div className="flex flex-col justify-center items-center"> */}
            <div className="flex flex-col justify-center items-center font-[ScoreDream400] text-[18px] lg:text-4xl arrow gap-1">
                <div>인스타그램 공유 이벤트도</div>
                <div>확인해주세요.</div>
                <div>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-6 lg:w-14 h-6 lg:h-14">
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3"
                        />
                    </svg>
                </div>
            </div>

            <div className="scroll-text bg-[#FF5A3F] text-[12px] py-6 font-[ScoreDream400] mt-[80px] ">
                <div className="track">
                    {slides.map((item, index) => (
                        <>
                            <p key={index}>{item}</p>•
                        </>
                    ))}
                </div>
            </div>
            {/* </div> */}
        </>
    )
}
