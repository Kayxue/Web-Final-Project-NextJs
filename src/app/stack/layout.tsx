import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "資料結構小遊戲 | 堆疊",
	description: "堆疊 from 資料結構小遊戲",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return <body>{children}</body>;
}
