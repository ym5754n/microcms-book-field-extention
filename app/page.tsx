"use client";

import { useSearch } from "@/hooks/useSearch";
import { useCallback } from "react";

import BookList from "@/components/bookList";
import { useInput } from "@/hooks/useInput";
import { useMicrocms } from "@/hooks/useMicrocms";

export default function Home() {
  const [text, textAttributes] = useInput('');
  const [result, search] = useSearch(text);

  const [data, selectData] = useMicrocms();

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
      <BookList result={result} selectData={selectData} />
    </main>
  );
}
