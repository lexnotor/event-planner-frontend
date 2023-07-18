"use client";

import { useAppDispatch } from "@/hooks/useAppDispatch";
import { useAppSelector } from "@/hooks/useAppSelector";
import StoreProvider from "@/redux/StoreProvider";
import { ModalID, closeModal } from "@/redux/modals/modal.slice";
import { useCallback } from "react";
import AntConfig from "ui/AntConfig";
import NewDesign from "./NewDesign";
import NewPost from "./NewPost";

const ModalManager = () => {
    const modals = useAppSelector((state) => state.modalmanager);
    const dispatch = useAppDispatch();
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
