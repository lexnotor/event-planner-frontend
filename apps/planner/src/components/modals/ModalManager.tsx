"use client";

import { ModalID, closeModal } from "@/redux/modals/modal.slice";
import type { Dispatcher, RootState } from "@/redux/store";
import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import AntConfig from "ui/AntConfig";
import NewPost from "./NewPost";
import StoreProvider from "@/redux/StoreProvider";
import NewDesign from "./NewDesign";

const ModalManager = () => {
    const modals = useSelector((state: RootState) => state.modalmanager);
    const dispatch = useDispatch<Dispatcher>();
    const close = useCallback(() => dispatch(closeModal()), [dispatch]);

    return (
        <AntConfig>
            <StoreProvider>
                <div className="absolute bottom-0">
                    {modals.modal_id == ModalID.NEW_POST ? (
                        <NewPost
                            close={close}
                            id={ModalID.NEW_POST}
                            {...modals.payload}
                        />
                    ) : modals.modal_id == ModalID.NEW_DESIGN ? (
                        <NewDesign
                            close={close}
                            id={ModalID.NEW_DESIGN}
                            {...modals.payload}
                        />
                    ) : (
                        <></>
                    )}
                </div>
            </StoreProvider>
        </AntConfig>
    );
};

export default ModalManager;
