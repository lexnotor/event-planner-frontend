"use client";

import { ModalID, openModal } from "@/redux/modals/modal.slice";
import { Dispatcher } from "@/redux/store";
import { useDispatch } from "react-redux";
import { Button } from "ui";

const RightSidebar = () => {
    const dispatch = useDispatch<Dispatcher>();

    return (
        <div className="flex flex-col gap-6">
            <div className="p-4 bg-white rounded-xl"></div>
            <div className="flex flex-col">
                <Button
                    size="middle"
                    center
                    onClick={() =>
                        dispatch(openModal({ modal_id: ModalID.NEW_POST }))
                    }
                >
                    New Post
                </Button>
            </div>
        </div>
    );
};

export default RightSidebar;
