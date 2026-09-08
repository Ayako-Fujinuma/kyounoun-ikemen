export interface Character {
  id: string;
  name: string;
  type: string;
  catchphrase: string;
  intro: string;
  /** 夜モード用(デフォルト)。dayImage未設定時は昼モードでもこれが使われる。 */
  image: string;
  /** 昼モード用。未設定ならimageにフォールバックする。 */
  dayImage?: string;
  /** SNSシェア用の横長(1200x630目安)画像・夜モード用。未設定なら通常の縦画像にフォールバックする。 */
  ogImage?: string;
  /** SNSシェア用の横長画像・昼モード用。未設定ならogImage、それも無ければ通常の縦画像を使う。 */
  ogImageDay?: string;
  gradient: string;
}

/** 昼夜モードに応じて表示すべき画像パスを返す。dayImage未指定なら常にimageを使う。 */
export function getCharacterImage(character: Character, isNight: boolean): string {
  if (!isNight && character.dayImage) return character.dayImage;
  return character.image;
}

/** SNSシェア用の横長画像パスを返す。専用画像が無ければ通常の縦画像にフォールバックする。 */
export function getCharacterOgImage(character: Character, isNight: boolean): string {
  if (!isNight && character.ogImageDay) return character.ogImageDay;
  if (character.ogImage) return character.ogImage;
  return getCharacterImage(character, isNight);
}

/**
 * 診断結果・キャラ紹介ページ共通のキャラクターデータ。
 * ホストクラブ設定の8人。画像は public/characters/ 配下の実ファイルを参照する。
 * 新しいキャラを追加する場合はここに1件足すだけで診断・紹介ページ両方に反映される。
 */
export const characters: Character[] = [
  {
    id: "ren",
    name: "レン",
    type: "No.1ホスト系",
    catchphrase: "今夜も、君だけを見てるよ。",
    intro: "お店で指名率No.1を誇る、色気たっぷりのエースホスト。",
    image: "/characters/ren.jpeg",
    dayImage: "/characters/ren-day.png",
    gradient: "from-rose-400 to-pink-500",
  },
  {
    id: "haruto",
    name: "ハルト",
    type: "王道系ホスト",
    catchphrase: "隣にいるだけで安心するでしょ?",
    intro: "誰からも好かれる、優しさ全開の王道イケメンホスト。",
    image: "/characters/haruto.jpeg",
    dayImage: "/characters/haruto-day.png",
    gradient: "from-amber-400 to-orange-500",
  },
  {
    id: "aoi",
    name: "アオイ",
    type: "インテリ系ホスト",
    catchphrase: "焦らなくても、答えはちゃんと出るよ。",
    intro: "メガネがよく似合う、頭の切れる物静かなホスト。",
    image: "/characters/aoi.jpeg",
    dayImage: "/characters/aoi-day.png",
    ogImageDay: "/characters/aoi-day-sns.jpeg",
    gradient: "from-sky-400 to-blue-600",
  },
  {
    id: "minato",
    name: "ミナト",
    type: "童顔系ホスト",
    catchphrase: "今日もいっぱい褒めてあげる!",
    intro: "眩しい笑顔がチャームポイントの、少し童顔なホスト。",
    image: "/characters/minato.jpeg",
    dayImage: "/characters/minato-day.png",
    gradient: "from-teal-400 to-emerald-500",
  },
  {
    id: "rei",
    name: "レイ",
    type: "クール系ホスト",
    catchphrase: "焦らなくていい、君のペースで。",
    intro: "長い髪と落ち着いた雰囲気が魅力の、クールな大人ホスト。",
    image: "/characters/rei.jpeg",
    dayImage: "/characters/rei-day.png",
    gradient: "from-indigo-400 to-violet-600",
  },
  {
    id: "shido",
    name: "シドウ",
    type: "体育会系ホスト",
    catchphrase: "その調子だ、突っ走れ!",
    intro: "元気いっぱいで、会うたびにパワーをくれる体育会系ホスト。",
    image: "/characters/shidou.jpeg",
    dayImage: "/characters/shidou-day.png",
    gradient: "from-red-500 to-orange-600",
  },
  {
    id: "sora",
    name: "ソラ",
    type: "癒し系ホスト",
    catchphrase: "今日もふわっと、いい日にしよ〜。",
    intro: "物静かでマイペース、一緒にいるとほっとする癒し系ホスト。",
    image: "/characters/sora.jpeg",
    dayImage: "/characters/sora-day.png",
    gradient: "from-cyan-300 to-sky-400",
  },
  {
    id: "akira",
    name: "アキラ",
    type: "イケオジ系ホスト",
    catchphrase: "困ったらいつでも呼べよ。",
    intro: "余裕たっぷりの包容力で頼れる、40代イケオジホスト。",
    image: "/characters/akira.jpeg",
    dayImage: "/characters/akira-day.jpeg",
    ogImage: "/characters/akira-sns.jpeg",
    ogImageDay: "/characters/akira-day-sns.jpeg",
    gradient: "from-slate-500 to-gray-700",
  },
];
