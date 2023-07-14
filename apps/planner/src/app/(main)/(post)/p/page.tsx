import BackButton from "@/components/BackButton";
import PostDetails from "@/components/post/PostDetails";
import StoreProvider from "@/redux/StoreProvider";
import React from "react";

const Page = () => {
    return (
        <section className="flex flex-col h-screen overflow-y-auto py-4 px-4 gap-8 items-start">
            <div>
                <BackButton />
            </div>
            <StoreProvider>
                <PostDetails />
            </StoreProvider>
        </section>
    );
};

export default Page;
