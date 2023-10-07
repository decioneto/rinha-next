import { prisma } from "@/services/prisma-service";
import { NextResponse } from "next/server";

type QueryParams = {
    params: {
        id: string;
    };
};

export async function GET({ params }: QueryParams) {
    try {
        const { id } = params;

        const pessoa = await prisma.pessoa.findFirst({ where: { id } });

        if (!pessoa) throw new Error();

        return NextResponse.json(
            { data: pessoa },
            { status: 200 }
        )
    } catch (error) {
        if (error instanceof Error) {
            return NextResponse.json(
                { error: error.message },
                { status: 400 }
            )
        }
    }
}