import { NextRequest } from 'next/server'

export const revalidate = 0

/**
 * 페이지 방문자수 카운팅 UI를 위한 HITS svg를 내려받기 위한 API입니다.
 *
 * incr : 타로페이지 접속에 따라 해당 카운트가 증가합니다.
 * keep : 타로페이지 접속을 해도 이전 카운트를 유지합니다.
 * @param req
 * @returns
 */
export async function GET(req: NextRequest) {
    const result = await fetch(
        'https://hits.seeyoufarm.com/api/count/incr/badge.svg?url=https%3A%2F%2Ftarot.quadhash.kr&count_bg=%2379C83D&title_bg=%23555555&icon=&icon_color=%23E7E7E7&title=hits&edge_flat=false',
        {
            method: 'GET',
            cache: 'no-store',
        },
        // 'https://hits.seeyoufarm.com/api/count/keep/badge.svg?url=https%3A%2F%2Ftarot.quadhash.kr&count_bg=%2379C83D&title_bg=%23555555&icon=&icon_color=%23E7E7E7&title=hits&edge_flat=false',
        // {
        //     method: 'GET',
        //     cache: 'no-store',
        //     // headers: {
        //     // 'Content-Type': 'image/svg+xml',
        //     // 'CDN-Cache-Control': 'max-age=0',
        //     // 'Vercel-CDN-Cache-Control': 'max-age=0',
        //     // },
        // },
    )
    return result
}
