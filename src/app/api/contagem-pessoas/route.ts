import { prisma } from "@/services/prisma-service";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
    try {
        const count = await prisma.pessoa.count();

        return NextResponse.json({ data: count }, { status: 200 });
    } catch (error) {
        return NextResponse.json({ status: 400 });
    }
}
