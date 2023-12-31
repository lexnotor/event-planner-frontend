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
    getEvents: `${baseUrl}/event/find/mine`,
    getOneEvent: (eventId: string) => `${baseUrl}/event/find?id=${eventId}`,
    createEvent: `${baseUrl}/event/new`,
    updateEvent: (eventId: string) =>
        `${baseUrl}/event/update?event=${eventId}`,
    deleteEvent: (eventId: string) => `${baseUrl}/event/${eventId}`,
    // gig
    addGigToEvent: `${baseUrl}/event/gig/add`,
    getEventGigs: (eventId: string) =>
        `${baseUrl}/event/gig?eventId=${eventId}`,
    updateGigEvent: (eventId: string) =>
        `${baseUrl}/event/gig/update/${eventId}`,
    delteGigFromEvent: (eventId: string) => `${baseUrl}/event/gig/${eventId}`,
};

const gigUrl = {
    getMyGig: (userId: string) => `${baseUrl}/gig/find?userId=${userId}`,
    createMyGig: `${baseUrl}/gig/new`,
};

export {
    apiFetch,
    authUrl,
    baseUrl,
    designUrl,
    eventUrl,
    gigUrl,
    postUrl,
    userUrl,
};
