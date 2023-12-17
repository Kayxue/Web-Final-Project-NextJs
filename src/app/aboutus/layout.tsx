import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: '關於',
    description: '關於我們',
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <body>
            {children}
        </body>
    )
}