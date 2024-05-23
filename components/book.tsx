import Image from "next/image";

import { Item } from "@/types/result";

export default function Book({ item, selectData }: { item: Item, selectData: any }) {
  const src = item.volumeInfo.imageLinks?.smallThumbnail ?? '/placeholder.png';
  const title = item.volumeInfo.title;

  return (
    <li className="p-2" onClick={() => selectData(item)}>
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