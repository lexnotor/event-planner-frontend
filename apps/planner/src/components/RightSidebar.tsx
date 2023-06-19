"use client";

import { openModal } from "@/redux/modals/modal.slice";
import { Dispatcher } from "@/redux/store";
import { useDispatch } from "react-redux";
import { Button } from "ui";

const RightSidebar = () => {
    const dispatch = useDispatch<Dispatcher>();

    return (
        <div className="flex flex-col">
            <Button
                center
                onClick={() => dispatch(openModal({ modal_id: "NEW_POST" }))}
            >
                New Post
            </Button>
        </div>
    );
};

export default RightSidebar;
