import { useEffect, useState } from 'react';

export default httpClient => {
    const [error, setError] = useState(null);

    const reqInterceptor = httpClient.interceptors.request.use(req => {
        return req;
    });

    const resInterceptor = httpClient.interceptors.response.use(
        res => {
            setError(null);
            return res;
        },
        err => {
            setError(err);
        }
    );

    useEffect(() => {
        httpClient.interceptors.request.eject(reqInterceptor);
        httpClient.interceptors.response.eject(resInterceptor);
    }, [reqInterceptor, resInterceptor]);

    const errorConfirmedHandler = () => {
        setError(null);
    };

    return [error, errorConfirmedHandler];
};
