import axios from 'axios';

export const domain = 'http://localhost:5000'

const request = (method, url, options) => {
    return axios({
        method,
        url,
        ...options,
    })
        .then(async (response) => {
            let res = response;
            if (res.status === 200) {
                return res.data
            }

        })
        .catch(error => {
            if (!error.response) {
                return {
                    status: 500,
                };
            }
            return {
                status: error.response.status,
            };
        });
}

export default request


