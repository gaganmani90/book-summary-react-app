import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: 'http://localhost:8080', // replace with your actual backend URL
    headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*', // allow requests from any origin
        'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE', // allow specific HTTP methods
        'Access-Control-Allow-Headers': 'Content-Type, Authorization' // allow specific headers
    }
});
const signIn = async () => {
    const BACKEND_URL = "http://localhost:8080"
    try {
        const response = await axiosInstance.get(`${BACKEND_URL}/auth/google`);
        console.log(JSON.stringify(response))
        window.location.href = response.data.url;
    } catch (error) {
        console.log(error);
    }
};

export { signIn };
