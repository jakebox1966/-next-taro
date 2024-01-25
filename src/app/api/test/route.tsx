import { NextRequest } from 'next/server'

export async function GET(req: NextRequest) {
    const result = await fetch(
        // 'https://hits.seeyoufarm.com/api/count/incr/badge.svg?url=http%3A%2F%2Flocalhost%3A3000&count_bg=%2379C83D&title_bg=%23555555&icon=&icon_color=%23E7E7E7&title=hits&edge_flat=false',
        // {
        //     method: 'GET',
        //     cache: 'no-store',
        //     headers: {
        //         'Content-Type': 'image/svg+xml',
        //         'CDN-Cache-Control': 'max-age=0',
        //         'Vercel-CDN-Cache-Control': 'max-age=0',
        //     },
        // },
        'https://hits.seeyoufarm.com/api/count/incr/badge.svg?url=https%3A%2F%2Ftarot.quadhash.kr&count_bg=%2379C83D&title_bg=%23555555&icon=&icon_color=%23E7E7E7&title=hits&edge_flat=false',
        {
            method: 'GET',
            cache: 'no-store',
            headers: {
                'Content-Type': 'image/svg+xml',
                'CDN-Cache-Control': 'max-age=0',
                'Vercel-CDN-Cache-Control': 'max-age=0',
            },
        },
    )
    return result
}
