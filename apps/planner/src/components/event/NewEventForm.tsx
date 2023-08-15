"use client";
import React from "react";
import { useNewEventContext } from "./context/NewEventContext";

const NewEventForm = () => {
    const context = useNewEventContext();
    return (
        <form className="flex flex-col gap-4">
            <table>
                <tbody>
                    <tr>
                        <td>
                            <label htmlFor="">Nom d'évenement :</label>
                        </td>
                        <td>
                            <input
                                ref={context.titleRef}
                                placeholder="Célebration anniversaire de mariage"
                                type="text"
                                className="bg-white w-[30rem] border rounded-l-full rounded-r-full border-primary-900  px-4 py-2 focus:outline-none bg-transparent"
                            />
                        </td>
                    </tr>

                    <tr>
                        <td>
                            <label htmlFor="">Lieu :</label>
                        </td>
                        <td>
                            <input
                                ref={context.LocationRef}
                                placeholder="Goma, RDC"
                                type="text"
                                className="bg-white w-[30rem] border rounded-l-full rounded-r-full border-primary-900  px-4 py-2 focus:outline-none bg-transparent"
                            />
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <label htmlFor="">Date :</label>
                        </td>
                        <td>
                            <input
                                ref={context.dateRef}
                                type="date"
                                className="bg-white w-[30rem] border rounded-l-full rounded-r-full border-primary-900  px-4 py-2 focus:outline-none bg-transparent"
                            />
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <label htmlFor="">Description :</label>
                        </td>
                        <td>
                            <textarea
                                ref={context.descriptionRef}
                                rows={4}
                                placeholder="Jubiler d'or du mariage couple x-y"
                                className="bg-white resize-none w-[30rem] border rounded-2xl border-primary-900  px-4 py-2 focus:outline-none bg-transparent"
                            />
                        </td>
                    </tr>
                </tbody>
            </table>
        </form>
    );
};

export default NewEventForm;
