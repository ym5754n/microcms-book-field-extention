"use client";

import { useSearch } from "@/hooks/useSearch";
import { useCallback, useState } from "react";

import Image from "next/image";

export default function Home() {
  const [query, setQuery] = useState('');
  const [result, search] = useSearch(query);

  const onKeyDown = useCallback(
    (e: React.KeyboardEvent<HTMLInputElement>) => {
      if (e.key === "Enter") {
        search();
      }
    }, [search]
  );

  return (
    <main className="flex flex-col justify-between p-5">
      <div>
        <input
          type="text"
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={onKeyDown}
          style={{ color: "#000" }}
        />
        <button onClick={search}>検索</button>
      </div>
      {result && result.items ? (
        <ul className="">
          {result.items.map((data) => (
            <li key={data.id} className="p-2">
              <div className="flex w-full">
                <div>
                  <Image
                    src={data.volumeInfo.imageLinks.smallThumbnail}
                    alt={data.volumeInfo.title}
                    width={80}
                    height={140}
                    style={{ width: "auto", height: "auto" }}
                  />
                </div>
                <div className="pl-1">
                  <p>title: {data.volumeInfo.title}</p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <p>No results.</p>
      )}
    </main>
  );
}
