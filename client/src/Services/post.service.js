import axios from "axios";
import { authHeader } from "./auth.service";

const API_URL = "http://localhost:7055/posts/";

export const createPost = async (data) => {
    try {
        const res = await axios
            .post(API_URL + `createPost/`, data, { headers: authHeader() });
        return res;
    } catch (err) {
        throw err;
    }
};