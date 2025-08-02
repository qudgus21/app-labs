import "../global.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Todo App",
  description: "간단하고 효율적인 할 일 관리 앱",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element {
  return (
    <html lang="ko">
      <body className={`${inter.className} bg-zinc-900 text-white`}>
        {children}
      </body>
    </html>
  );
}
