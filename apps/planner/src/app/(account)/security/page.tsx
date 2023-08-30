import React from "react";

const Page = () => {
    return (
        <div className="p-4">
            <h1 className="mb-4 text-2xl font-light">Securité</h1>
            <section className="mb-4 p-4 border border-sky-700/5 rounded-xl">
                <h3 className="mb-4 flex justify-between font-semibold">
                    Mot de passe
                </h3>
                <div className="grid grid-cols-3 gap-4">
                    <div className="flex flex-col gap-1">
                        <label htmlFor="newpsw">Nouveau mot de passe</label>
                        <input
                            id="newpsw"
                            type="password"
                            placeholder="************"
                            className="py-1 px-3 rounded-lg border "
                        />
                    </div>
                    <div className="flex flex-col gap-1">
                        <label htmlFor="confnewpsw">
                            Confirmer mot de passe
                        </label>
                        <input
                            id="confnewpsw"
                            type="password"
                            placeholder="************"
                            className="py-1 px-3 rounded-lg border "
                        />
                    </div>
                    <div className="flex flex-col justify-end items-start">
                        <button className="border py-1 px-3 rounded-lg hover:bg-gray-300">
                            Changer
                        </button>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Page;
