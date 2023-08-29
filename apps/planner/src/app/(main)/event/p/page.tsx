"use client";
import EventDetails from "@/components/event/EventDetails";
import SideBarListEvent from "@/components/event/SideBarListEvent";
import StoreProvider from "@/redux/StoreProvider";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

const Page = () => {
    const param = useSearchParams();

    const [id, setId] = useState<string>(null);

    useEffect(() => {
        setId(param.get("id"));
    }, [param]);

    return (
        <div className="p-4 min-h-full">
            <div className="flex gap-4 min-h-full relative">
                <div className="grow">
                    <StoreProvider>
                        <EventDetails id={id} />
                    </StoreProvider>
                </div>
                <div className="sticky shrink-0 top-4 w-72 pb-2">
                    <StoreProvider>
                        <SideBarListEvent />
                    </StoreProvider>
                </div>
            </div>
        </div>
    );
};

export default Page;
