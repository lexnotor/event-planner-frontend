"use client";
import EventDetails from "@/components/event/EventDetails";
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
        <div className="p-4">
            <StoreProvider>
                <EventDetails id={id} />
            </StoreProvider>
        </div>
    );
};

export default Page;
