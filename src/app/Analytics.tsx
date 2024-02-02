import Script from 'next/script'
import * as React from 'react'

export interface IAnalyticsProps {}

/**
 * 마케팅 팀에서 요청 주신 google analytics 삽입 코드입니다. 추 후에도 Nextjs나 React프로젝트에서 재사용할 수 있게끔 컴포넌트 형식으로 만들었습니다.
 *
 */
export default function Analytics(props: IAnalyticsProps) {
    return (
        <>
            {/* <!-- Google Tag Manager (noscript) --> */}
            <noscript
                dangerouslySetInnerHTML={{
                    __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-5SFN846T" height="0" width="0" style="display: none; visibility: hidden;"></iframe>`,
                }}
            />
            {/* // <!-- End Google Tag Manager (noscript) --> */}

            {/* <!-- Google Tag Manager --> */}
            <Script id="google-tag-management" strategy="afterInteractive">
                {`
        (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
        'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
        })(window,document,'script','dataLayer','GTM-5SFN846T');
        `}
            </Script>

            {/* <!-- End Google Tag Manager --> */}
        </>
    )
}
