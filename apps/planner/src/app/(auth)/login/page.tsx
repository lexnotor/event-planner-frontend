import Link from "next/link";
import React from "react";

const Page = () => {
    return (
        <>
            <section className="flex flex-col gap-4 mb-4">
                <h2 className="text-3xl">Connectez vous</h2>
                <p className="text-neutral-400 font-light">
                    Accéder à votre compte
                </p>
            </section>

            <section>
                <button className="block py-2 px-4 text-center rounded-lg border border-neutral-500 w-full">
                    Continuer avec Google
                </button>
            </section>

            <section className="my-8 flex items-center gap-4">
                <hr className="border-[0.5px] border-neutral-500 grow" />
                <span>Ou</span>
                <hr className="border-[0.5px] border-neutral-500 grow" />
            </section>
            <section>
                <form className="flex flex-col gap-6">
                    <div className="flex gap-4">
                        <input
                            type="email"
                            placeholder="Votre email"
                            className="py-2 px-4 w-full border border-neutral-400 rounded-lg focus:outline-none"
                        />
                    </div>
                    <div className="flex gap-4">
                        <input
                            type="password"
                            placeholder="Mot de passe"
                            className="py-2 px-4 w-full border border-neutral-400 rounded-lg focus:outline-none"
                        />
                    </div>
                    <div className="flex gap-4">
                        <label
                            htmlFor="long_session"
                            className="flex items-center gap-2 cursor-pointer"
                        >
                            <span className="w-3 h-3 inline-block border-[0.5px] border-neutral-500 rounded-sm" />
                            <span>Rester connecter</span>
                        </label>
                        <input
                            id="long_session"
                            type="checkbox"
                            hidden
                            checked
                            className="py-2 px-4 w-full border border-neutral-400 rounded-lg focus:outline-none"
                        />
                    </div>
                    <div className="flex gap-4 flex-col">
                        <button className="block py-2 px-4 text-center rounded-lg border bg-neutral-700 text-white font-semibold w-full">
                            Se connecter
                        </button>
                        <Link
                            href={"/signup"}
                            className="block text-center underline"
                        >
                            Je n'ai pas encore de compte
                        </Link>
                    </div>
                </form>
            </section>
        </>
    );
};

export default Page;
