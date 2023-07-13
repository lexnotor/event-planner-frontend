"use client";
import { CloseModalFunction } from "@/index";
import { Input, Modal } from "antd";
import { TextAreaRef } from "antd/es/input/TextArea";
import { useRef } from "react";
import { Button } from "ui";
import ImageUploader from "../ImageUploader";
import { useDispatch } from "react-redux";
import { Dispatcher } from "@/redux/store";
import { createDesign } from "@/redux/design/design.slice";

const NewDesign = ({
    close,
    id,
}: {
    close: CloseModalFunction;
    id: string;
}) => {
    const dispatch = useDispatch<Dispatcher>();

    const designTextRef = useRef<TextAreaRef>(null);
    const designImageRef = useRef<{ file?: File }>({});

    const submitDesign = () => {
        const { value: designText } =
            designTextRef.current.resizableTextArea.textArea;

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

            <Input.TextArea
                placeholder="Text ..."
                rows={3}
                style={{ resize: "none" }}
                bordered={false}
                className="!bg-neutral-100"
                ref={designTextRef}
            />
        </Modal>
    );
};

export default NewDesign;
