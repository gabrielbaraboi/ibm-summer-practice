import axios from "axios";
import { authHeader } from "./auth.service";

const API_URL = "http://localhost:7055/comments/";

export const createComment = async (id, comment) => {
    try {
        const res = await axios.post(API_URL + id, comment, {
            headers: authHeader(),
        });
        return res;
    } catch (err) {
        throw err;
    }
};

export const getAllComments = async (id, page) => {
    try {
        const res = await axios.get(API_URL + id, {
            params: {
                page
            },
        });
        return res;
    } catch (err) {
        throw err;
    }
};

export const deleteComment = async (commentId) => {
    try {
        const res = await axios.delete(API_URL + commentId, {
            headers: authHeader(),
        });
        return res;
    } catch (error) {
        throw error;
    }
};

export const updateComment = async (id, commentId, data) => {
    try {
        const res = await axios.put(API_URL + id + "/" + commentId, data, {
            headers: authHeader(),
        });
        return res;
    } catch (error) {
        console.log(error);
    }
};
