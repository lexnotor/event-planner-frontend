"use client";
import { randomBytes } from "crypto";
import {
    MutableRefObject,
    ReactNode,
    createContext,
    useCallback,
    useContext,
    useRef,
    useState,
} from "react";

interface NewEventContextType {
    titleRef?: MutableRefObject<HTMLInputElement>;
    LocationRef?: MutableRefObject<HTMLInputElement>;
    dateRef?: MutableRefObject<HTMLInputElement>;
    descriptionRef?: MutableRefObject<HTMLTextAreaElement>;
    services?: ServiceType[];
    addService?: (arg: ServiceType) => void;
    deleteService?: (arg: string) => void;
    initContext?: () => void;
}

interface ServiceType {
    id?: string;
    type:
        | "LAUNCH"
        | "MC"
        | "DECORATION"
        | "SONORISATION"
        | "ROOM"
        | "ORGANISATEUR"
        | "TRANSPORT"
        | "IMPRIMERIE"
        | "LOCATION"
        | "HABILLEMENT";
    supplier: string;
    details: string;
}

const context = createContext<NewEventContextType>({});

const NewEventContext = ({ children }: { children?: ReactNode }) => {
    const [services, setServices] = useState<ServiceType[]>([]);
    const addService = useCallback(
        (payload: ServiceType) =>
            setServices((old) => [
                ...old,
                { ...payload, id: randomBytes(20).toString("hex") },
            ]),
        []
    );
    const deleteService = useCallback(
        (id: string) =>
            setServices((old) => old.filter((item) => item.id != id)),
        []
    );

    const titleRef = useRef<HTMLInputElement>();
    const LocationRef = useRef<HTMLInputElement>();
    const dateRef = useRef<HTMLInputElement>();
    const descriptionRef = useRef<HTMLTextAreaElement>();

    const initContext = () => {
        setServices([]);
        titleRef.current && (titleRef.current.value = "");
        LocationRef.current && (LocationRef.current.value = "");
        descriptionRef.current && (descriptionRef.current.value = "");
    };

    const value: NewEventContextType = {
        titleRef,
        LocationRef,
        dateRef,
        descriptionRef,
        services,
        addService,
        deleteService,
        initContext,
    };

    return <context.Provider value={value}>{children}</context.Provider>;
};

const useNewEventContext = () => useContext(context);

export { useNewEventContext };

export default NewEventContext;
