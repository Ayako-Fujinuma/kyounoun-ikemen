const JST_OFFSET_MS = 9 * 60 * 60 * 1000;

/**
 * サーバー/ブラウザのタイムゾーンに関わらず、常に日本時間として扱える Date を返す。
 * 実時刻(UTC)に9時間を足した上で UTC の getter を使うことで、実行環境のロケールに依存しない。
 */
export function getJSTParts(date: Date = new Date()) {
  const jstMs = date.getTime() + JST_OFFSET_MS;
  const jst = new Date(jstMs);
  return {
    year: jst.getUTCFullYear(),
    month: jst.getUTCMonth() + 1,
    day: jst.getUTCDate(),
    hour: jst.getUTCHours(),
    minute: jst.getUTCMinutes(),
  };
}

export function formatDateKey(year: number, month: number, day: number): string {
  return `${year}-${String(month).padStart(2, "0")}-${String(day).padStart(2, "0")}`;
}

export function getTodayKeyJST(date: Date = new Date()): string {
  const { year, month, day } = getJSTParts(date);
  return formatDateKey(year, month, day);
}

/** 21:00〜翌4:59(JST)をナイトモードとする */
export function isNightModeJST(date: Date = new Date()): boolean {
  const { hour } = getJSTParts(date);
  return hour >= 21 || hour < 5;
}

export function isValidBirthdate(year: number, month: number, day: number): boolean {
  if (!year || !month || !day) return false;
  const d = new Date(year, month - 1, day);
  return (
    d.getFullYear() === year &&
    d.getMonth() === month - 1 &&
    d.getDate() === day
  );
}
