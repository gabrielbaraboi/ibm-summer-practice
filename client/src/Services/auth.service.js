import axios from "axios";
import { withRouter } from "react-router-dom";

const API_URL = "http://localhost:7055/auth/";

export const login = async (data) => {
    try {
        const res = await axios.post(API_URL + "login", data, {
            withCredentials: true,
        });
        if (res.data.user.accessToken) {
            localStorage.setItem("user", JSON.stringify(res.data.user));
        }
        return res;
    } catch (err) {
        throw err;
    }
};

export const register = async (data) => {
    try {
        const res = await axios.post(API_URL + "register", data, {
            headers: {
                "Content-Type": "multipart/form-data",
            },
        });
        return res;
    } catch (err) {
        throw err;
    }
};

export const logout = () => {
    localStorage.removeItem("user");
    window.location.reload();
};

export const getAllUsers = async () => {
    try {
        const res = await axios.get(API_URL + "/getAllUsers");
        return res;
    } catch (error) {
        throw error;
    }
};

export const getAllUserPosts = async (id,page) => {
    try {
        const res = await axios.get(API_URL + "getAllPosts/" + id,{
            params:{
                page
            }
        });
        return res;
    } catch (error) {
        throw error;
    }
}


export const getCurrentUser = () => {
    return JSON.parse(localStorage.getItem("user"));
};

export const isUserData = () => {
    const data = localStorage.getItem("user");
    if (data) return true;
    return false;
};

const parseJwt = (token) => {
    try {
        return JSON.parse(atob(token.split(".")[1]));
    } catch (e) {
        return null;
    }
};

const AuthVerify = (props) => {
    props.history.listen(() => {
        const user = JSON.parse(localStorage.getItem("user"));

        if (user) {
            const decodedJwt = parseJwt(user.accessToken);

            if (decodedJwt.exp * 1000 < Date.now()) {
                logout();
            }
        }
    });

    return ``;
};

export function authHeader() {
    const user = JSON.parse(localStorage.getItem("user"));

    if (user && user.accessToken) {
        return { "x-access-token": user.accessToken };
    } else {
        return {};
    }
}

export default withRouter(AuthVerify);
