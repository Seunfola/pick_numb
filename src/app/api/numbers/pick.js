// app/api/numbers/pick.js
import { pickNumber } from "../store";

export async function POST(req, res) {
    const { number } = await req.json();

    const result = pickNumber(number);
    if (result.success) {
        return res.status(200).json(result);
    } else {
        return res.status(400).json(result);
    }
}
