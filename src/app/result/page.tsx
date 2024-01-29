'use client'

import Link from 'next/link'
import * as React from 'react'
import { CardListModal } from '../components/CardListModal'
import { usePathname, useSearchParams } from 'next/navigation'
import the_star from '../../../public/the_star.gif'
import the_lovers from '../../../public/the_lovers.gif'
import the_money from '../../../public/the_money.gif'
import the_magician from '../../../public/the_magician.gif'
import the_world from '../../../public/the_world.gif'
import the_sun from '../../../public/the_sun.gif'
import the_strength from '../../../public/the_strength.gif'
import the_chariot from '../../../public/the_chariot.gif'
import the_emperor from '../../../public/the_emperor.gif'
import the_hermit from '../../../public/the_hermit.gif'
import ace_of_wands from '../../../public/ace_of_wands.gif'
import Image, { StaticImageData } from 'next/image'
import { StaticImport } from 'next/dist/shared/lib/get-img-props'
import MainBottomTextSlider from '../components/MainBottomTextSlider'
import { saveAs } from 'file-saver'

export interface ICard {
    key: string
    image: StaticImageData | undefined | string
    title: string
    desc: string[]
    luckyNumber: number
    luckyColor: string
}

const cardList = [
    {
        key: 'the_star',
        image: the_star,
        title: 'THE STAR',
        desc: [
            'The Star 카드는 창의력, 희망, 믿음, 낙천주의를 상징해.',
            '타고난 예술적 재능이 뛰어난 사람을 나타내. 음악, 아트 등의 새로운 것을 배워보거나 시간을 보내는 것도 좋아.',
            '새로운 기회가 열린 한해로 내면의 힘을 믿고 선택하는 것이 더 큰 성취와 좋은 결과를 가져올거야.',
            '연애를 하고 있다면 한 단계 더 나아가야 할 때이고, 아직 연인이 없다면 빠른 시간 내에 좋은 연인을 만날거야. 하지만 이상형이 아닐수도 있어. 그러더라도 새로운 연인을 만나는 것을 두려워하지마.',
        ],
        luckyNumber: 17,
        luckyColor: 'Purple(보라)',
    },
    {
        key: 'the_lovers',
        image: the_lovers,
        title: 'THE LOVERS',
        desc: [
            'The Lovers 카드는 가장 긍정적인 카드 중 하나로 단결, 열정, 기회를 상징해.',
            '연인이 있다면 소울 메이트로 신뢰와 깊은 사랑을 바탕으로 서로에게 힘을 실어줄 거야. 아직 연인이 없다면 연인 관계의 신호를 나타내니까 기다려보자고. 또한, 인생의 중대한 갈림길에 서 있으니 급한 결정은 피하는 게 좋겠어.',
            '그 선택이 상당히 큰 결과를 가져올 거거든.팁을 주자면 처음에는 더 어려워 보이는 선택이 옳은 선택일 경우가 많으니 기억해 둬.',
        ],
        luckyNumber: 6,
        luckyColor: 'Pink(핑크)',
    },
    {
        key: 'the_money',
        image: the_money,
        title: 'THE MONEY',
        desc: [
            'The Money 카드는 Ace of Pentacles 카드로 재탄생, 부, 풍요, 번성의 삶, 새로운 시작을 상징해.',
            '카드 중에서도 매우 귀중하고 풍요로운 카드로 삶의 모든 측면이 더 나은 방향으로 변화하고 경제적으로도 안정을 찾게 될거야.',
            '연애와 사랑운에 있어서도 좋은 징조가 기다리고 있어. 연애를 하고 있지 않다면 새로운 사랑이 기다리고 있고, 잠재적 연인이 가까이에 있을수도 있어.',
            '연인이 있다면 안정과 풍요로 이어지며 행복한 결과를 기대해도 좋아.',
        ],
        luckyNumber: 1,
        luckyColor: 'Emerald Green(에메랄드 그린)',
    },
    {
        key: 'the_magician',
        image: the_magician,
        title: 'THE MAGICIAN',
        desc: [
            'The Magician 카드는 창조, 창의, 시작점을 의미해.',
            '마법사의 마법과 같은 가능성과 잠재력이 너에게 가득해!',
            '순발력과 말솜씨가 좋고 상상력 또한 풍부해. 하고자 하는 일이나 학업 등이 가까운 미래에 더 바빠지고 좋은 기회를 얻게 될 거야.',
            '가끔은 과도한 자만심에 빠져 자기 자신을 과소평가할 수 있으니, 주변의 지지와 협력을 소중히 여기고 자기 자신을 더 잘 이해하는 시간을 갖는 것이 아주 중요해',
        ],
        luckyNumber: 2,
        luckyColor: 'Silver(실버)',
    },
    {
        key: 'the_world',
        image: the_world,
        title: 'THE WORLD',
        desc: [
            'The World 카드는 완벽함, 성공 및 성취를 상징해.',
            '당신의 인생에서 중요한 프로젝트나 기간이 끝났음을 의미하고, 다시 새로운 경험과 발전의 기회가 찾아올 거야.',
            '연인이 있다면 의사소통을 통해 정서적으로 만족감을 느끼기 위해 노력하는 것이 중요하고 아직 연인이 없다면 지금 바로 밖에 나가서 새로운 사람을 만나기에도 좋은 시기야.',
            '그리고 열심히 노력한 꿈과 목표에 가까워지고 있으니, 새로운 도전을 받아들이고 자신의 성장에 집중하면 좋은 결과를 얻을 수 있을 거야.',
        ],
        luckyNumber: 21,
        luckyColor: 'Gold(황금)',
    },
    {
        key: 'the_sun',
        image: the_sun,
        title: 'THE SUN',
        desc: [
            'The Sun 카드는 희망, 에너지, 긍정을 상징해.',
            '주변 사람들에게 긍정적인 영향을 주고 인생 목표를 달성하기에 가장 적합한 한해가 될거야.',
            '행운의 연도로, 삶의 여러 영역에서 명확한 방향성도 생겨날거야.',
            '연인과 사랑운도 신뢰와 감사로 밝은 미래를 나타내고, 일을 해나감에 있어서도 새로운 높이에 도달할 수 있을거야. 관계의 개선이나 승진 등으로 성과를 기대해도 좋아.',
        ],
        luckyNumber: 19,
        luckyColor: 'Yellow(노랑)',
    },
    {
        key: 'the_strength',
        image: the_strength,
        title: 'THE STRENGTH',
        desc: [
            'The Strength 카드는 용기, 자신감, 열정을 상징해.',
            '이런 풍부한 자질을 가지고 있다는 것을 나타내고, 내면의 강인함과 용기가 돋보이는 해가 될 거야.',
            '이미 목표에 달성하기 위한 자질을 갖추고 있고 다음 단계로 나아갈 준비가 되어 있다는 것을 의미해.',
            '많은 도전이 있을 수 있지만 주변의 통해 어려운 상황을 극복하며 용기와 포용력으로 주변을 이끌거야.',
            '새로운 누군가를 만나기에도 완벽한 시기이고, 앞으로도 지속적인 관계를 기대해 봐도 좋을거야.',
        ],
        luckyNumber: 8,
        luckyColor: 'Blue(파랑)',
    },
    {
        key: 'the_chariot',
        image: the_chariot,
        title: 'THE CHARIOT',
        desc: [
            'The Chariot 카드는 승리, 정복, 지배를 상징해.',
            '목표 달성을 위해 끈질기고 헌신적으로 노력할 수 있는 시기이기도 하고 보상도 따르는 시기가 될 거야.',
            '일을 해나가면서도 주변의 시선이나 생각에 지나치게신경 쓰기보다는 너의 생각에 자신감을 가지고 추진해도 좋아.',
            '그럼, 분명 결실을 보게 될 거고 사업이나 동업의 운도 기대가 돼.',
        ],
        luckyNumber: 7,
        luckyColor: 'Black(블랙)',
    },
    {
        key: 'the_emperor',
        image: the_emperor,
        title: 'THE EMPEROR ',
        desc: [
            'The Lovers 카드는 가장 긍정적인 카드 중 하나로 단결, 열정, 기회를 상징해.',
            '연인이 있다면 소울 메이트로 신뢰와 깊은 사랑을 바탕으로 서로에게 힘을 실어줄 거야. 아직 연인이 없다면 연인 관계의 신호를 나타내니까 기다려보자고. 또한, 인생의 중대한 갈림길에 서 있으니 급한 결정은 피하는 게 좋겠어.',
            '그 선택이 상당히 큰 결과를 가져올 거거든.팁을 주자면 처음에는 더 어려워 보이는 선택이 옳은 선택일 경우가 많으니 기억해 둬.',
        ],
        luckyNumber: 6,
        luckyColor: 'Pink(핑크)',
    },
    {
        key: 'the_hermit',
        image: the_hermit,
        title: 'THE HERMIT',
        desc: [
            'The Hermit은 은둔자 카드로 현명함, 지식, 진실을 상징해.',
            '올해엔 나만의 시간을 갖는 것이 중요해. 걱정은 잠시 접어두고 잠시 휴식을 가져보는 건 어떨까? 혼자만의 시간을 통해 자기 발견과 성장을 이룰 수 있을 거야.',
            '오래된 감정과 해결되지 않는 갈등이 있다면 그냥 흘러가게 두는 것이 좋고, 나와 연결된 동료들과 진심과 지식을 공유하다 보면 직장과 직업에 대한 해답을 찾을 수도 있을 거야.',
            '나를 찾아가는 여정을 즐겨보도록!',
        ],
        luckyNumber: 9,
        luckyColor: 'Gray(회색)',
    },
    {
        key: 'ace_of_wands',
        image: ace_of_wands,
        title: 'ACE OF WANDS',
        desc: [
            'Ace of Wands 카드는 창의력, 판단력, 새로운 시작을 상징해.',
            '이 카드는 나에게 온 기회를 포착하는 것이 중요해.',
            '흥미로운 무언가의 시작을 나타내고특히나 뛰어난 판단력으로 예상하는대로 일이 흘러갈거야.',
            '에너지와 열정이 넘치게 한 해로 새로운 프로젝트나 아이디어를 추진하고, 자신의 창의성을 펼쳐 더 큰 성공을 이룰 수 있을 거야. 물론 금전도 마찬가지! 시작이 반이다! ',
        ],
        luckyNumber: 3,
        luckyColor: 'Red(빨강)',
    },
]

