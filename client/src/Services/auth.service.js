import axios from "axios";

const API_URL = "http://localhost:7055/auth/";

export const login = async (data) => {
    try {
        const res = await axios
            .post(API_URL + "login", data, { withCredentials: true });
        if (res.data.user.accessToken) {
            localStorage.setItem("user", JSON.stringify(res.data.user));
        }
        return res.data.user;
    } catch (err) {
        throw err;
    }
};

export const logout = () => {
    localStorage.removeItem("user");
    window.location.reload();
};

export const getCurrentUser = () => {
    return JSON.parse(localStorage.getItem("user"));
};

export const isUserData = () => {
    const data = localStorage.getItem("user");
    if (data)
        return true;
    return false;
}