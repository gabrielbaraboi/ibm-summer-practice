import axios from "axios";
import { authHeader } from "./auth.service";

const API_URL = "http://localhost:7055/inbox/";

export const createConversation = async (data) => {
    try {
        const res = await axios.post(API_URL, data, {
            headers: authHeader(),
        });
        return res;
    } catch (err) {
        throw err;
    }
};

export const getAllConversations = async () => {
    try {
        const res = await axios.get(API_URL, {
            headers: authHeader()
        });
        return res;
    } catch (error) {
        throw error;
    }
};
