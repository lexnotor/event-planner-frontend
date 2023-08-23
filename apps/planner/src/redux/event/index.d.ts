export interface CreateEventType {
    public?: boolean;
    price?: string;
    data?: object;
    date?: string;
    text?: string;
    title: string;
    comments?: string;
    likes?: number;
    tags?: string;
    type?: string;
    location?: string;
}

export interface UpdateEventType {
    public?: boolean;
    price?: string;
    data?: object;
    date?: string;
    text?: string;
    title: string;
    comments?: string;
    likes?: number;
    tags?: string;
    type?: string;
    location?: string;
    eventId: string;
}

export interface AddGigToEventType {
    eventId: string;
    gigId?: string;
    title: string;
    details?: string;
}

export interface UpdateEventGigType {
    gigId?: string;
    title?: string;
    details?: string;
    eventGigId: string;
}
