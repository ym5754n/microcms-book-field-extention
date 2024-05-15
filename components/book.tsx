import Image from "next/image";

import { Item } from "@/types/result";

export default function Book({ data }: { data: Item }) {
  const src = data.volumeInfo.imageLinks?.smallThumbnail ?? '/placeholder.png';
  const title = data.volumeInfo.title;

  return (
    <li className="p-2">
      <div className="flex w-full">
        <div>
          <Image
            src={src}
            alt={title}
            width={80}
            height={140}
            style={{ width: "auto", height: "auto" }}
          />
        </div>
        <div className="pl-1">
          <p>title: {title}</p>
        </div>
      </div>
    </li>
  );
}