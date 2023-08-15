"use client";
import React from "react";
import { Button } from "ui";
import { useNewEventContext } from "../context/NewEventContext";

const LaunchServices = ({ id }: { id: string }) => {
    const context = useNewEventContext();
    const current = context.services.find((item) => item.id == id);

    return (
        <div className="flex flex-col gap-2 max-w-md w-full bg-white duration-500 transition-colors p-4 rounded-md border border-primary-500">
            <h3>{current?.type ?? "INCONNUE"}</h3>
            <hr />
            <table>
                <tbody>
                    <tr>
                        <td>
                            <label htmlFor="">Prestataire :</label>
                        </td>
                        <td>
                            <input
                                type="text"
                                placeholder="PREMIERE DAME"
                                defaultValue={current?.supplier ?? ""}
                                className="w-[20rem] border rounded-l-full rounded-r-full border-primary-900 bg-primary-200 px-4 py-2 focus:outline-none bg-transparent"
                            />
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <label htmlFor="">Détails :</label>
                        </td>
                        <td>
                            <input
                                type="text"
                                placeholder="260 Invités; 260 + 20 plats"
                                defaultValue={current?.details ?? ""}
                                className="w-[20rem] border rounded-l-full rounded-r-full border-primary-900 bg-primary-200 px-4 py-2 focus:outline-none bg-transparent"
                            />
                        </td>
                    </tr>
                </tbody>
            </table>
            <div className="flex justify-end">
                <Button size="small" onClick={() => context.deleteService(id)}>
                    Supprimer
                </Button>
            </div>
        </div>
    );
};

export default LaunchServices;
