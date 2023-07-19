"use client";
import useAuth from "@/hooks/useAuth";
import { CommentInfo } from "@/redux";
import { Button, SpinLoader } from "ui";

const Comment = ({
    postComment,
    isLoading,
}: {
    postComment?: CommentInfo[];
    isLoading: boolean;
}) => {
    postComment;
    const { isLogin, account } = useAuth();

    return (
        <ul className="py-2 px-2 bg-white/50 rounded-lg flex flex-col gap-4 max-w-[38rem] w-full mx-auto border text-[85%]">
            {isLogin && (
                <li className="flex flex-col gap-2">
                    <div className="flex gap-2">
                        <span className="w-7 h-7 rounded-full bg-neutral-400 self-center" />
                        <div className="flex flex-col">
                            <span className="font-semibold">{`${account.data.firstname} ${account.data.lastname}`}</span>
                            <span>{account.data.username}</span>
                        </div>
                    </div>
                    <form className="flex gap-1">
                        <textarea
                            rows={1}
                            style={{
                                resize: "none",
                            }}
                            placeholder="Aa ..."
                            className="px-2 py-1 focus:outline-none border border-neutral-300 rounded-lg w-full bg-transparent rounded-r-full rounded-l-full"
                        />
                        <Button size="small" style={{ fontSize: "85%" }}>
                            Envoyer
                        </Button>
                    </form>
                </li>
            )}
            <li>
                <h3 className="">Réactions</h3>
            </li>
            {postComment &&
                postComment.map((comment) => (
                    <li key={comment.id}>
                        <div className="flex gap-2">
                            <div className="">
                                <span className="w-8 h-8 inline-block rounded-full bg-neutral-400" />
                            </div>
                            <div className="flex flex-col">
                                <span className="font-semibold">
                                    {`${comment.user.firstname} ${comment.user.lastname}`}
                                </span>
                                <span className="text-neutral-500">
                                    {comment?.text}
                                </span>
                            </div>
                        </div>
                    </li>
                ))}
            {isLoading && <SpinLoader />}
        </ul>
    );
};

export default Comment;
