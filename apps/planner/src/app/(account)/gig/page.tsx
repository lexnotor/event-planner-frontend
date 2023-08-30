import MyGigs from "@/components/account/MyGigs";
import Image from "next/image";
import React from "react";
import { BiEdit } from "react-icons/bi";

const Page = () => {
    return (
        <div className="p-4">
            <div className="bg-white p-4 rounded-xl h-[calc(100vh-2rem)]">
                <h1 className="mb-4 text-2xl font-light">Mes services</h1>
                <section className="mb-4 p-4 border border-sky-700/5 rounded-xl flex gap-4 justify-center items-center">
                    <h3 className="font-semibold w-24 h-24 bg-slate-300 rounded-full overflow-hidden text-center">
                        <Image
                            src={
                                "https://cdn.pixabay.com/photo/2016/11/21/12/42/beard-1845166_960_720.jpg"
                            }
                            height={200}
                            width={200}
                            className="w-full h-full object-cover"
                            alt="AC"
                        />
                    </h3>
                    <div className="flex flex-col gap-1">
                        <span className="font-semibold">Alexandre Chambu</span>
                        <span className="italic text-gray-400">@lexnotor</span>
                        <span className="italic text-gray-400">
                            Oragnisateur d'évenement
                        </span>
                    </div>
                </section>

                <section className="mb-4 p-4 border border-sky-700/5 rounded-xl">
                    <h3 className="mb-4 flex justify-between">
                        <span className="font-semibold">Services</span>
                        <span>
                            <button className="text-sm hover:bg-gray-300 border mt-2 py-1 px-2 rounded-lg">
                                Nouveau
                            </button>
                        </span>
                    </h3>
                    <MyGigs />
                </section>
                <section className="mb-4 p-4 border border-sky-700/5 rounded-xl">
                    <h3 className="font-semibold mb-4 flex justify-between">
                        <span> Information personnelle</span>
                        <span className="text-2xl">
                            <BiEdit />
                        </span>
                    </h3>
                    <div className="grid grid-cols-2 gap-y-5">
                        <div className="flex flex-col gap-1">
                            <span className="text-gray-400">First Name</span>
                            <span>Alexandre</span>
                        </div>
                        <div className="flex flex-col gap-1">
                            <span className="text-gray-400">Last Name</span>
                            <span>Chambu</span>
                        </div>
                        <div className="flex flex-col gap-1">
                            <span className="text-gray-400">Email</span>
                            <span>Non definie</span>
                        </div>
                        <div className="flex flex-col gap-1">
                            <span className="text-gray-400">
                                Nom d'utilisateur
                            </span>
                            <span>lexnotor</span>
                        </div>
                        <div className="flex flex-col gap-1">
                            <span className="text-gray-400">Descriptif</span>
                            <span>Oragnisateur d'évenement</span>
                        </div>
                        <div className="flex flex-col gap-1">
                            <span className="text-gray-400">Adresse</span>
                            <span>Goma, RD Congo</span>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default Page;
