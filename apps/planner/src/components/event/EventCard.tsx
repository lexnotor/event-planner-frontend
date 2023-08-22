"use client";
import { BiCurrentLocation } from "react-icons/bi";
import { Button } from "ui";

const EventCard = () => {
    return (
        <article className="flex flex-col gap-2 max-w-xs w-full bg-white duration-500 transition-colors p-4 rounded-md border border-primary-500">
            <header>
                <h3 className="font-medium text-lg">Concert du show</h3>
            </header>
            <hr />
            <section className="">
                <span className="text-xs font-thin text-primary-700">
                    25 Juillet 2023 | 18h00 - 22h30
                </span>
                <p className="overflow-ellipsis">
                    {`Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad
                    aspernatur, non aliquid voluptas aut maxime magni vitae
                    velit perferendis, assumenda tenetur similique odio tempore
                    modi ut officia, numquam rem animi!`.substring(0, 250) +
                        "..."}
                </p>
            </section>
            <hr />
            <footer className="flex justify-between">
                <div className="flex gap-2 items-center text-primary-700">
                    <BiCurrentLocation style={{ verticalAlign: "middle" }} />
                    <span className="text-xs font-thin">
                        Place saint Jean-Paul
                    </span>
                </div>
                <div>
                    <Button size="small" style={{ fontSize: "80%" }}>
                        Plus
                    </Button>
                </div>
            </footer>
        </article>
    );
};

export default EventCard;
