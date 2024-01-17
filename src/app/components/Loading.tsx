import * as React from 'react'

export interface ILoadingProps {}

export default function Loading(props: ILoadingProps) {
    return (
        <div>
            <img className="loading" src="/spinner.png" alt="" />
        </div>
    )
}
