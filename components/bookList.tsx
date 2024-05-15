import { Result } from "@/types/result";

import Book from "./book";

export default function BookList({ result }: { result: Result | null }) {
  return (
    <div>
      {result && result.items ? (
        <ul>
          {result.items.map((data) => (
            <Book data={data} key={data.id} />
          ))}
        </ul>
      ) : (
        <p>No results.</p>
      )}
    </div>
  );
}