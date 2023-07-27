"use client";
import usePost from "@/hooks/usePost";
import { SpinLoader } from "ui";
import ScrollSaver from "../ScrollSaver";
import Post from "./Post";

const PostList = () => {
    const { posts, isPostLoading } = usePost();

    return (
        <div className="grow flex flex-col gap-4">
            {posts.listPost.map((post) => (
                <Post key={post.id} postData={post} />
            ))}
            {isPostLoading && <SpinLoader />}
            <ScrollSaver />
        </div>
    );
};

export default PostList;
