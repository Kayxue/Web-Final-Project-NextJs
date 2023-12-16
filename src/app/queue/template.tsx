import { Metadata } from "next";

export const metadata: Metadata = {
    title: '佇列',
    description: '佇列測試器',
}

export default function Template({ children }: { children: React.ReactNode }) {
    return <body>{children}</body>
}