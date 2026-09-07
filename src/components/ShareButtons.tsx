const HASHTAGS_PARAM = "イケメン占い,今日の運勢";
const HASHTAGS_INLINE = "#イケメン占い #今日の運勢";

interface Props {
  shareText: string;
  shareUrl: string;
  isNight: boolean;
}

export default function ShareButtons({ shareText, shareUrl, isNight }: Props) {
  const xHref = `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(shareUrl)}&hashtags=${encodeURIComponent(HASHTAGS_PARAM)}`;
  const threadsHref = `https://www.threads.net/intent/post?text=${encodeURIComponent(`${shareText}\n\n${HASHTAGS_INLINE}\n${shareUrl}`)}`;

  const buttonClass = `flex-1 rounded-full px-6 py-3 text-sm font-bold text-center transition-transform hover:scale-105 active:scale-95 ${
    isNight ? "bg-slate-100 text-slate-900" : "bg-slate-900 text-white"
  }`;

  return (
    <div className="flex gap-3 w-full max-w-md">
      <a href={xHref} target="_blank" rel="noopener noreferrer" className={buttonClass}>
        Xでシェア
      </a>
      <a href={threadsHref} target="_blank" rel="noopener noreferrer" className={buttonClass}>
        Threadsでシェア
      </a>
    </div>
  );
}
