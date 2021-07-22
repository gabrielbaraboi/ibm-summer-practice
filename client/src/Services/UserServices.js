import axios from "axios";

export const login = async (data) => {
    try {
        const res = await axios
            .post('http://localhost:7055/login', data, { withCredentials: true });
        return res;
    } catch (err) {
        throw err;
    }
};

export const logout = async () => {
    try {
        const res = await axios
            .get('http://localhost:7055/logout', { withCredentials: true });
        return res;
    } catch (err) {
        throw err;
    }
};