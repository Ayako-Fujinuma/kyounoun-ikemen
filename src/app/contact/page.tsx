import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "お問い合わせ | 今日の運勢イケメン占い",
  description: "今日の運勢イケメン占いへのお問い合わせフォームです。",
};

export default function ContactPage() {
  return (
    <main className="flex-1 px-6 py-16 max-w-xl mx-auto w-full">
      <h1 className="text-2xl font-extrabold text-center mb-2">お問い合わせ</h1>
      <p className="text-center opacity-70 mb-10 text-sm leading-relaxed">
        ご意見・ご要望・不具合の報告などは、以下のフォームよりお気軽にお送りください。
      </p>
      <ContactForm />
    </main>
  );
}
