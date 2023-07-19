"use client";

import { usePathname, useSearchParams } from "next/navigation";
import { useEffect } from "react";

const ScrollSaver = () => {
    const [pathname, searchParams] = [usePathname(), useSearchParams()];

    useEffect(() => {
        const scrollPos = localStorage.getItem(
            pathname + searchParams.toString()
        );
        if (scrollPos) window.scrollTo({ behavior: "smooth", top: +scrollPos });

        const savePosition = () => {
            localStorage.setItem(
                pathname + searchParams.toString(),
                window.scrollY.toString()
            );
        };
        window.addEventListener("scroll", savePosition);

        return window.removeEventListener("scroll", savePosition);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return <></>;
};

export default ScrollSaver;
