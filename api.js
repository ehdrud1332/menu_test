import axios from 'axios';

const makeRequest = (path, params) =>
    axios.get(`http://localhost:1337${path}`, {
        params: {
            ...params
        }
    });

const getAnything = async(path, params = {}) => {
    try {
        const {
            data: {results},
            data
        } = await makeRequest(path, params)
        return [results || data, null]
    } catch(e) {
        return [null, e];
    }
};

export const productApi = {
    all : () => getAnything('/products')
}

export const apiImage = (
    path, defaultPoster = 'https://images.unsplash.com/photo-1571847140471-1d7766e825ea?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=673&q=80'
) => (path ? `http://localhost:1337${path}` : defaultPoster);