"use client";
import useToggle from "@/hooks/toggle";
import { Modal } from "antd";
import React from "react";
import { useMyGigContext } from "./context/MyGigContext";

const NewMyGig = () => {
    const [isOpen, setIsOpen] = useToggle(false);

    const { newGig } = useMyGigContext();

    const submitNewGig: React.FormEventHandler<HTMLFormElement> = (e) => {
        e.preventDefault();
        setIsOpen(false);
        alert("GIG_ADDED");
    };

    return (
        <>
            <button
                onClick={() => setIsOpen(true)}
                className="text-sm hover:bg-gray-300 border mt-2 py-1 px-2 rounded-lg"
            >
                Nouveau
            </button>
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
                            <select className="bg-transparent py-1 px-3 border rounded-lg">
                                <option>LAUNCH</option>
                            </select>
                        </div>
                        <div className="flex flex-col gap-1">
                            <label htmlFor="">Entrer le titre du service</label>
                            <input
                                className="bg-transparent py-1 px-3 border rounded-lg"
                                placeholder="LOCATION DE TENTES 10$ et 15$"
                            />
                        </div>
                        <div className="flex flex-col gap-1">
                            <label htmlFor="">Entrer une description</label>
                            <textarea
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
