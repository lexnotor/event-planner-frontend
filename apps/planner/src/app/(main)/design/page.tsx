import DesignList from "@/components/design/DesignList";
import SearchBar from "@/components/design/SearchBar";
import TagList from "@/components/design/TagList";
import StoreProvider from "@/redux/StoreProvider";
// import RightSidebar from "@/components/sidebar/RightSidebar";
// import StoreProvider from "@/redux/StoreProvider";

const Page = () => {
    return (
        <section className="flex h-screen overflow-y-auto py-4 px-4 gap-8 items-start">
            <div className="grow flex flex-col gap-4">
                <StoreProvider>
                    <SearchBar />
                    <TagList />
                    <DesignList />
                </StoreProvider>
            </div>
            {/* <aside className="sticky shrink-0 top-0 w-72">
                <StoreProvider>
                    <RightSidebar />
                </StoreProvider>
            </aside> */}
        </section>
    );
};

export default Page;
