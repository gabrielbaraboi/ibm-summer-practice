import axios from "axios";
import { authHeader } from "./auth.service";

const API_URL = "http://localhost:7055/profile/";

export const settings = async (data) => {
    try {
        const res = await axios.put(API_URL + `settings/`, data, {
            headers: authHeader(),
        });
        return res;
    } catch (err) {
        throw err;
    }
};

