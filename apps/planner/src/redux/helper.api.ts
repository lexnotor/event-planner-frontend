import axios from "axios";

const baseUrl = `${process.env.NEXT_PUBLIC_BACKEND}/api/v1`;

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

const designUrl = {
    getDesigns: `${baseUrl}/design`,
    getOneDesign: `${baseUrl}/design`,
    createDesign: `${baseUrl}/design`,
};

const postUrl = {
    getPosts: `${baseUrl}/post`,
    getOnePost: `${baseUrl}/post`,
    createPost: `${baseUrl}/post`,
    getPostComment: (postId: string) => `${baseUrl}/post/${postId}/comment`,
};

export { apiFetch, authUrl, baseUrl, userUrl, postUrl, designUrl };
