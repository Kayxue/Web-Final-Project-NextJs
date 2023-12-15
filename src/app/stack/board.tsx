"use client";
import { stackItem } from "./page"

interface props {
    stack: stackItem[],
    showTop:boolean
}

export default function board({ stack,showTop }: props) {
    return (
        <table>
            <tbody>
                {stack.toReversed().map((e, i) => <tr key={i}><td className={e.hasItem ? (showTop && e.top?"inserted top":"inserted") : ""}>{e.num?.toString()??"　"}</td></tr>)}
            </tbody>
        </table>
    )
}