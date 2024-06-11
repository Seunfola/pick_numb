import { getAvailableNumbers } from "../store";

export async function GET(req, res) {
    const availableNumbers = getAvailableNumbers();
    return res.status(200).json({ availableNumbers });
}
