"use client";

import { useState, type FormEvent } from "react";
import { formatDateKey, isValidBirthdate } from "@/lib/date";

const CURRENT_YEAR = new Date().getFullYear();
const YEARS = Array.from({ length: 100 }, (_, i) => CURRENT_YEAR - i);
const MONTHS = Array.from({ length: 12 }, (_, i) => i + 1);

function daysInMonth(year: number, month: number): number {
  return new Date(year, month, 0).getDate();
}

interface Props {
  isNight: boolean;
  onDiagnose: (birthdateKey: string) => void;
}

export default function BirthdateForm({ isNight, onDiagnose }: Props) {
  const [year, setYear] = useState(CURRENT_YEAR - 20);
  const [month, setMonth] = useState(1);
  const [day, setDay] = useState(1);
  const [error, setError] = useState<string | null>(null);

  const days = Array.from({ length: daysInMonth(year, month) }, (_, i) => i + 1);

  function handleMonthChange(nextMonth: number) {
    setMonth(nextMonth);
    const maxDay = daysInMonth(year, nextMonth);
    if (day > maxDay) setDay(maxDay);
  }

  function handleYearChange(nextYear: number) {
    setYear(nextYear);
    const maxDay = daysInMonth(nextYear, month);
    if (day > maxDay) setDay(maxDay);
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (!isValidBirthdate(year, month, day)) {
      setError("正しい生年月日を選んでね");
      return;
    }
    setError(null);
    onDiagnose(formatDateKey(year, month, day));
  }

  const selectClass = `rounded-xl border px-3 py-2 text-base sm:text-lg font-medium focus:outline-none focus:ring-2 ${
    isNight
      ? "bg-slate-800 border-slate-600 text-slate-100 focus:ring-teal-400"
      : "bg-white border-pink-200 text-slate-800 focus:ring-pink-400"
  }`;

  return (
    <form onSubmit={handleSubmit} className="flex flex-col items-center gap-4 w-full max-w-md">
      <div className="flex gap-2 w-full justify-center">
        <select
          aria-label="生まれ年"
          className={selectClass}
          value={year}
          onChange={(e) => handleYearChange(Number(e.target.value))}
        >
          {YEARS.map((y) => (
            <option key={y} value={y}>
              {y}年
            </option>
          ))}
        </select>
        <select
          aria-label="生まれ月"
          className={selectClass}
          value={month}
          onChange={(e) => handleMonthChange(Number(e.target.value))}
        >
          {MONTHS.map((m) => (
            <option key={m} value={m}>
              {m}月
            </option>
          ))}
        </select>
        <select
          aria-label="生まれ日"
          className={selectClass}
          value={day}
          onChange={(e) => setDay(Number(e.target.value))}
        >
          {days.map((d) => (
            <option key={d} value={d}>
              {d}日
            </option>
          ))}
        </select>
      </div>

      {error && <p className="text-sm text-red-500">{error}</p>}

      <button
        type="submit"
        className={`rounded-full px-10 py-3 text-lg font-bold shadow-lg transition-transform hover:scale-105 active:scale-95 ${
          isNight ? "bg-teal-500 text-white shadow-teal-900/50" : "bg-pink-500 text-white shadow-pink-300/50"
        }`}
      >
        診断する
      </button>
    </form>
  );
}
