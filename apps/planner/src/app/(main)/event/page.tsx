import SearchBar from "@/components/event/SearchBar";
import StoreProvider from "@/redux/StoreProvider";
import { Metadata } from "next";
import React from "react";

const Page = () => {
    return (
        <div>
            <StoreProvider>
                <SearchBar />
            </StoreProvider>
        </div>
    );
};

export const metadata: Metadata = {
    title: "Events",
    description: "Vos évenements",
};

export default Page;
