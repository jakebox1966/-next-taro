import Image from "next/image";

export default function Home() {
  return (
    <div className="w-full flex flex-col justify-start items-center pt-3 min-h-screen text-[#FF5A3F]">
      <div className="flex flex-col justify-start items-center w-[393px] lg:w-[1600px] gap-7">
        <div className="bg-[url('/main_frame.svg')] h-[789px] lg:h-[1990px] w-full lg:w-[1422px] bg-contain bg-no-repeat bg-center relative">
          <div className=" absolute top-0 left-1/2 -translate-x-1/2 translate-y-16 w-full flex flex-col justify-center items-center gap-11">
            <Image
              src={"/main_title.svg"}
              alt="SAZA&GAZA"
              width={224}
              height={106}
            />
            <Image
              src={"/main_image.svg"}
              alt="MASTER SAZA&GAZA"
              width={320}
              height={235}
            />
            <div className="w-full flex flex-col justify-start items-center text-center max-w-[234px] lg:max-w-[815px]">
              <div className="flex flex-col lg:flex-row w-full gap-5 font-black">
                <div className="flex flex-row justify-start items-center gap-2 py-2 px-7 lg:px-2 border-2 border-[#FF5A3F] bg-[#F4ECE0] rounded-full text-sm w-full">
                  <Image src={"/saza.svg"} alt="insta" width={40} height={40} />
                  타로점 시작하기
                </div>
                <div className="flex flex-row justify-start items-center gap-2 py-2 px-7 lg:px-2 border-2 border-[#FF5A3F] bg-[#F4ECE0] rounded-full text-sm w-full">
                  <Image src={"/saza.svg"} alt="insta" width={40} height={40} />
                  타로점 공유하기
                </div>
                <div className="text-lg text-black w-full">
                  <div>지금까지</div>
                  <div>0,000명이 참여했어요</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full flex flex-col justify-start items-center gap-5 text-center max-w-[234px] lg:max-w-[815px] font-black">
          <div className="text-lg font-black w-full">
            사자와 가자 만나러 가기
          </div>
          <div className="flex flex-col lg:flex-row w-full gap-5">
            <div className="flex flex-row justify-start items-center gap-2 py-2 px-6 lg:px-2 border-2 border-[#FF5A3F] bg-[#F4ECE0] rounded-full text-[0.65rem] w-full">
              <Image src={"/insta.svg"} alt="insta" width={40} height={40} />
              사자와 가자 팔로잉하기
            </div>
            <div className="flex flex-row justify-start items-center gap-2 py-2 px-6 lg:px-2 border-2 border-[#FF5A3F] bg-[#F4ECE0] rounded-full text-[0.65rem] text-xs w-full">
              <Image src={"/saza.svg"} alt="insta" width={40} height={40} />
              사자와 가자 SHOP 바로가기
            </div>
          </div>
        </div>
        <div className="w-full text-xs text-center text-black font-black">
          ⓒ 2024 Quadhash Corporation. All Rights Reserved.
        </div>
      </div>
    </div>
  );
}
