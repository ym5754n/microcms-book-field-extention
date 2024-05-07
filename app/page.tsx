"use client";

import { useSearch } from "@/hooks/useSearch";
import { useEffect } from "react";

export default function Home() {
  const [result, search] = useSearch("テスト");

  useEffect(() => {
    search();
  }, []);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {result?.items?.map((data) => <div key={data.id}>{data.id}</div>)}
    </main>
  );
}
