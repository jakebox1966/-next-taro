/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,

    // async headers() {
    //     return[
    //         {
    //             source: '/api/test',
    //             headers: [
    //                 {key: 'Cache-Control',
    //                 value: 's-maxage=1, stale-'
    //             }
    //             ]
    //         }
    //     ]
    // },
    async rewrites() {
        return [
            {
                source: '/api/test',
                destination:
                    'https://hits.seeyoufarm.com/api/count/incr/badge.svg?url=https%3A%2F%2Ftarot.quadhash.kr&count_bg=%2379C83D&title_bg=%23555555&icon=&icon_color=%23E7E7E7&title=hits&edge_flat=false',
            },
        ]
    },
}

module.exports = nextConfig
