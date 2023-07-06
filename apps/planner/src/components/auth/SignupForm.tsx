"use client";
import useToggle from "@/hooks/toggle";
import Link from "next/link";
import { AiOutlineCheck } from "react-icons/ai";
import Checkbox from "ui/Checkbox";

const SignupForm = () => {
    const [policiesChecked, togglePoliciesChecked] = useToggle(false);
    return (
        <form className="flex flex-col gap-6">
            <div className="flex gap-4">
                <input
                    type="text"
                    placeholder="Prénom"
                    className="py-2 px-4 w-1/2 basis-1/2 border border-neutral-400 rounded-lg focus:outline-none"
                />
                <input
                    type="text"
                    placeholder="Nom"
                    className="py-2 px-4 w-1/2 basis-1/2 border border-neutral-400 rounded-lg focus:outline-none"
                />
            </div>
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
                    htmlFor="policies"
                    className="flex items-center gap-2 cursor-pointer"
                >
                    <Checkbox
                        toggler={togglePoliciesChecked}
                        isChecked={policiesChecked}
                    />
                    <span>
                        J’ai lu et j’accepte les conditions d’utilisation
                    </span>
                </label>
            </div>
            <div className="flex gap-4 flex-col">
                <button className="block py-2 px-4 text-center rounded-lg border bg-neutral-700 text-white font-semibold w-full">
                    Créer compte
                </button>
                <Link href={"/login"} className="block text-center underline">
                    J'ai déjà un compte
                </Link>
            </div>
        </form>
    );
};

export default SignupForm;
