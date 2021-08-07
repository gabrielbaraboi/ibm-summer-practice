import axios from "axios";
import { authHeader } from "./auth.service";

const API_URL = "http://localhost:7055/profile/";

export const getProfile = async (id) => {
    try {
        const res = axios.get(API_URL + id);
        return res;
    } catch (err) {
        throw err;
    }
};

export const modifyAboutMe = async (data) => {
    try {
        const res = await axios
            .put(API_URL + `modifyAboutMe/`, data, { headers: authHeader() });
        return res;
    } catch (err) {
        throw err;
    }
};

export const modifySocialMedia = async (data) => {
    try {
        const res = await axios
            .put(API_URL + `/modifySocialMedia`, data, { headers: authHeader()});
        return res;
    } catch (err) {
        throw err;
    }
};

export const setProfilePic = async (data) => {
    try {
        const res = await axios
            .post(API_URL + `/setProfilePic`, data, { headers: authHeader()});
        return res;
    } catch (err) {
        throw err;
    }
};
