import { NextRequest, NextResponse } from "next/server";

let num: any = 0;

function repeatperhour() {
    try {
        fetch(`${process.env.BACKEND}/api/v1/cron`, { cache: "no-cache" })
            .then((res) => res.json())
            .then((json) => console.log(json))
            .catch((err) => console.error(err));
    } catch (error) {
        console.error("first");
    }

    num = setTimeout(repeatperhour, 10 * 1000);
}

export function GET(req: NextRequest, context: { params: any }) {
    if (context.params?.psw != "alexandre")
        return NextResponse.json({ message: "cron stopped" }, { status: 400 });

    clearTimeout(num);

    repeatperhour();

    return NextResponse.json({ message: "cron created" }, { status: 201 });
}
