"use client";

import { closeModal } from "@/redux/modals/modal.slice";
import type { Dispatcher, RootState } from "@/redux/store";
import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import AntConfig from "ui/AntConfig";
import NewPost from "./NewPost";

const ModalManager = () => {
    const modals = useSelector((state: RootState) => state.modalmanager);
    const dispatch = useDispatch<Dispatcher>();
    const close = useCallback(
        (id: string) => dispatch(closeModal()),
        [dispatch]
    );

    return (
        <AntConfig>
            <div className="absolute bottom-0">
                {modals.modal_id == "NEW_POST" ? (
                    <NewPost close={close} id="NEW_POST" {...modals.payload} />
                ) : (
                    <></>
                )}
            </div>
        </AntConfig>
    );
};

export default ModalManager;
