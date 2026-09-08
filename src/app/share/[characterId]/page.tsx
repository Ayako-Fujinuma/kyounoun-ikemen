import type { Metadata } from "next";
import { headers } from "next/headers";
import { characters, getCharacterOgImage } from "@/lib/characters";
import { heartsDisplay, MAX_HEARTS } from "@/lib/fortuneHearts";
import ShareRedirect from "@/components/ShareRedirect";

type Props = {
  params: Promise<{ characterId: string }>;
  searchParams: Promise<{ hearts?: string; night?: string }>;
};

async function resolveShare(props: Props) {
  const { characterId } = await props.params;
  const { hearts: heartsParam, night } = await props.searchParams;
  const character = characters.find((c) => c.id === characterId);
  if (!character) return null;

  const parsedHearts = Number(heartsParam);
  const hearts = Number.isInteger(parsedHearts) ? Math.min(Math.max(parsedHearts, 1), MAX_HEARTS) : 1;
  const isNight = night === "1";
  return { character, hearts, isNight };
}

async function absoluteUrl(path: string): Promise<string> {
  const hdrs = await headers();
  const host = hdrs.get("host");
  const proto = hdrs.get("x-forwarded-proto") ?? "https";
  return `${proto}://${host}${path}`;
}

export async function generateMetadata(props: Props): Promise<Metadata> {
  const resolved = await resolveShare(props);
  if (!resolved) return { title: "今日の運勢イケメン占い" };

  const { character, hearts, isNight } = resolved;
  const title = `今日の運勢は${heartsDisplay(hearts)}${character.name}からの応援メッセージ | 今日の運勢イケメン占い`;
  const description = character.catchphrase;
  const imageUrl = await absoluteUrl(getCharacterOgImage(character, isNight));

  return {
    title,
    description,
    robots: { index: false },
    openGraph: {
      title,
      description,
      images: [{ url: imageUrl, width: 1200, height: 630, alt: character.name }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [imageUrl],
    },
  };
}

export default function SharePage() {
  return <ShareRedirect />;
}
