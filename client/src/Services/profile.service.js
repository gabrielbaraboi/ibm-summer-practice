import axios from "axios";

const API_URL = "http://localhost:7055/profile/";

export const getProfile = async (id) => {
    try {
        const res = axios.get(API_URL + id);
        return res;
    } catch (err) {
        throw err;
    }
};