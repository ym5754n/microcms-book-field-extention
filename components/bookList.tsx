import { Result } from "@/types/result";

import Book from "./book";

export default function BookList({ result, selectData }: { result: Result | null, selectData: any }) {
  return (
    <div>
      {result && result.items ? (
        <ul>
          {result.items.map((item) => (
            <Book item={item} key={item.id} selectData={selectData} />
          ))}
        </ul>
      ) : (
        <p>No results.</p>
      )}
    </div>
  );
}