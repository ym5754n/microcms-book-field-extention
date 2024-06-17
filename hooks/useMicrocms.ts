import { Item } from '@/types/result';
import { useEffect, useState, useCallback } from 'react';

import { microcmsUpdateStyle, microcmsPostData } from '@/lib/microcms';

export const useMicrocms = (): [Item | undefined, (item: Item) => void] => {
    const [id, setId] = useState('');
    const [item, setItem] = useState<Item>();

    useEffect(() => {
        window.addEventListener('message', (e) => {
            console.log(e);
            if (
                e.isTrusted === true &&
                e.data.action === 'MICROCMS_GET_DEFAULT_DATA'
            ) {
                setId(e.data.id);
                setItem(e.data.message?.data);
                microcmsUpdateStyle(e.data.id);
            }
        });
    }, []);

    const selectData = useCallback((item: Item) => {
        setItem(item);
        microcmsPostData(id, item);
    }, [id]);

    return [item, selectData];
}