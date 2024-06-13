import { NextResponse } from 'next/server';
import { currentUser, auth } from "@clerk/nextjs/server";
import { getAvailableNumbers } from '../../../store/store';

export async function GET() {
    try {

        const { userId } = auth();

        if (!userId) {
            console.log("Unauthorized access attempt");
            return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
        }

        const user = await currentUser();

        const availableNumbers = await getAvailableNumbers();
    
        return NextResponse.json({ user, availableNumbers }, { status: 200 });
    } catch (error) {
        console.error("Error in GET request:", error);
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}
