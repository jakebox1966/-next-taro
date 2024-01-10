/** @type {import('next').NextConfig} */
const nextConfig = {
    // reactStrictMode: true,
    // swcMinify: true,
    async rewrites() {
        console.log('now rewrite')
        return [
            {
                source: '/api/:path*',
                destination:
                    'https://hits.seeyoufarm.com/api/count/keep/badge.svg?url=https%3A%2F%2Ftarot.quadhash.kr&count_bg=%2379C83D&title_bg=%23555555&icon=&icon_color=%23E7E7E7&title=hits&edge_flat=false',
            },
        ]
    },
}

module.exports = nextConfig
