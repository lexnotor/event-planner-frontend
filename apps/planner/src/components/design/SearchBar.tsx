"use client";
import { useAppDispatch } from "@/hooks/useAppDispatch";
import { ModalID, openModal } from "@/redux/modals/modal.slice";
import { AiOutlinePlus, AiOutlineSearch } from "react-icons/ai";
import { Button } from "ui";

const SearchBar = () => {
    const dispatch = useAppDispatch();

    return (
        <div className="flex justify-between">
            <div className="w-80 bg-white border overflow-hidden rounded-r-full rounded-l-full">
                <label className="w-full h-full px-4 py-1 flex gap-4 cursor-text item-center">
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
                    size="small"
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
