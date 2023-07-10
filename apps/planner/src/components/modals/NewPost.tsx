"use client";

import useAuth from "@/hooks/useAuth";
import { CloseModalFunction } from "@/index";
import { createPost } from "@/redux/post/post.slice";
import { Dispatcher } from "@/redux/store";
import { Input, Modal, Select } from "antd";
import type { TextAreaRef } from "antd/es/input/TextArea";
import { useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { Button } from "ui";

const NewPost = ({ close, id }: { close: CloseModalFunction; id: string }) => {
    const dispatch = useDispatch<Dispatcher>();
    const [data, setData] = useState<{ value: number; label: string }[]>([]);

    useEffect(() => {
        ((i: number) => {
            for (let j = 0; j < i; j++)
                setData((old) => [...old, { value: j, label: "Option" }]);
        })(30);
    }, []);

    const { account } = useAuth();
    const postTextRef = useRef<TextAreaRef>(null);

    const submitPost = () => {
        const { value: postText } =
            postTextRef.current.resizableTextArea.textArea;

        const payload: Record<string, string | Date> = {};
        payload.text = postText;
        payload.author = `${account.data.firstname} ${account.data.lastname}`;

        dispatch(createPost(payload));
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
            <Input.TextArea
                placeholder="Post ..."
                rows={7}
                style={{ resize: "none" }}
                bordered={false}
                className="!bg-neutral-100"
                ref={postTextRef}
            />

            <label className="mt-4 mb-2 inline-block">
                Sélectionner un prestataire
            </label>
            <Select
                options={data}
                className="w-full"
                showSearch
                placeholder="Prestataire"
                defaultValue={0}
                optionFilterProp="children"
                filterOption={(input, option) =>
                    (option?.label ?? "")
                        .toLowerCase()
                        .includes(input.toLowerCase())
                }
            />

            <div className="flex gap-4 mt-4">
                <span className="w-32 h-32 rounded-lg bg-neutral-100 flex justify-center items-center">
                    add picture
                </span>
            </div>
        </Modal>
    );
};

export default NewPost;
