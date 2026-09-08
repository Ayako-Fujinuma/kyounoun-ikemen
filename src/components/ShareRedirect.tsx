"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function ShareRedirect() {
  const router = useRouter();

  useEffect(() => {
    router.replace("/");
  }, [router]);

  return (
    <main className="flex-1 flex items-center justify-center px-6 py-24 text-sm opacity-70">
      <Link href="/" className="underline underline-offset-4 hover:opacity-100">
        トップへ移動しています…
      </Link>
    </main>
  );
}
