import axios from "axios";
import { authHeader, logout } from "./auth.service";

const API_URL = "http://localhost:7055/auth/";

export const deleteAccount = async (data) => {
    try {
        const res = await axios.post(API_URL + `deleteAccount`, data, {
            headers: authHeader(),
        });
        logout();
        return res;
    } catch (err) {
        throw err;
    }
};

export const generateSecretKey = async () => {
    try {
        const res = await axios.get(API_URL + `generateKey`, {
            headers: authHeader(),
        });
        return res;
    } catch (err) {
        throw err;
    }
};

export const updatePassword = async (data) => {
    try {
        const res = await axios.post(API_URL + `changePassword`, data, {
            headers: authHeader(),
        });
        return res;
    } catch (err) {
        throw err;
    }
};
