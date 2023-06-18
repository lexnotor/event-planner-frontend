"use client";
import React, { useEffect, useState } from "react";
import { Input, Modal } from "antd";
import AntConfig from "ui/AntConfig";

const NewPost = () => {
    const [open, setOpen] = useState(false);
    useEffect(() => setOpen(true), []);
    return (
        <AntConfig>
            <Modal open={open} title="New post">
                <Input.TextArea placeholder="Post ..." />
            </Modal>
        </AntConfig>
    );
};

export default NewPost;
