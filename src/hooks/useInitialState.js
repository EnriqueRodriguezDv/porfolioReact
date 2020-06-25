import { useState, useEffect } from 'react';

const useInitialState = (API) => {
    const [dataWeb, setDataWeb] = useState({
        'project': [],
    });
    useEffect(() => {
        fetch(API)
            .then(response => response.json())
            .then(data => setDataWeb(data));
    }, []);
    return dataWeb;
}

export default useInitialState;