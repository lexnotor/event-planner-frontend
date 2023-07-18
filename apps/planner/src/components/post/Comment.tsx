"use client";
import { CommentInfo } from "@/redux";
import { SpinLoader } from "ui";

const Comment = ({
    postComment,
    isLoading,
}: {
    postComment?: CommentInfo[];
    isLoading: boolean;
}) => {
    postComment;
    return (
        <ul className="py-4 px-8 bg-white rounded-xl flex flex-col gap-4 max-w-[38rem] w-full mx-auto border">
            {postComment.map((comment) => (
                <li key={comment.id}>{comment?.text}</li>
            ))}
            {isLoading && <SpinLoader />}
        </ul>
    );
};

export default Comment;
