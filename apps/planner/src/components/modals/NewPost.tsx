"use client";

import { useAppDispatch } from "@/hooks/useAppDispatch";
import useAuth from "@/hooks/useAuth";
import { CloseModalFunction } from "@/index";
import { createPost } from "@/redux/post/post.slice";
import { Modal } from "antd";
import { useEffect, useRef, useState } from "react";
import { Button } from "ui";
import ImageUploader from "../ImageUploader";

const NewPost = ({ close, id }: { close: CloseModalFunction; id: string }) => {
    const dispatch = useAppDispatch();
    const [data, setData] = useState<{ value: number; label: string }[]>([]);

    useEffect(() => {
        ((i: number) => {
            for (let j = 0; j < i; j++)
                setData((old) => [...old, { value: j, label: "Option" }]);
        })(30);
    }, []);

    const { account } = useAuth();
    const postTextRef = useRef<HTMLTextAreaElement>(null);
    const postImageRef = useRef<{ file?: File }>({});

    const submitPost = () => {
        const { value: postText } = postTextRef.current;
        const { file } = postImageRef.current;

        const payload: Record<string, string | Date | File> = {};
        payload.text = postText;
        payload.author = `${account.data.firstname} ${account.data.lastname}`;
        payload.file = file;

        dispatch(createPost(payload));
        close(id);
    };

    return (
        <Modal
            open={true}
            mousePosition={{
                y: window.innerHeight / 2,
                x: window.innerWidth / 2,
            }}
            title="Nouveau post"
            footer={
                <div className="flex justify-end gap-4">
                    <Button size="middle">Brouillon</Button>
                    <Button size="middle" onClick={submitPost}>
                        Publier
                    </Button>
                </div>
            }
            onCancel={() => close(id)}
        >
            <textarea
                placeholder="Post ..."
                rows={4}
                className="w-full resize-none p-2 block rounded-lg border border-[#37448a] text-white bg-transparent focus:outline-none"
                ref={postTextRef}
            />

            <label className="mt-4 mb-2 inline-block">
                Sélectionner un prestataire
            </label>

            <select className="w-full focus:outline-none rounded-lg py-2 px-4 bg-transparent border border-[#37448a]">
                {data.map((item) => (
                    <option key={item.value} value={item.value}>
                        {item.label}
                    </option>
                ))}
            </select>

            <div className="flex gap-4 mt-4">
                <ImageUploader ref={postImageRef} />
            </div>
        </Modal>
    );
};

export default NewPost;
