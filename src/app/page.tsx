import Image from 'next/image'

export default function Home() {
    return (
        <>
            <div className="w-[320px] lg:w-[711px]">
                <Image
                    className="!relative"
                    objectFit="contain"
                    src={'/main_image.svg'}
                    alt="MASTER SAZA&GAZA"
                    fill
                />
            </div>

            <div className="w-full flex flex-col justify-start items-center text-center max-w-[234px] lg:max-w-[400px]">
                <div className="flex flex-col w-full gap-6 lg:gap-10 font-black text-sm lg:text-2xl">
                    <div className="flex flex-row justify-center items-center gap-2 py-2 lg:py-6 px-7 border-2 border-[#FF5A3F] bg-[#F4ECE0] rounded-full w-full">
                        <Image src={'/saza.svg'} alt="insta" width={40} height={40} />
                        타로점 시작하기
                    </div>
                    <div className="flex flex-row justify-center items-center gap-2 py-2 lg:py-6 px-7 border-2 border-[#FF5A3F] bg-[#F4ECE0] rounded-full w-full">
                        <Image src={'/saza.svg'} alt="insta" width={40} height={40} />
                        타로점 공유하기
                    </div>
                    <div className="lg:mt-20 lg:text-4xl text-black w-full">
                        <div>지금까지</div>
                        <div>0,000명이 참여했어요</div>
                    </div>
                </div>
            </div>
        </>
    )
}
