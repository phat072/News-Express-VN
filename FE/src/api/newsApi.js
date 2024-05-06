import axiosClient from './axiosClient.js';


const newsApi = {
    getNewsEverything: (params) => {
        const url = 'everything';
        return axiosClient.get(url, {params});
    },
    getNewsTopHeadline: (params) => {
        const url = 'title-news';
        return axiosClient.get(url, {params});
    },
}

export default newsApi;