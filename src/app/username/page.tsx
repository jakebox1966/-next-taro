import Image from 'next/image'
import * as React from 'react'

export interface IUsernameProps {}

export default function Username(props: IUsernameProps) {
    return (
        <>
            <div className="w-[320px] lg:w-[711px] lg:mb-20">
                <Image
                    className="!relative"
                    objectFit="contain"
                    src={'/main_image.svg'}
                    alt="MASTER SAZA&GAZA"
                    fill
                />
            </div>

            <div className="w-full flex flex-col justify-start items-center text-center max-w-[234px] lg:max-w-[400px]">
                <div className="flex flex-col justify-center items-center w-full gap-6 lg:gap-10 font-black text-sm lg:text-2xl">
                    <div className="lg:text-4xl text-black w-full">
                        <div>당신의 이름을 알려주세요.</div>
                    </div>

                    <div className="border-2 rounded-full">
                        <input
                            className="p-2 lg:p-7 rounded-full w-full text-gray-400"
                            type="text"
                            placeholder="이름을 입력해주세요."
                        />
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
