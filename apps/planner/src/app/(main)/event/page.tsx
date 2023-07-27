import CardsList from "@/components/event/CardsList";
import SearchBar from "@/components/event/SearchBar";
import StoreProvider from "@/redux/StoreProvider";
import { Metadata } from "next";

const Page = () => {
    return (
        <section className="flex flex-col h-screen overflow-y-auto py-4 px-4 gap-8 items-start">
            <StoreProvider>
                <SearchBar />
            </StoreProvider>

            <CardsList />
        </section>
    );
};

export const metadata: Metadata = {
    title: "Events",
    description: "Vos évenements",
};

export default Page;
