export const MAX_HEARTS = 5;

/**
 * 今日の運勢をハートの数(1〜5)で表す。weightで出やすさを調整している
 * (このサイトの「元気になれる」コンセプトに合わせて、多め寄りに)。
 */
const WEIGHTS = [
  { count: 1, weight: 10 },
  { count: 2, weight: 15 },
  { count: 3, weight: 25 },
  { count: 4, weight: 30 },
  { count: 5, weight: 20 },
];

const TOTAL_WEIGHT = WEIGHTS.reduce((sum, w) => sum + w.weight, 0);

export function pickHeartCount(seedValue: number): number {
  let n = seedValue % TOTAL_WEIGHT;
  for (const w of WEIGHTS) {
    if (n < w.weight) return w.count;
    n -= w.weight;
  }
  return WEIGHTS[0].count;
}

/** ♥♥♥♡♡ のようなテキスト表現(シェア文・OGタイトルなど、絵文字が使える場所ならどこでも使える) */
export function heartsDisplay(count: number, max: number = MAX_HEARTS): string {
  return "♥".repeat(count) + "♡".repeat(Math.max(0, max - count));
}
