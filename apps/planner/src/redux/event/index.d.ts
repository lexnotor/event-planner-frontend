export interface CreateEventDto {
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

export interface UpdateEventDto {
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
