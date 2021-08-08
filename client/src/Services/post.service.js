import axios from "axios";
import { authHeader } from "./auth.service";

const API_URL = "http://localhost:7055/posts/";

export const createPost = async (data) => {
    try {
        const res = await axios.post(API_URL + `createPost/`, data, {
            headers: authHeader(),
        });
        return res;
    } catch (err) {
        throw err;
    }
};

export const getPosts = async (
    page,
    programmingLanguage,
    workHours,
    workPlace,
    type,
    requirements
) => {
    try {
        const res = await axios.get(API_URL + `getPosts/`, {
            params: {
                page,
                programmingLanguage,
                workHours,
                workPlace,
                type,
                requirements,
            },
        });
        return res;
    } catch (err) {
        throw err;
    }
};

export const getPost = async (id) => {
    try {
        const res = await axios.get(API_URL + `post/` + id);
        return res;
    } catch (error) {
        throw error;
    }
};

export const getWorkPlaces = async () => {
    try {
        const res = await axios.get(API_URL + `getWorkPlaces`);
        return res;
    } catch (error) {
        throw error;
    }
};
