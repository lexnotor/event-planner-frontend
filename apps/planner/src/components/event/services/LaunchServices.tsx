import React from "react";
import { Button } from "ui";

const LaunchServices = () => {
    return (
        <div className="flex flex-col gap-2 max-w-md w-full bg-white duration-500 transition-colors p-4 rounded-md border border-primary-500">
            <h3>Repas</h3>
            <hr />
            <table>
                <tbody>
                    <tr>
                        <td>
                            <label htmlFor="">Prestataire :</label>
                        </td>
                        <td>
                            <select
                                className="w-[20rem] border rounded-l-full rounded-r-full border-primary-900 bg-primary-200 px-4 py-2 focus:outline-none bg-transparent"
                                name=""
                                id=""
                            >
                                <option value="PREMIERE DAME">
                                    PREMIERE DAME
                                </option>
                            </select>
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
                                className="w-[20rem] border rounded-l-full rounded-r-full border-primary-900 bg-primary-200 px-4 py-2 focus:outline-none bg-transparent"
                            />
                        </td>
                    </tr>
                </tbody>
            </table>
            <div className="flex justify-end">
                <Button size="small">Supprimer</Button>
            </div>
        </div>
    );
};

export default LaunchServices;
