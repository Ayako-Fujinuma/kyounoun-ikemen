export interface Character {
  id: string;
  name: string;
  reading: string;
  type: string;
  catchphrase: string;
  intro: string;
  image: string;
  gradient: string;
}

/**
 * 診断結果・キャラ紹介ページ共通のキャラクターデータ。
 * 画像は public/characters/ 配下の実ファイルを参照する。
 * 新しいキャラを追加する場合はここに1件足すだけで診断・紹介ページ両方に反映される。
 */
export const characters: Character[] = [
  {
    id: "ren",
    name: "蓮",
    reading: "レン",
    type: "王子系",
    catchphrase: "君の笑顔が、今日の主役だよ。",
    intro: "みんなの憧れ、学園の王子様タイプ。優しさと気品を兼ね備え、どんな時も君の味方。",
    image: "/characters/ren.jpeg",
    gradient: "from-rose-400 to-pink-500",
  },
  {
    id: "haruto",
    name: "陽翔",
    reading: "ハルト",
    type: "幼なじみ系",
    catchphrase: "隣にいるだけで安心するでしょ?",
    intro: "小さい頃からずっと一緒にいるような安心感。素朴で親しみやすい、太陽みたいな存在。",
    image: "/characters/haruto.jpeg",
    gradient: "from-amber-400 to-orange-500",
  },
  {
    id: "aoi",
    name: "碧",
    reading: "アオイ",
    type: "クール系",
    catchphrase: "……大丈夫、俺がついてる。",
    intro: "口数は少ないけど、いつも一番近くで見てくれているミステリアスな一面。",
    image: "/characters/aoi.jpeg",
    gradient: "from-sky-400 to-blue-600",
  },
  {
    id: "minato",
    name: "湊",
    reading: "ミナト",
    type: "年下系",
    catchphrase: "今日もいっぱい褒めてあげる!",
    intro: "元気いっぱいの甘えん坊。素直な言葉でまっすぐに応援してくれる。",
    image: "/characters/minato.jpeg",
    gradient: "from-teal-400 to-emerald-500",
  },
  {
    id: "rei",
    name: "怜",
    reading: "レイ",
    type: "大人系",
    catchphrase: "焦らなくていい、君のペースで。",
    intro: "余裕たっぷりの大人な包容力。どんな悩みもゆったり受け止めてくれる。",
    image: "/characters/rei.jpeg",
    gradient: "from-indigo-400 to-violet-600",
  },
  {
    id: "shido",
    name: "獅道",
    reading: "シドウ",
    type: "ワイルド系",
    catchphrase: "その調子だ、突っ走れ!",
    intro: "情熱的で真っ直ぐな性格。君の背中を強く押してくれる頼れる存在。",
    image: "/characters/shidou.jpeg",
    gradient: "from-red-500 to-orange-600",
  },
  {
    id: "sora",
    name: "そら",
    reading: "ソラ",
    type: "天然系",
    catchphrase: "今日もふわっと、いい日にしよ〜。",
    intro: "マイペースで癒し系。一緒にいるだけで肩の力が抜けるふんわり系男子。",
    image: "/characters/sora.jpeg",
    gradient: "from-cyan-300 to-sky-400",
  },
  {
    id: "akira",
    name: "彰",
    reading: "アキラ",
    type: "先輩系",
    catchphrase: "困ったらいつでも呼べよ。",
    intro: "面倒見の良い頼れる先輩タイプ。さりげない気遣いで君を支えてくれる。",
    image: "/characters/akira.jpeg",
    gradient: "from-slate-500 to-gray-700",
  },
];
