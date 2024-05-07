"use client";

import { Result } from "@/types/result";
import { useCallback, useState } from "react"

type UseSearch = (
  keywords?: string
) => [Result | null, () => void];

export const useSearch: UseSearch = (keywords) => {
  const [result, setResult] = useState(null);

  const search = useCallback(() => {
    fetch(`https://www.googleapis.com/books/v1/volumes?q=${keywords}`)
      .then((res) => res.json())
      .then((data) => {
        setResult(data);
      })
      // .catch((error) => {
      //   setResult(null);
      // })
  }, [keywords]);

  console.log(result);

  return [result, search];
}