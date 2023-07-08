import axios from "axios";

const baseUrl = "http://localhost:3500/api/v1";

const apiFetch = async (type: string, route: string) => {
    const url = `${route}`;
    let data: any = null;
    switch (type) {
        case "get":
            data = await axios.get(url, {});
    }

    return data;
};

const authUrl = {
    login: `${baseUrl}/login`,
    signup: `${baseUrl}/signup`,
};

const userUrl = {
    getMe: `${baseUrl}/user/me`,
    getUser: `${baseUrl}/user`,
};

const postUrl = {
    getPosts: `${baseUrl}/post`,
};

export { apiFetch, authUrl, baseUrl, userUrl, postUrl };
