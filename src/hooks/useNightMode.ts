"use client";

import { useEffect, useState } from "react";
import { isNightModeJST } from "@/lib/date";

/**
 * 日本時間の現在時刻を定期チェックし、21:00〜4:59ならナイトモードとして扱う。
 * isNightModeJST() はエポック時刻から計算するため、サーバー/クライアントの
 * 実行タイムゾーンに関わらず同じ結果になり、ハイドレーション不整合は起きない。
 */
export function useNightMode(intervalMs = 30_000) {
  const [isNight, setIsNight] = useState(() => isNightModeJST());

  useEffect(() => {
    const id = setInterval(() => setIsNight(isNightModeJST()), intervalMs);
    return () => clearInterval(id);
  }, [intervalMs]);

  return { isNight };
}
