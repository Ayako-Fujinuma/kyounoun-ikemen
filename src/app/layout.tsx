import type { Metadata } from "next";
import { Zen_Maru_Gothic } from "next/font/google";
import "./globals.css";
import SiteThemeWrapper from "@/components/SiteThemeWrapper";
import Header from "@/components/Header";

const zenMaruGothic = Zen_Maru_Gothic({
  variable: "--font-zen-maru",
  subsets: ["latin"],
  weight: ["400", "500", "700", "900"],
});

export const metadata: Metadata = {
  title: "今日の運勢イケメン占い",
  description:
    "生年月日を入れるだけで、今日のあなたにぴったりのイケメンが応援コメントを届けてくれる占いサイト。",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="ja" className={`${zenMaruGothic.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        <SiteThemeWrapper>
          <Header />
          {children}
        </SiteThemeWrapper>
      </body>
    </html>
  );
}
