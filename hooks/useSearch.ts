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
      .then((res) => {
        if (res.ok) {
          res.json().then(data => {
            setResult(data);
          })
        } else {
          setResult(null);
        }
      })
      .catch(error => {
        setResult(null);
      })
  }, [keywords]);

  return [result, search];
}