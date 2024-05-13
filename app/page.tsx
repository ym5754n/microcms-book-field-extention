"use client";

import { useSearch } from "@/hooks/useSearch";
import { useEffect } from "react";

import Image from "next/image";

export default function Home() {
  const [result, search] = useSearch("テスト");

  useEffect(() => {
    search();
  }, []);

  return (
    <main className="flex min-h-screen flex-col justify-between p-5">
      <ul className="">
        {result?.items?.map((data) => (
          <li key={data.id} className="p-2">
            <div className="flex w-full">
              <div>
                <Image
                  src={data.volumeInfo.imageLinks.smallThumbnail}
                  alt={data.volumeInfo.title}
                  width={80}
                  height={140}
                />
              </div>
              <div className="pl-1">
                <p>title: {data.volumeInfo.title}</p>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </main>
  );
}
