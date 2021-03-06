import axios, { AxiosRequestConfig } from 'axios';
import { handleSignOut } from '../../contexts/authProvider';
import { getTokenAndRefreshToken, setTokenAndRefreshToken } from '../../utils/cookies/credentials';
import { isTokenExpired } from '../../utils/verifyToken';

const baseUrl = "http://127.0.0.1:8000/api/"
const apiAxios = axios.create({
    baseURL: baseUrl,
})

apiAxios.interceptors.request.use(async req => {
    const credentials = getTokenAndRefreshToken();

    if (credentials.token) {
        var token = credentials.token

        if (isTokenExpired(token)) {
            try {
                const { data } = await axios.post(`${baseUrl}token/refresh/`, { refresh: credentials.refresh })
                token = data.access;
                var refresh = credentials.refresh || "";
                setTokenAndRefreshToken({ access: token, refresh: refresh })
            } catch (e) {
                handleSignOut();
            }
        }
        req.headers = {
            Authorization: `Bearer ${token}`
        }
    }
    return req
})

export default apiAxios;