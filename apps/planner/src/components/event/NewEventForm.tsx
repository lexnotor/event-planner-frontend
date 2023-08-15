import React from "react";

const NewEventForm = () => {
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
                                type="text"
                                className="w-[30rem] border rounded-l-full rounded-r-full border-primary-900 bg-primary-200 px-4 py-2 focus:outline-none bg-transparent"
                            />
                        </td>
                    </tr>

                    <tr>
                        <td>
                            <label htmlFor="">Lieu :</label>
                        </td>
                        <td>
                            <input
                                placeholder="Goma, RDC"
                                type="text"
                                className="w-[30rem] border rounded-l-full rounded-r-full border-primary-900 bg-primary-200 px-4 py-2 focus:outline-none bg-transparent"
                            />
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <label htmlFor="">Date :</label>
                        </td>
                        <td>
                            <input
                                type="date"
                                className="w-[30rem] border rounded-l-full rounded-r-full border-primary-900 bg-primary-200 px-4 py-2 focus:outline-none bg-transparent"
                            />
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <label htmlFor="">Description :</label>
                        </td>
                        <td>
                            <textarea
                                rows={4}
                                placeholder="Jubiler d'or du mariage couple x-y"
                                className="resize-none w-[30rem] border rounded-2xl border-primary-900 bg-primary-200 px-4 py-2 focus:outline-none bg-transparent"
                            />
                        </td>
                    </tr>
                </tbody>
            </table>
        </form>
    );
};

export default NewEventForm;
