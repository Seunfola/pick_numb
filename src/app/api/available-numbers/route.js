import { NextResponse } from 'next/server';
import { currentUser, auth } from "@clerk/nextjs/server";
import { getAvailableNumbers } from '../../../store/store';

export async function GET() {
    try {
        console.log("Starting GET request");

        const { userId } = auth();
        console.log("User ID:", userId);

        if (!userId) {
            console.log("Unauthorized access attempt");
            return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
        }

        const user = await currentUser();
        console.log("Current User:", user);

        const availableNumbers = await getAvailableNumbers();
        console.log("Available Numbers:", availableNumbers);

        return NextResponse.json({ user, availableNumbers }, { status: 200 });
    } catch (error) {
        console.error("Error in GET request:", error);
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}
