import { getAvailableNumbers } from "../../../store";
import { NextResponse } from 'next/server';
import { currentUser, auth } from "@clerk/nextjs/server";

export async function GET(req) {
    try {
        const { userId } = auth();

        if (!userId) {
            return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
        }

        const user = await currentUser();

        const availableNumbers = await getAvailableNumbers();

        console.log({availableNumbers});

        return NextResponse.json({ user, availableNumbers }, { status: 200 });
    } catch (error) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}
