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
    createPostComment: (postId: string) => `${baseUrl}/post/${postId}/comment`,
};

const eventUrl = {
    // event
    getEvents: `${baseUrl}/event/find`,
    createEvent: `${baseUrl}/event/new`,
    updateEvent: (eventId: string) =>
        `${baseUrl}/event/update?event=${eventId}`,
    deleteEvent: (eventId: string) => `${baseUrl}/event/${eventId}`,
    // gig
    addGigToEvent: `${baseUrl}/gig/add`,
    getEventGigs: (eventId: string) => `${baseUrl}/gig?eventId=${eventId}`,
    updateGigEvent: (eventId: string) => `${baseUrl}/gig/update/${eventId}`,
    delteGigFromEvent: (eventId: string) => `${baseUrl}/gig/${eventId}`,
};

export { apiFetch, authUrl, baseUrl, userUrl, postUrl, designUrl, eventUrl };
