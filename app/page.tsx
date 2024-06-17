"use client";

import { useSearch } from "@/hooks/useSearch";
import { useCallback } from "react";
import Image from "next/image";

import BookList from "@/components/bookList";
import { useInput } from "@/hooks/useInput";
import { useMicrocms } from "@/hooks/useMicrocms";
import { Item } from '@/types/result';

export default function Home() {
  const [text, textAttributes] = useInput('');
  const [result, search] = useSearch(text);

  const [data, selectData] = useMicrocms();

  const src = data?.volumeInfo.imageLinks?.smallThumbnail ?? '/placeholder.png';
  const title = data?.volumeInfo.title ?? '';

  const handleSubmit = useCallback(
    (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      search();
    }, [search]
  );

  return (
    <main className="flex flex-col justify-between p-5">
      <form onSubmit={handleSubmit}>
        <input type="text" {...textAttributes} />
        <button type="submit">検索</button>
      </form>
      <div className="p-2">
        {data ? (
          <div className="flex w-full bg-teal-900">
            <div>
              <Image
                src={src}
                alt={title}
                width={80}
                height={140}
                style={{ width: "auto", height: "auto"}}  
              />
            </div>
            <div className="pl-1">
              <p>title: {title}</p>
            </div>
          </div>
        ) : (
          <p>Not selected.</p>
        )}
      </div>
      <BookList result={result} selectData={selectData} />
    </main>
  );
}
