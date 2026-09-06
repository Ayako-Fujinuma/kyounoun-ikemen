"use client";

import { useState } from "react";
import { useNightMode } from "@/hooks/useNightMode";
import { getTodayKeyJST } from "@/lib/date";
import { generateFortune, type FortuneResult } from "@/lib/fortune";
import BirthdateForm from "./BirthdateForm";
import FortuneResultCard from "./FortuneResultCard";

export default function FortuneApp() {
  const { isNight } = useNightMode();
  const [result, setResult] = useState<FortuneResult | null>(null);

  function handleDiagnose(birthdateKey: string) {
    setResult(generateFortune(birthdateKey, getTodayKeyJST(), isNight));
  }

  return (
    <div className="flex flex-col items-center gap-8 w-full">
      <BirthdateForm isNight={isNight} onDiagnose={handleDiagnose} />
      {result && <FortuneResultCard result={result} />}
    </div>
  );
}
