import { characters, type Character } from "./characters";
import { characterVoices, dayMain, nightMain } from "./messages";
import { pickHeartCount } from "./fortuneHearts";

export type VoiceMode = "day" | "night";

export interface FortuneResult {
  character: Character;
  hearts: number;
  message: string;
  opening: string;
  main: string;
  closing: string;
  isNight: boolean;
  voiceMode: VoiceMode;
}

/**
 * 文字列から決定的なハッシュ値を作る(暗号強度は不要、同じ入力なら常に同じ結果になればよい)。
 */
function hashString(input: string): number {
  let hash = 0;
  for (let i = 0; i < input.length; i++) {
    hash = (hash << 5) - hash + input.charCodeAt(i);
    hash |= 0;
  }
  return Math.abs(hash);
}

/**
 * 生年月日 + 今日の日付(JST)から、今日だけの運勢(ハートの数)・「ぴったりのイケメン」・
 * メッセージを決定する。同じ人×同じ日なら必ず同じ結果になり、日が変われば結果も変わる。
 * opening/closingは選ばれたキャラごとの喋り方から選ぶことで、内容は共通でも
 * キャラの個性が出るようにしている。voiceMode(口調・本文の昼夜)は実際の時刻(isNight)
 * にそのまま合わせる。
 */
export function generateFortune(
  birthdateKey: string,
  todayKey: string,
  isNight: boolean
): FortuneResult {
  const seedBase = `${birthdateKey}#${todayKey}`;
  const character = characters[hashString(`${seedBase}#character`) % characters.length];
  const hearts = pickHeartCount(hashString(`${seedBase}#hearts`));

  const voiceMode: VoiceMode = isNight ? "night" : "day";
  const voice = characterVoices[character.id][voiceMode];
  const mainPool = voiceMode === "night" ? nightMain : dayMain;

  const opening = voice.opening[hashString(`${seedBase}#opening`) % voice.opening.length];
  const main = mainPool[hashString(`${seedBase}#main`) % mainPool.length];
  const closing = voice.closing[hashString(`${seedBase}#closing`) % voice.closing.length];

  return {
    character,
    hearts,
    message: `${opening}\n${main}\n${closing}`,
    opening,
    main,
    closing,
    isNight,
    voiceMode,
  };
}
