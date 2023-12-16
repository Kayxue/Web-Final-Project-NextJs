import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: '堆疊',
    description: '堆疊測試器',
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <body>
            { children }
        </body>
    )
}