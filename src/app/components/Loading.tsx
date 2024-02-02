import * as React from 'react'

export interface ILoadingProps {}

/**
 *
 * 카드 선택 후, 결과 페이지 진입 전, display되는 spinner입니다.
 *
 */
export default function Loading(props: ILoadingProps) {
    return (
        <div>
            <img className="loading" src="/spinner.png" alt="" />
        </div>
    )
}
