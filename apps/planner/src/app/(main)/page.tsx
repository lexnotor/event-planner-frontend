import Post from "@/components/Post";
import RightSidebar from "@/components/RightSidebar";
import StoreProvider from "@/redux/StoreProvider";

export default function Home() {
    return (
        <section className="flex h-screen overflow-y-auto py-4 px-8 gap-8 items-start">
            <div className="grow flex flex-col gap-8">
                <Post />
                <Post />
                <Post />
                <Post />
                <Post />
                <Post />
                <Post />
                <Post />
                <Post />
            </div>

            <aside className="sticky shrink-0 top-0 w-72">
                <StoreProvider>
                    <RightSidebar />
                </StoreProvider>
            </aside>
        </section>
    );
}
