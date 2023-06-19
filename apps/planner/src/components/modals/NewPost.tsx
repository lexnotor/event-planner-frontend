"use client";
import { CloseModalFunction } from "@/index";
import { Input, Modal, Select } from "antd";
import { useEffect, useState } from "react";
import { Button } from "ui";

const NewPost = ({ close, id }: { close: CloseModalFunction; id: string }) => {
    const [, setOpen] = useState(false);
    useEffect(() => setOpen(true), []);
    return (
        <Modal
            open={true}
            title="Nouvelle publication"
            footer={
                <div className="flex justify-end gap-4">
                    <Button size="middle">Brouillon</Button>
                    <Button size="middle">Publier</Button>
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
            />

            <label className="mt-4 mb-2 inline-block">
                Sélectionner un prestataire
            </label>
            <Select
                options={[
                    ...(function* (i) {
                        for (let j = 0; j < i; j++)
                            yield { value: j, label: "Option" };
                    })(30),
                ]}
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
