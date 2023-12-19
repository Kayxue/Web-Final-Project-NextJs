"use client";
interface props {
    content:string
}

export default function board({ content }: props) {
    return (
        <table>
            <tbody>
                <tr>
                    <td className="inserted">
                        {content}
                    </td>
                </tr>
            </tbody>
        </table>
    )
}