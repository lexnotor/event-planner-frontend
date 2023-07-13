"use client";
import { ModalID, openModal } from "@/redux/modals/modal.slice";
import { Dispatcher } from "@/redux/store";
import React from "react";
import { AiOutlinePlus, AiOutlineSearch } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { Button } from "ui";

const SearchBar = () => {
    const dispatch = useDispatch<Dispatcher>();

    return (
        <div className="flex justify-between">
            <div className="w-80 bg-white border overflow-hidden rounded-r-full rounded-l-full">
                <label className="w-full h-full px-4 py-2 flex gap-4 cursor-text item-center">
                    <span className="text-xl text-neutral-500">
                        <AiOutlineSearch className="!align-middle inline" />
                    </span>
                    <input
                        type="text"
                        className="focus:outline-none bg-transparent"
                        placeholder="Recherche ..."
                    />
                </label>
            </div>
            <div>
                <Button
                    onClick={() =>
                        dispatch(openModal({ modal_id: ModalID.NEW_DESIGN }))
                    }
                >
                    <div className="flex gap-1 items-center">
                        <span>
                            <AiOutlinePlus />
                        </span>
                        <span>Partager</span>
                    </div>
                </Button>
            </div>
        </div>
    );
};

export default SearchBar;