export default function ResultPage() {
    const [visitorCount, setVisitorCount] = React.useState(0)
    const pathname = usePathname()
    const params = useSearchParams()

    const cardname = params.get('card_type')

    const [open, setOpen] = React.useState(false)
    const [isMobile, setIsMobile] = React.useState(false)
    const [selectedCard, setSelectedCard] = React.useState<ICard | null>(null)

    React.useEffect(() => {
        const card = cardList.find((item) => item.key === cardname)
        setSelectedCard(card as ICard)
    }, [cardname])

    const handleResize = () => {
        if (window && window.innerWidth >= 1024) {
            setIsMobile(false)
        } else {
            setIsMobile(true)
        }
    }

    const getVisitorCount = async () => {
        const result = await fetch(`${process.env.NEXT_PUBLIC_HOST_URL}/api/test`)

        const domParser = new DOMParser()

        const html = await result.text()
        const svg = domParser.parseFromString(html, 'text/xml')

        const visitorCount = svg.childNodes[0].childNodes[7].childNodes[7].textContent

        setVisitorCount(visitorCount?.split('/')[1] as unknown as number)
    }

    const copyClipboard = async () => {
        try {
            await navigator.clipboard.writeText(`${process.env.NEXT_PUBLIC_HOST_URL}`)
            alert('클립보드에 링크가 복사되었어요.')
        } catch (err) {
            console.log(err)
        }
    }

    const copyHashTag = async () => {
        try {
            await navigator.clipboard.writeText('#사자랑가자 #quadhash #타로테스트 #신년운세')
            alert('해시태그가 복사되었어요.')
        } catch (err) {
            console.log(err)
        }
    }

    const imageDownload = () => {
        const userAgent = navigator.userAgent.toLowerCase()
        if (userAgent.indexOf('android') > -1) {
            //안드로이드
            saveAs(`/save_image_${selectedCard?.key}.png`, `save_image_${selectedCard?.key}.png`)
        } else if (
            userAgent.indexOf('iphone') > -1 ||
            userAgent.indexOf('ipad') > -1 ||
            userAgent.indexOf('ipod') > -1
        ) {
            //IOS
            alert('IOS 기기의 경우 새 창에서 이미지 저장을 해주세요.')
            window.open(`/save_image_${selectedCard?.key}.png`), '_blank'
        } else {
            //아이폰, 안드로이드 외 모바일

            saveAs(`/save_image_${selectedCard?.key}.png`, `save_image_${selectedCard?.key}.png`)
        }
    }

    const handleOpen = () => setOpen(!open)

    React.useEffect(() => {
        getVisitorCount()
        const initData = window.innerWidth
        setIsMobile(initData < 1024 ? true : false)
        window.addEventListener('resize', handleResize)

        return () => {
            window.removeEventListener('resize', handleResize)
        }
    }, [])

    React.useEffect(() => {
        console.log(isMobile)
    }, [isMobile])

    return (
        <>
            <div
                className={`flex flex-col justify-stretch items-center h-full text-white font-black pt-11 bg-black`}>
                {/* <div className="absolute top-0 w-full min-h-screen -z-10">
                    {isMobile ? (
                        <img className="w-full" src="/main_background_galaxy.png" alt="" />
                    ) : (
                        <img className="w-full" src="/main_background_galaxy_desktop.jpg" alt="" />
                    )}
                </div> */}
                <div className="w-[358px] lg:w-[1000px] relative">
                    <img
                        src={`${
                            isMobile
                                ? '/main_complete_frame.png'
                                : '/main_complete_frame_desktop.png'
                        }`}
                        alt=""
                    />

                    <div className="flex flex-col justify-start items-center w-[310px] lg:w-[591px] h-[900px] absolute top-0 lg:top-3 left-1/2 -translate-x-1/2 translate-y-16 gap-3">
                        <img
                            className="w-[200px] lg:w-[600px]"
                            src={`${
                                isMobile
                                    ? '/main_complete_title.png'
                                    : '/main_complete_title_desktop.png'
                            }`}
                            alt=""
                        />

                        <div className="mt-1 w-[201px] h-auto lg:w-[430px] lg:h-auto">
                            {selectedCard && (
                                <Image
                                    src={selectedCard?.image as StaticImageData}
                                    width={0}
                                    height={0}
                                    priority={true}
                                    sizes="100vw"
                                    alt=""
                                />
                            )}
                        </div>

                        <div className="text-[32px] lg:text-[62px] mt-5 lg:mt-10">
                            {selectedCard?.title}
                        </div>

                        <div className="text-xs lg:text-xl mt-4 lg:mt-10 text-center flex flex-col justify-center items-center">
                            {selectedCard?.desc.map((desc, index) => (
                                <div className={`font-[ScoreDream] mb-4`} key={index}>
                                    {desc}
                                </div>
                            ))}

                            <div className="flex flex-col justify-center items-center font-[ScoreDream400]">
                                <div>행운의 숫자: {selectedCard?.luckyNumber}</div>
                                <div>행운의 컬러: {selectedCard?.luckyColor}</div>
                            </div>
                        </div>

                        <div className="text-[#269E45] w-[234px] h-[56px] lg:w-[888px] lg:h-[340px] flex flex-col justify-start items-center gap-6 lg:gap-10 mt-[55px] lg:mt-10 absolute -bottom-[68px] lg:-bottom-[1180px]">
                            <div className="w-full flex flex-col lg:flex-row gap-5 mb-3">
                                <div
                                    className="w-full border-2 text-xs lg:text-[17px] bg-white border-[#269E45] rounded-full text-center leading-[53px] lg:leading-[62px] flex flex-row justify-center gap-2 items-center cursor-pointer"
                                    onClick={handleOpen}>
                                    <img src="/saza.png" alt="" />
                                    <p className="font-[ScoreDream300]">타로 카드 전체유형보기</p>
                                </div>
                                <div
                                    className="w-full border-2 text-xs lg:text-[17px] bg-white border-[#269E45] rounded-full text-center leading-[53px] lg:leading-[62px] flex flex-row justify-center gap-2 items-center cursor-pointer"
                                    onClick={copyClipboard}>
                                    <img src="/saza.png" alt="" />

                                    <p className="font-[ScoreDream300]">타로 링크 공유하기</p>
                                </div>
                                {/* 
                                <a
                                    className="w-full border-2 text-xs lg:text-[17px] bg-white border-[#269E45] rounded-full text-center leading-[53px] lg:leading-[62px] flex flex-row justify-center gap-2 items-center cursor-pointer"
                                    href={`/save_image_${selectedCard?.key}.png`}
                                    download={true}>
                                    <img src="/saza.png" alt="" />
                                    <p className="font-[ScoreDream300]">타로 결과 저장하기</p>
                                </a> */}
                                <div
                                    className="w-full border-2 text-xs lg:text-[17px] bg-white border-[#269E45] rounded-full text-center leading-[53px] lg:leading-[62px] flex flex-row justify-center gap-2 items-center cursor-pointer"
                                    onClick={imageDownload}>
                                    <img src="/saza.png" alt="" />
                                    <p className="font-[ScoreDream300]">타로 결과 저장하기</p>
                                </div>
                            </div>
                            <div className="w-full flex flex-col lg:flex-row lg:text-4xl justify-start lg:justify-center items-center lg:gap-3 text-white mt-[3px] lg:mt-[10px]">
                                <div className="font-[ScoreDream300]">지금까지</div>
                                <div className="font-[ScoreDream300]">
                                    {typeof visitorCount === 'number'
                                        ? visitorCount.toLocaleString()
                                        : parseInt(visitorCount).toLocaleString()}
                                    명이 참여했어요.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col justify-start items-center w-[298px] lg:w-[815px] y-[650px] lg:y-[185px] mt-[75px] lg:mt-[75px]">
                    <div className="font-[ScoreDream300] w-[234px] h-[60px] lg:w-full text-center leading-[56px] text-white lg:text-4xl">
                        사자랑가자 만나러 가기
                    </div>

                    <div className="flex flex-col lg:flex-row justify-center lg:justify-center items-center lg:items-center lg:mt-[50px] gap-6 text-[#269E45]">
                        <Link href={'https://www.instagram.com/saza.gaza/'}>
                            <div className="font-[ScoreDream300] w-[234px] lg:w-[388px] h-[60px] lg:h-[85px] border-2 text-xs lg:text-2xl bg-white border-[#269E45] rounded-full text-center leading-[56px] flex flex-row justify-center gap-2 items-center">
                                <img src="/insta.png" alt="" />
                                사자랑가자 팔로잉하기
                            </div>
                        </Link>

                        <Link href={'https://www.sazagaza.co.kr'}>
                            <div className="font-[ScoreDream300] w-[234px] lg:w-[388px] h-[60px] lg:h-[85px] border-2 text-xs lg:text-2xl bg-white border-[#269E45] rounded-full text-center leading-[56px] flex flex-row justify-center gap-2 items-center">
                                <img src="/saza.png" alt="" />
                                사자랑가자 SHOP 바로가기
                            </div>
                        </Link>
                    </div>
                </div>
                <div className="text-[0.7rem] lg:text-2xl mt-[81px] lg:mt-[70px] z-[10]">
                    ⓒ 2024 Quadhash Corporation. All Rights Reserved.
                </div>
                {/* <div className="flex flex-col justify-center items-center font-[ScoreDream400] text-[18px]">
                    <div>인스타그램 공유 이벤트도</div>
                    <div>확인해주세요.</div>
                </div> */}

                <MainBottomTextSlider />
            </div>

            <div className="w-full flex flex-row justify-center bg-[#FFFFFF]">
                <div className="w-full lg:w-[1000px] font-[ScoreDream200] flex flex-col items-center bg-[#FFFFFF] text-black">
                    <img className="w-full" src="/event_image_1.png" alt="" />

                    <div className="flex flex-row justify-center w-[260px] py-[16px] px-[26px] rounded-full items-center bg-[#FF4D00] mt-[37px] lg:mt-[163px] text-[#FFFFFF] gap-[16px] text-[15px] leading-[15px]">
                        <img src="/check_icon.svg" alt="" /> @SAZA.GAZA EVENT
                    </div>

                    <div className="mt-[37px]">
                        <img src="/event_ball.png" alt="" />
                    </div>

                    <div className="flex flex-col items-center mt-[24px] text-[20px] lg:text-[26px]">
                        <div>귀여운 타로카드와 실용적인</div>
                        <div>틴케이스가 만난 완벽한 조화!</div>
                    </div>

                    <div className="flex flex-col items-center mt-[25px] text-[20px] lg:text-[26px]">
                        <div>타로 결과 공유 이벤트에 참여하면</div>
                        <div className="font-[ScoreDream400]">추첨을 통해 사자랑가자</div>
                        <div className="font-[ScoreDream400]">
                            타로 카드 11종 + 틴케이스를 드립니다.
                        </div>
                        <div className="font-[ScoreDream400]"> (총 20명)</div>
                    </div>

                    <div className="w-[159px] lg:w-[208px] py-[16px] px-[20px] rounded-full text-center bg-[#FF4D00] mt-[52px] lg:mt-[140px] text-[#FFFFFF] text-[13px] lg:text-[16px] leading-[13px] lg:leading-[16px]">
                        이벤트 기간
                    </div>

                    <div className="mt-[22px] lg:mt-[20px] text-[13px] lg:text-[26px]">
                        <span className="font-[ScoreDream400]">이벤트 기간 </span>1월 29일 ~ 2월
                        23일
                    </div>

                    <div className="w-[159px] lg:w-[208px] py-[16px] px-[20px] rounded-full text-center bg-[#FF4D00] mt-[22px] lg:mt-[25px] text-[#FFFFFF] text-[13px] lg:text-[16px] leading-[13px] lg:leading-[16px]">
                        이벤트 대상
                    </div>

                    <div className="mt-[22px] lg:mt-[20px] font-[ScoreDream400] text-[13px] lg:text-[26px]">
                        @saza.gaza 팔로워 & 타로 공유 이벤트 참여자
                    </div>

                    <div className="w-[159px] lg:w-[208px] py-[16px] px-[20px] rounded-full text-center bg-[#FF4D00] mt-[22px] lg:mt-[25px] text-[#FFFFFF] text-[13px] lg:text-[16px] leading-[13px] lg:leading-[16px]">
                        이벤트 참여 방법
                    </div>

                    <div className="mt-[22px] lg:mt-[20px] font-[ScoreDream400] text-[13px] lg:text-[26px]">
                        인스타그램 @saza.gaza 팔로잉 + 타로 결과 공유 및 태그하기
                    </div>
                    <div className=" text-[13px] lg:text-[26px]">
                        (아래 참여 방법 확인해주세요.)
                    </div>

                    <div className="w-[159px] lg:w-[208px] py-[16px] px-[20px] rounded-full text-center bg-[#FF4D00] mt-[22px] lg:mt-[20px] text-[#FFFFFF] text-[13px] lg:text-[16px] leading-[13px] lg:leading-[16px]">
                        당첨자 발표
                    </div>

                    <div className="mt-[22px] lg:mt-[25px] text-center text-[13px] lg:text-[26px] flex flex-col lg:flex-row w-full justify-center lg:gap-2">
                        <div className="font-[ScoreDream400]">@saza.gaza 인스타그램을 통해</div>
                        <div>2월 29일 발표</div>
                    </div>

                    <div className="w-[350px] h-[378px] lg:h-[936px] lg:w-[900px] relative object-center overflow-hidden mt-[76px]">
                        <img className="absolute -top-1/2" src="/main_image.gif" alt="" />
                    </div>

                    <div className="w-full">
                        <img className="w-full object-cover" src="/event_image2.png" alt="" />
                    </div>
                    <div className="w-full">
                        <img className="w-full" src="/event_image3.png" alt="" />
                    </div>
                    <div className="w-full">
                        <img className="w-full" src="/event_image4.png" alt="" />
                    </div>

                    <div className="w-[236px] lg:w-[300px] border-[4px] border-[#378D42] py-[16px] px-[24px] rounded-full items-center bg-[#FF4D00] text-[#FFFFFF] text-[15px] lg:text-[25px] mt-[85px] lg:mt-[156px] flex flex-row gap-[16px] leading-[15px] lg:leading-[25px]">
                        <img src="/check_icon.svg" alt="" />
                        이벤트 참여 방법
                    </div>

                    <div className="w-[325px] lg:w-full mt-[49px] lg:mt-[156px] mx-[34px] pt-[54px] pb-[100px] lg:pb-[200px] px-[64px] lg:px-0 bg-[#2DA663] rounded-[15px] flex flex-col items-center">
                        <div className="w-[197px] lg:w-[478px] flex flex-col items-center">
                            <div className="w-[109px] lg:w-[265px] rounded-full bg-[#FFFFFF] lg:mt-[201px] px-[20px] py-[16px] text-[13px] lg:text-[25px] text-center text-[#01671C] leading-[5px] lg:leading-[25px] font-[ScoreDream200]">
                                MISSION 1
                            </div>

                            <div className="mt-[21px] lg:mt-[50px] w-[182px] lg:w-[478px]">
                                {isMobile ? (
                                    <img
                                        className="lg:w-[442px] translate-x-1"
                                        src="/event_image5.png"
                                        alt=""
                                    />
                                ) : (
                                    <img
                                        className="translate-x-1 lg:translate-x-4"
                                        src="/event_image5.png"
                                        alt=""
                                    />
                                )}
                            </div>

                            <div
                                className="w-full border-2 py-1 lg:py-4 text-xs bg-white border-[#289F48] text-[11px] lg:text-[25px] rounded-full text-center flex flex-row justify-center gap-2 items-center cursor-pointer text-[#01671C] mt-[21px] lg:mt-[50px] leading-[11px] lg:leading-[25px]"
                                onClick={imageDownload}>
                                <img src="/saza.svg" alt="" />
                                <p className="font-[ScoreDream400]">타로 결과 저장하기</p>
                            </div>
                            <div className="mt-[21px] text-[#FFFFFF] text-center lg:mt-[50px]">
                                <div className="flex flex-row justify-center items-end">
                                    <p className="text-[20px] lg:text-[25px] leading-[20px] lg:leading-[25px]">
                                        타로 결과 저장하기
                                    </p>
                                    <p className="text-[13px] lg:text-[25px] leading-[13px] lg:leading-[25px]">
                                        를
                                    </p>
                                </div>
                                <div className="text-[13px] lg:text-[25px] lg:leading-[25px] mt-1 lg:mt-2">
                                    눌러 저장해주세요
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="w-[325px] lg:w-full mt-[49px] mx-[34px] py-[54px] px-[10px] bg-[#2DA663] rounded-[15px] lg:rounded-t-[15px] lg:rounded-b-none flex flex-col items-center">
                        <div className="w-[244px] lg:w-[660px] flex flex-col items-center">
                            <div className="w-[109px] lg:w-[265px] rounded-full bg-[#FFFFFF] lg:mt-[152px] px-[20px] py-[16px] text-[13px] lg:text-[25px] text-center text-[#01671C] leading-[5px] lg:leading-[25px] font-[ScoreDream200]">
                                MISSION 2
                            </div>

                            <div className="mt-[31px] lg:mt-[50px] flex flex-col justify-center items-stretch w-full text-[11px] lg:text-[20px] text-[#01671C]">
                                <div className="flex flex-row justify-center items-center gap-2">
                                    <div className="w-[79px] lg:w-[213px] px-[7px] py-[8px] lg:py-[14px] rounded-full bg-[#FFFFFF] text-center leading-[11px] lg:leading-[20px]">
                                        #사자랑가자
                                    </div>
                                    <div className="w-[79px] lg:w-[213px] px-[7px] py-[8px] lg:py-[14px] rounded-full bg-[#FFFFFF] text-center leading-[11px] lg:leading-[20px]">
                                        #타로
                                    </div>

                                    <div className="w-[79px] lg:w-[213px] px-[7px] py-[8px] lg:py-[14px] rounded-full bg-[#FFFFFF] text-center leading-[11px] lg:leading-[20px]">
                                        @saza.gaza
                                    </div>
                                </div>
                            </div>

                            <div className="mt-[21px] lg:mt-[50px] text-center bg-[#FFFFFF] text-black rounded-3xl px-[10px] py-[15px] lg:py-[62px] lg:px-[72px] w-full">
                                <div className="flex flex-col lg:flex-row justify-center lg:items-start items-center w-full font-[ScoreDream400] lg:gap-2">
                                    <p className="text-[13px] lg:text-[25px] leading-[20px] lg:leading-[35px]">
                                        1. 인스타그램 @saza.gaza를
                                    </p>
                                    <p className="text-[13px] lg:text-[25px] leading-[20px] lg:leading-[35px]">
                                        팔로우해주세요.
                                    </p>
                                </div>

                                <div className="flex flex-row justify-center items-end">
                                    {/* <p className="text-[20px] lg:text-[25px] leading-[20px] lg:leading-[35px]">
                                        인스타그램
                                    </p>
                                    <p className="text-[13px] lg:text-[25px] leading-[13px] lg:leading-[35px]">
                                        에
                                    </p> */}
                                </div>
                                <div className="text-[11px] lg:text-[25px] leading-[20px] lg:leading-[35px] mt-6">
                                    2. 아래의 해시태그를 달고 저장한 이미지를
                                </div>
                                <div className="text-[11px] lg:text-[25px] leading-[20px] lg:leading-[35px]">
                                    스토리 또는 릴스로 업로드해주세요.
                                </div>
                                <div className="text-[11px] lg:text-[25px] leading-[20px] lg:leading-[35px]">
                                    하단 해시태그 복사하기 클릭!
                                </div>
                            </div>

                            <div
                                className="w-[176px] lg:w-[476px] rounded-full bg-[#FFFFFF] px-[20px] py-[16px] lg:py-5 lg:mb-[100px] text-[12px] lg:text-[25px] text-[#01671C] text-center mt-[59px] mb-[3px] leading-[12px] lg:leading-[25px] font-[ScoreDream500] cursor-pointer"
                                onClick={copyHashTag}>
                                해시태그 복사하기
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col items-center mt-[87px] lg:mt-0 bg-[#FF4D00] py-[85px] lg:py-[110px] text-[#FFFFFF] text-[13px] lg:text-[25px] w-full">
                        <div>
                            <div>인스타그램 참여 시 @saza.gaza 팔로우 및 계정 태그 필수!</div>
                            <div className="mt-[13px]">
                                *비공개 계정은 확인이 어려워 당첨에서 제외됩니다.
                            </div>
                            <div>*당첨자 발표는 사자랑가자 인스타그램 스토리를 통해</div>
                            <div>발표되며, DM을 통해 안내될 예정입니다.</div>
                        </div>
                    </div>
                </div>
            </div>
            <CardListModal open={open} handleOpen={handleOpen} />
        </>
    )
}
