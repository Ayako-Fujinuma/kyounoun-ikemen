export interface FortuneRank {
  label: string;
  color: string;
}

/**
 * おみくじ形式の運勢ランク。weightで出やすさを調整している
 * (このサイトの「元気になれる」コンセプトに合わせて、吉方向をやや多めに)。
 */
const RANKS: (FortuneRank & { weight: number })[] = [
  { label: "大吉", weight: 20, color: "text-rose-500" },
  { label: "中吉", weight: 20, color: "text-orange-500" },
  { label: "吉", weight: 20, color: "text-amber-500" },
  { label: "小吉", weight: 15, color: "text-yellow-600" },
  { label: "末吉", weight: 15, color: "text-lime-600" },
  { label: "凶", weight: 7, color: "text-slate-500" },
  { label: "大凶", weight: 3, color: "text-slate-600" },
];

const TOTAL_WEIGHT = RANKS.reduce((sum, r) => sum + r.weight, 0);

export function pickFortuneRank(seedValue: number): FortuneRank {
  let n = seedValue % TOTAL_WEIGHT;
  for (const rank of RANKS) {
    if (n < rank.weight) return rank;
    n -= rank.weight;
  }
  return RANKS[0];
}

/** 凶・大凶のような低ランクの日は、応援コメントもハイテンションではなく労わる方向にする */
export function isLowFortuneRank(label: string): boolean {
  return label === "凶" || label === "大凶";
}
