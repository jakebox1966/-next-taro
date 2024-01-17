import * as React from 'react'

export interface ITestProps {}

export default function Test(props: ITestProps) {
    return (
        <div>
            <img className="loading" src="/spinner.png" alt="" />
        </div>
    )
}
