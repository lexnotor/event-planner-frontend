import RightSidebar from "@/components/sidebar/RightSidebar";
import PostList from "@/components/post/PostList";
import StoreProvider from "@/redux/StoreProvider";
import ScrollSaver from "@/components/ScrollSaver";

export default function Home() {
    return (
        <section className="flex h-screen overflow-y-auto py-4 px-4 gap-8 items-start">
            <StoreProvider>
                <PostList />
            </StoreProvider>
            <aside className="sticky shrink-0 top-0 w-72">
                <StoreProvider>
                    <RightSidebar />
                </StoreProvider>
            </aside>
            <ScrollSaver />
        </section>
    );
}
