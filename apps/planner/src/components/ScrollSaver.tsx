"use client";

import { usePathname, useSearchParams } from "next/navigation";
import { useEffect, useRef } from "react";

const ScrollSaver = () => {
    const [pathname, searchParams] = [usePathname(), useSearchParams()];
    const thisComp = useRef<HTMLSpanElement>(null);

    useEffect(() => {
        const parent = thisComp.current.parentElement;
        const scrollPos = localStorage.getItem(
            pathname + searchParams.toString()
        );
        if (scrollPos)
            parent.scrollTo({ behavior: "instant", top: +scrollPos });

        const savePosition = (e: Event) => {
            localStorage.setItem(
                pathname + searchParams.toString(),
                (e.target as HTMLElement).scrollTop.toString()
            );
        };

        parent.addEventListener("scrollend", savePosition);

        return () => parent.removeEventListener("scrollend", savePosition);
    }, [thisComp, pathname, searchParams]);

    return <span ref={thisComp} className="absolute" />;
};

export default ScrollSaver;
