"use client";
import { GigInfo } from "@/redux";
import React, { createContext, useContext, useState } from "react";

interface MyGigContextType {
    gigList?: GigInfo[];
    setGigList?: React.Dispatch<React.SetStateAction<GigInfo[]>>;

    newGig?: GigInfo;
    allGigTypes?: string[];
}
const allGigTypes = [];

const MyGigContext = createContext<MyGigContextType>({});

const MyGigContextProvider = ({ children }: { children?: React.ReactNode }) => {
    const [gigList, setGigList] = useState<GigInfo[]>([]);

    return (
        <MyGigContext.Provider value={{ gigList, setGigList, allGigTypes }}>
            {children}
        </MyGigContext.Provider>
    );
};

const useMyGigContext = () => useContext(MyGigContext);

export { MyGigContextProvider, useMyGigContext };
