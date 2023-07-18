"use client";
import usePost from "@/hooks/usePost";
import Post from "./Post";
import { SpinLoader } from "ui";

const PostList = () => {
    const { posts, isPostLoading } = usePost();

    return (
        <div className="grow flex flex-col gap-4">
            {posts.listPost.map((post) => (
                <Post key={post.id} postData={post} />
            ))}
            {isPostLoading && <SpinLoader />}
        </div>
    );
};

export default PostList;
