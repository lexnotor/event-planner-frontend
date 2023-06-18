"use client";
import React, { useEffect, useState } from "react";
import { Input, Modal } from "antd";
import AntConfig from "ui/AntConfig";
import { Button } from "ui";

const NewPost = () => {
    const [open, setOpen] = useState(false);
    useEffect(() => setOpen(true), []);
    return (
        <AntConfig>
            <Modal
                open={open}
                title="Nouvelle publication"
                footer={
                    <div className="flex justify-end gap-4">
                        <Button size="middle">Brouillon</Button>
                        <Button size="middle">Publier</Button>
                    </div>
                }
            >
                <Input.TextArea placeholder="Post ..." />
            </Modal>
        </AntConfig>
    );
};

export default NewPost;
