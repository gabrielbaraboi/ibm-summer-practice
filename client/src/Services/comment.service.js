import axios from "axios";
import { authHeader } from "./auth.service";

const API_URL = "http://localhost:7055/comments/";

export const createComment = async (id, comment) => {
    try {
        const res = await axios.post(API_URL + `posts/${id}/comments`, comment, {
            headers: authHeader(),
        });
        return res;
    } catch (err) {
        throw err;
    }
};

export const getAllComments = async (id) => {
    try {
        const res = await axios.get(API_URL + `posts/${id}/comments`);
        return res;
    } catch (err) {
        throw err;
    }
};
