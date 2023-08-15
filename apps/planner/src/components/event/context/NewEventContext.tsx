"use client";
import { ReactNode, createContext, useContext } from "react";

const initialValue = {};
const context = createContext(initialValue);

const NewEventContext = ({ children }: { children?: ReactNode }) => {
    return <context.Provider value={{}}>{children}</context.Provider>;
};

const useNewEventContext = () => useContext(context);

export { useNewEventContext };

export default NewEventContext;
