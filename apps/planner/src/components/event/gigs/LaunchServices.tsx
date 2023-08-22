"use client";
import useToggle from "@/hooks/toggle";
import { Modal } from "antd";
import { CiSearch } from "react-icons/ci";
import { Button } from "ui";
import { useNewEventContext } from "../context/NewEventContext";

const LaunchServices = ({ id }: { id: string }) => {
    const context = useNewEventContext();
    const current = context.services.find((item) => item.id == id);

    const [isSearch, setIsSearching] = useToggle(false);

    return (
        <>
            <div className="flex flex-col gap-2 max-w-md w-full bg-white duration-500 transition-colors p-4 rounded-md border border-primary-500">
                <h3>{current?.type ?? "INCONNUE"}</h3>
                <hr />
                <table>
                    <tbody>
                        <tr>
                            <td>
                                <label htmlFor="">Prestataire :</label>
                            </td>
                            <td className="flex w-[20rem] gap-2 items-center">
                                <input
                                    type="text"
                                    placeholder="PREMIERE DAME"
                                    defaultValue={current?.supplier ?? ""}
                                    className="grow border rounded-l-full rounded-r-full border-primary-900 bg-primary-200 px-4 py-2 focus:outline-none bg-transparent"
                                />
                                <span
                                    className="text-3xl cursor-pointer hover:text-blue-700"
                                    onClick={() => setIsSearching(true)}
                                >
                                    <CiSearch />
                                </span>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <label htmlFor="">Détails :</label>
                            </td>
                            <td className="flex w-[20rem]">
                                <input
                                    type="text"
                                    placeholder="260 Invités; 260 + 20 plats"
                                    defaultValue={current?.details ?? ""}
                                    className="grow border rounded-l-full rounded-r-full border-primary-900 bg-primary-200 px-4 py-2 focus:outline-none bg-transparent"
                                />
                            </td>
                        </tr>
                    </tbody>
                </table>
                <div className="flex justify-end">
                    <Button
                        size="small"
                        onClick={() => context.deleteService(id)}
                    >
                        Supprimer
                    </Button>
                </div>
            </div>
            <Modal
                destroyOnClose
                open={isSearch}
                closable
                footer={null}
                onCancel={() => setIsSearching(false)}
            />
        </>
    );
};

export default LaunchServices;
