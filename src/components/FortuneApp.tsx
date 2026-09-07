"use client";

import { useRouter } from "next/navigation";
import { useNightMode } from "@/hooks/useNightMode";
import BirthdateForm from "./BirthdateForm";

export default function FortuneApp() {
  const { isNight } = useNightMode();
  const router = useRouter();

  function handleDiagnose(birthdateKey: string) {
    router.push(`/result?birth=${birthdateKey}`);
  }

  return (
    <div className="flex flex-col items-center gap-8 w-full">
      <BirthdateForm isNight={isNight} onDiagnose={handleDiagnose} />
    </div>
  );
}
