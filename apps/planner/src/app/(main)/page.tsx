import RightSidebar from "@/components/RightSidebar";
import PostList from "@/components/post/PostList";
import StoreProvider from "@/redux/StoreProvider";

export default function Home() {
    return (
        <section className="flex h-screen overflow-y-auto py-4 px-8 gap-8 items-start">
            <StoreProvider>
                <PostList />
            </StoreProvider>
            <aside className="sticky shrink-0 top-0 w-72">
                <StoreProvider>
                    <RightSidebar />
                </StoreProvider>
            </aside>
        </section>
    );
}
