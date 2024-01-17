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
            'The The Strength 카드는 용기, 자신감, 열정을 상징해.',
            '이런 풍부한 자질을 가지고 있다는 것을 나타내고, 2024년은 내면의 강인함과 용기가 돋보이는 해가 될 거야.',
            '2024년은 이미 목표에 달성하기 위한 자질을 갖추고 있으며, 인생의 다음 단계로 나아갈 준비가 되어 있다는 것을 의미해.',
            '많은 도전이 있을 수 있지만 주변의 도움을 통해 어려운 상황을 극복하며 용기와 포용력으로 주변을 이끌 거야.',
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
        const result = await fetch('http://localhost:3000/api/test')

        const domParser = new DOMParser()

        const html = await result.text()
        const svg = domParser.parseFromString(html, 'text/xml')

        const visitorCount = svg.childNodes[0].childNodes[7].childNodes[7].textContent

        setVisitorCount(visitorCount?.split('/')[1] as unknown as number)
    }

    const copyClipboard = async () => {
        try {
            await navigator.clipboard.writeText(`${process.env.NEXT_PUBLIC_HOST_URL}${pathname}`)
            alert('클립보드에 링크가 복사되었어요.')
        } catch (err) {
            console.log(err)
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

    return (
        <>
            <div
                className={`${
                    isMobile
                        ? 'bg-[url("/main_background_galaxy.jpg")]'
                        : 'bg-[url("/main_background_galaxy_desktop.jpg")]'
                } flex flex-col justify-stretch items-center py-8 w-full min-h-screen h-full bg-no-repeat bg-cover text-white font-black`}>
                <div className="w-[358px] lg:w-[1000px] relative">
                    <img
                        src={`${
                            isMobile
                                ? '/main_complete_frame.png'
                                : '/main_complete_frame_desktop.png'
                        }`}
                        alt=""
                    />

                    <div className="flex flex-col justify-start items-center w-[231px] lg:w-[591px] h-[900px] absolute top-0 left-1/2 -translate-x-1/2 translate-y-16 gap-3">
                        <img
                            src={`${
                                isMobile
                                    ? '/main_complete_title.png'
                                    : '/main_complete_title_desktop.png'
                            }`}
                            alt=""
                        />

                        <div className="mt-5 w-[201px] h-auto lg:w-[430px] lg:h-auto">
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
                        {/* <img
                            className="mt-5 w-[201px] h-[311px] lg:w-[360px] lg:h-auto"
                            src="/the_lovers.gif"
                            alt=""
                        /> */}

                        <div className="text-2xl lg:text-4xl mt-5 lg:mt-10">
                            {selectedCard?.title}
                        </div>

                        <div className="text-xs lg:text-2xl mt-4 lg:mt-10 text-center flex flex-col justify-center items-center">
                            {selectedCard?.desc.map((desc, index) => (
                                <div
                                    className={`${index === 0 ? 'font-[NotoSansKR500]' : ''} mb-4`}
                                    key={index}>
                                    {desc}
                                </div>
                            ))}

                            <div className="flex flex-col justify-center items-center font-[NotoSansKR500]">
                                <div>행운의 숫자: {selectedCard?.luckyNumber}</div>
                                <div>행운의 컬러: {selectedCard?.luckyColor}</div>
                            </div>
                        </div>

                        <div className="text-[#269E45] w-[234px] h-[56px] lg:w-[888px] lg:h-[340px] flex flex-col justify-start items-center gap-6 lg:gap-10 mt-5 lg:mt-10">
                            <div className="w-full flex flex-col lg:flex-row gap-4">
                                <div
                                    className="w-full border-2 text-xs lg:text-lg bg-white border-[#269E45] rounded-full text-center leading-[53px] lg:leading-[62px] flex flex-row justify-center gap-4 items-center cursor-pointer"
                                    onClick={handleOpen}>
                                    <img src="/saza.svg" alt="" />
                                    타로 카드 전체유형보기
                                </div>
                                <div
                                    className="w-full border-2 text-xs lg:text-lg bg-white border-[#269E45] rounded-full text-center leading-[53px] lg:leading-[62px] flex flex-row justify-center gap-4 items-center cursor-pointer"
                                    onClick={copyClipboard}>
                                    <img src="/saza.svg" alt="" />
                                    타로점 공유하기
                                </div>

                                <a
                                    className="w-full border-2 text-xs lg:text-lg bg-white border-[#269E45] rounded-full text-center leading-[53px] lg:leading-[62px] flex flex-row justify-center gap-4 items-center cursor-pointer"
                                    href={`/save_image_${selectedCard?.key}.png`}
                                    download={true}>
                                    <img src="/saza.svg" alt="" />
                                    타로 결과 저장하기
                                </a>
                            </div>
                            <div className="w-full flex flex-col lg:flex-row lg:text-4xl justify-start lg:justify-center items-center text-white lg:mt-10">
                                <div>지금까지&ensp;</div>
                                <div className="font-[NotoSansKR500]">
                                    {visitorCount} 명이 참여했어요.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col justify-start items-center w-[298px] lg:w-[815px] y-[650px] lg:y-[185px] gap-6 mt-8 lg:mt-16">
                    <div className="w-[234px] h-[60px] lg:w-full text-center leading-[56px] text-white lg:text-4xl">
                        사자와 가자 만나러 가기
                    </div>

                    <div className="flex flex-col lg:flex-row justify-center lg:justify-center items-center lg:items-center gap-6 text-[#269E45]">
                        <Link href={'https://www.instagram.com/saza.gaza/'}>
                            <div className="w-[234px] lg:w-[388px] h-[60px] lg:h-[85px] border-2 text-xs lg:text-2xl bg-white border-[#269E45] rounded-full text-center leading-[56px] flex flex-row justify-center gap-2 items-center">
                                <img src="/insta.svg" alt="" />
                                사자와 가자 팔로잉하기
                            </div>
                        </Link>

                        <Link href={'https://quadhash.kr/'}>
                            <div className="w-[234px] lg:w-[388px] h-[60px] lg:h-[85px] border-2 text-xs lg:text-2xl bg-white border-[#269E45] rounded-full text-center leading-[56px] flex flex-row justify-center gap-2 items-center font-[NotoSansKR]">
                                <img src="/saza.svg" alt="" />
                                사자와 가자 SHOP 바로가기
                            </div>
                        </Link>
                    </div>
                </div>
                <div className="text-xs lg:text-2xl mt-7 mt-20">
                    ⓒ 2024 Quadhash Corporation. All Rights Reserved.
                </div>
            </div>
            <CardListModal open={open} handleOpen={handleOpen} />
        </>
    )
}
