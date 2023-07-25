import SearchBar from "@/components/event/SearchBar";
import StoreProvider from "@/redux/StoreProvider";
import { Metadata } from "next";
import React from "react";

const Page = () => {
    return (
        <section className="flex h-screen overflow-y-auto py-4 px-4 gap-8 items-start">
            <StoreProvider>
                <SearchBar />
            </StoreProvider>
        </section>
    );
};

export const metadata: Metadata = {
    title: "Events",
    description: "Vos évenements",
};

export default Page;
