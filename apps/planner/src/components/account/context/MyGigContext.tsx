"use client";
import { GigInfo } from "@/redux";
import React, {
    createContext,
    useContext,
    useMemo,
    useRef,
    useState,
} from "react";

interface MyGigContextType {
    gigList?: GigInfo[];
    setGigList?: React.Dispatch<React.SetStateAction<GigInfo[]>>;

    refGigTitle?: React.MutableRefObject<HTMLInputElement>;
    refGigType?: React.MutableRefObject<HTMLSelectElement>;
    refGigText?: React.MutableRefObject<HTMLTextAreaElement>;

    allGigTypes?: string[];
}

const MyGigContext = createContext<MyGigContextType>({});

const MyGigContextProvider = ({ children }: { children?: React.ReactNode }) => {
    const [gigList, setGigList] = useState<GigInfo[]>([]);
    const refGigTitle = useRef<HTMLInputElement>(null);
    const refGigType = useRef<HTMLSelectElement>(null);
    const refGigText = useRef<HTMLTextAreaElement>(null);

    const allGigTypes = useMemo(
        () => [
            "LAUNCH",
            "MC",
            "DECORATION",
            "SONORISATION",
            "ROOM",
            "ORGANISATEUR",
            "TRANSPORT",
            "IMPRIMERIE",
            "LOCATION",
            "HABILLEMENT",
        ],
        []
    );

    return (
        <MyGigContext.Provider
            value={{
                gigList,
                setGigList,
                allGigTypes,
                refGigTitle,
                refGigType,
                refGigText,
            }}
        >
            {children}
        </MyGigContext.Provider>
    );
};

const useMyGigContext = () => useContext(MyGigContext);

export { MyGigContextProvider, useMyGigContext };
