"use client";
import { useAppDispatch } from "@/hooks/useAppDispatch";
import { CloseModalFunction } from "@/index";
import { createDesign } from "@/redux/design/design.slice";
import { Modal } from "antd";
import { useRef } from "react";
import { Button } from "ui";
import ImageUploader from "../ImageUploader";

const NewDesign = ({
    close,
    id,
}: {
    close: CloseModalFunction;
    id: string;
}) => {
    const dispatch = useAppDispatch();

    const designTextRef = useRef<HTMLTextAreaElement>(null);
    const designImageRef = useRef<{ file?: File }>({});

    const submitDesign = () => {
        const { value: designText } = designTextRef.current;

        const { file } = designImageRef.current;

        const payload = {
            text: designText,
            file,
        };

        dispatch(createDesign(payload));
        close(id);
    };

    return (
        <Modal
            closable={false}
            open={true}
            mousePosition={{
                y: window.innerHeight / 2,
                x: window.innerWidth / 2,
            }}
            destroyOnClose
            title="Nouveau Design"
            footer={
                <div className="flex justify-end gap-4">
                    <Button size="middle" onClick={submitDesign}>
                        Publier
                    </Button>
                </div>
            }
            onCancel={() => close(id)}
        >
            {/* <h3>Image (max 5)</h3> */}

            <div className="flex gap-4 my-4">
                <ImageUploader ref={designImageRef} />
            </div>

            <textarea
                placeholder="Text ..."
                rows={4}
                className="w-full resize-none p-2 block rounded-lg border border-[#37448a] text-white bg-transparent focus:outline-none"
                ref={designTextRef}
            />
        </Modal>
    );
};

export default NewDesign;
