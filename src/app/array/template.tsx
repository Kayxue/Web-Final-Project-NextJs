import { Metadata } from "next";

export const metadata: Metadata = {
    title: '陣列',
    description: '陣列測試器',
}

export default function Template({ children }: { children: React.ReactNode }) {
    return <body>{children}</body>
}