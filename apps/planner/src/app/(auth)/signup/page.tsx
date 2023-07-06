import SignupForm from "@/components/auth/SignupForm";
import Link from "next/link";
import React from "react";

const Page = () => {
    return (
        <>
            <section className="flex flex-col gap-4 mb-4">
                <h2 className="text-3xl">Créer votre compte</h2>
                <p className="text-neutral-400 font-light">
                    Rejoignez une grande communauté et proposez les meilleurs
                    services
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
                <SignupForm />
            </section>
        </>
    );
};

export default Page;
