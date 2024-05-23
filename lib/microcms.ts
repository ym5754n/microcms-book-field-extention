import { Item } from "@/types/result";
import { toISOStringWithTimezone } from "./date";

const url = `https://${process.env.NEXT_PUBLIC_SERVICE_ID}.microcms.io`;

/**
 * 拡張フィールドで表示されるiframeのスタイルを指定する
 * @param id microcmsから返されるコンテンツID
 */
export const microcmsUpdateStyle = (id: string) => {
    window.parent.postMessage(
        {
            id: id,
            action: 'MICROCMS_UPDATE_STYLE',
            message: {
                height: 600,
            }
        },
        url,
    );
}

/**
 * microcmsに書籍データを送信する
 * @param id microcmsから返されるコンテンツID
 */
export const microcmsPostData = (id: string, item: Item) => {
    const src = item.volumeInfo.imageLinks?.smallThumbnail ?? '/placeholder.png';

    window.parent.postMessage(
        {
            id: id,
            action: 'MICROCMS_POST_DATA',
            message: {
                id: item.id,
                title: item.volumeInfo.title,
                description: item.volumeInfo.subtitle,
                imageUrl: src,
                updatedAt: toISOStringWithTimezone(new Date()),
                data: {...item}
            }
        },
        url,
    );
}