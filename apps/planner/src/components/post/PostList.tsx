"use client";
import usePost from "@/hooks/usePost";
import Post from "./Post";

const PostList = () => {
    const { posts, isPostLoading } = usePost();

    return (
        <div className="grow flex flex-col gap-4">
            {posts.listPost.map((post) => (
                <Post key={post.id} postData={post} />
            ))}
            {isPostLoading && (
                <span className="w-8 h-8 inline-block animate-spin border border-transparent border-t-neutral-900 rounded-full mx-auto" />
            )}
        </div>
    );
};

export default PostList;
