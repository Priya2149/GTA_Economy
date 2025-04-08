import axios from 'axios';

const API_URL = 'http://localhost:5000/api';

const submitContent = async (data) => {
    try {
        const response = await axios.post(`${API_URL}/content/submit`, data);
        return response.data;
    } catch (error) {
        throw error;
    }
};

const fetchNFTs = async () => {
    try {
        const response = await axios.get(`${API_URL}/marketplace/nfts`);
        return response.data;
    } catch (error) {
        throw error;
    }
};

export { submitContent, fetchNFTs };
