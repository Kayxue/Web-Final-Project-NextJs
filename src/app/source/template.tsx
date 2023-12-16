import { Metadata } from "next";

export const metadata: Metadata = {
    title: '資源',
    description: '相關資源',
}

export default function Template({ children }: { children: React.ReactNode }) {
    return <body>{children}</body>
}