import React from "react";

const MCService = () => {
    return (
        <div className="w-full">
            <table>
                <tbody>
                    <tr>
                        <td>
                            <label htmlFor="">Prestataire :</label>
                        </td>
                        <td>
                            <select
                                className="w-[30rem] border rounded-l-full rounded-r-full border-primary-900 bg-primary-200 px-4 py-2 focus:outline-none bg-transparent"
                                name=""
                                id=""
                            >
                                <option value="PREMIERE DAME">
                                    PREMIERE DAME
                                </option>
                            </select>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default MCService;
