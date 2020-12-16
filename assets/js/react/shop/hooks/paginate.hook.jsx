import React, { useCallback, useState } from 'react';
import { jsonLdFetch } from "../api/fetch.api";


const usePaginatedFetch = (url) => {

    // api_products_get_collection
    const [loading, setLoading] = useState(false);
    const [items, setItems] = useState([]);
    const [count, setCount] = useState(0);
    const [nextPage, setNextPage] = useState(null);

    const onLoadHandler = useCallback( async () => {
        console.log("api calling ...");

        setLoading(true);

        try {
            const urlCall = nextPage ? nextPage : url;
            const data =  await jsonLdFetch(urlCall);

            console.log("data : ", data )

            setItems(items => [...items, ...data['hydra:member']]);
            setCount(data['hydra:totalItems']);

            if (data['hydra:view'] && data['hydra:view']['hydra:next']) {
                setNextPage(data['hydra:view']['hydra:next'])
            } else {
                setNextPage(null)
            }

        } catch (e) {
            console.log(e)
        }

        setLoading(false)

    }, [url , nextPage])


    return {
        loading,
        onLoadHandler,
        items,
        count,
        hasMore: nextPage !== null,
        nextPage
    }

}

export default usePaginatedFetch;

