import { useEffect, useState, useCallback } from 'react';

export const useMicrocms = () => {
    const [id, setId] = useState('');
    const [data, setData] = useState();

    useEffect(() => {
        window.addEventListener('message', (e) => {
            console.log(e);
            if (
                e.isTrusted === true &&
                e.data.action === 'MICROCMS_GET_DEFAULT_DATA'
            ) {
                setId(e.data.id);
                setData(e.data.message?.data);
                microcmsUpdateStyle(e.data.id);
            }
        });
    }, []);

    const selectData = useCallback((item) => {
        console.log('selectData');
        setData(item);
        microcmsPostData(id);
    }, [id]);

    return [data, selectData];
}

const microcmsUpdateStyle = (id: string) => {
    window.parent.postMessage(
        {
            id: id,
            action: 'MICROCMS_UPDATE_STYLE',
            message: {
                height: 600,
            }
        },
        'https://ym5754n.microcms.io',
    );
}

const microcmsPostData = (id: string) => {
    window.parent.postMessage(
        {
            id: id,
            action: 'MICROCMS_POST_DATA',
            message: {
                id: 'hoge-id',
                title: 'hoge-title',
                description: 'hoge-description',
                data: {
                    id: 'fuga',
                }
            }
        },
        'https://ym5754n.microcms.io',
    );
}