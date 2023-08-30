"use client";
import useToggle from "@/hooks/toggle";
import { useAppDispatch } from "@/hooks/useAppDispatch";
import { createMyGig } from "@/redux/gig/gig.slice";
import { Modal } from "antd";
import React from "react";
import { useMyGigContext } from "./context/MyGigContext";
import { Button } from "ui";

const NewMyGig = () => {
    const disaptch = useAppDispatch();
    const [isOpen, setIsOpen] = useToggle(false);

    const { refGigTitle, refGigText, refGigType, allGigTypes } =
        useMyGigContext();

    const submitNewGig: React.FormEventHandler<HTMLFormElement> = async (e) => {
        e.preventDefault();

        const title = refGigTitle.current.value;
        const text = refGigText.current.value;
        const type = refGigType.current.value;
        if (!title || !text || !type) return alert("PLEASE FILL ALL FIELD");

        await disaptch(createMyGig({ title, type, text }));

        setIsOpen(false);
    };

    return (
        <>
            <Button onClick={() => setIsOpen(true)} size="small">
                Nouveau
            </Button>
            <Modal
                destroyOnClose
                footer={null}
                closable={false}
                open={isOpen}
                onCancel={() => setIsOpen(false)}
                title="Nouveau service"
            >
                <form onSubmit={submitNewGig}>
                    <header className="flex flex-col gap-2">
                        <div className="flex flex-col gap-1">
                            <label htmlFor="">Choisir une categorie</label>
                            <select
                                ref={refGigType}
                                className="bg-transparent py-1 px-3 border rounded-lg"
                            >
                                {allGigTypes.map((type) => (
                                    <option key={type} value={type}>
                                        {type}
                                    </option>
                                ))}
                            </select>
                        </div>
                        <div className="flex flex-col gap-1">
                            <label htmlFor="">Entrer le titre du service</label>
                            <input
                                ref={refGigTitle}
                                className="bg-transparent py-1 px-3 border rounded-lg"
                                placeholder="LOCATION DE TENTES 10$ et 15$"
                            />
                        </div>
                        <div className="flex flex-col gap-1">
                            <label htmlFor="">Entrer une description</label>
                            <textarea
                                ref={refGigText}
                                rows={4}
                                className="bg-transparent py-1 px-3 border rounded-lg resize-none"
                                placeholder="Tentes de differentes dimensions"
                            />
                        </div>
                    </header>
                    <footer className="flex justify-end gap-4">
                        <button
                            type="button"
                            className="text-sm hover:bg-gray-300 border mt-2 py-1 px-2 rounded-lg"
                            onClick={() => setIsOpen(false)}
                        >
                            Annuler
                        </button>
                        <button
                            type="submit"
                            className="text-sm hover:bg-gray-300 border mt-2 py-1 px-2 rounded-lg"
                        >
                            Envoyer
                        </button>
                    </footer>
                </form>
            </Modal>
        </>
    );
};

export default NewMyGig;
