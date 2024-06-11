import { pickNumber } from "../store";
import { NextResponse } from 'next/server';
import { auth, currentUser } from "@clerk/nextjs/server";

export async function POST(req) {
    try {
        const { userId } = auth();

        if (!userId) {
            return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
        }

        const user = await currentUser();

        if (!user) {
            return NextResponse.json({ error: "User not found" }, { status: 404 });
        }

        const { number } = await req.json();
        const result = pickNumber(number);

        if (result.success) {
            return NextResponse.json(result, { status: 200 });
        } else {
            return NextResponse.json(result, { status: 400 });
        }
    } catch (error) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}
