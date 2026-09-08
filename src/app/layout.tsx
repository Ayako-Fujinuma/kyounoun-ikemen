import type { Metadata } from "next";
import { Zen_Maru_Gothic } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import SiteThemeWrapper from "@/components/SiteThemeWrapper";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const GA_MEASUREMENT_ID = "G-EFK96QLXYT";

const zenMaruGothic = Zen_Maru_Gothic({
  variable: "--font-zen-maru",
  subsets: ["latin"],
  weight: ["400", "500", "700", "900"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://ikemen.kyounoun.com"),
  title: "今日の運勢イケメン占い",
  description:
    "生年月日を入れるだけで、今日のあなたにぴったりのイケメンが応援コメントを届けてくれる占いサイト。",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="ja" className={`${zenMaruGothic.variable} h-full antialiased`}>
      <head>
        {/* AdSenseのクローラーがコードを検出できるよう、next/scriptではなく素の<script>タグで埋め込む */}
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3246099949879278"
          crossOrigin="anonymous"
        />
      </head>
      <body className="min-h-full flex flex-col">
        <SiteThemeWrapper>
          <Header />
          {children}
          <Footer />
        </SiteThemeWrapper>
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_MEASUREMENT_ID}');
          `}
        </Script>
      </body>
    </html>
  );
}
