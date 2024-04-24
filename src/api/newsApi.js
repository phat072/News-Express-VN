import axiosClient from './axiosClient.js';


const newsApi = {
    getNewsEverything: (params) => {
        const url = 'everything';
        return axiosClient.get(url, {params});
    },
    getNewsTopHeadline: (params) => {
        const url = 'top-headlines';
        return axiosClient.get(url, {params});
    },
}

export default newsApi;