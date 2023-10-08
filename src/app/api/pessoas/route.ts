import { prisma } from "@/services/prisma-service";
import { validateDate } from "@/validations/validateDate";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
    try {
        const body = await request.json();

        if (!body.apelido || !body.nome || !body.nascimento) {
            return NextResponse.json(
                { data: "Invalid fields" },
                { status: 422 }
            );
        }

        if (!body.stack) {
            body.stack = [];
        }

        if (
            typeof body.apelido !== "string" ||
            typeof body.nome !== "string" ||
            typeof body.nascimento !== "string"
        ) {
            return NextResponse.json(
                { data: "Invalid fields" },
                { status: 400 }
            );
        }

        if (!validateDate(body.nascimento)) {
            throw new Error();
        }

        const pessoa = await prisma.pessoa.create({
            data: body,
        });

        return NextResponse.json(
            { location: `/pessoas/${pessoa.id}` },
            { status: 201 }
        );
    } catch (error) {
        if (error instanceof Error) {
            return NextResponse.json({ error: error.message }, { status: 422 });
        }
    }
}

export async function GET(request: Request) {
    try {
        const { searchParams } = new URL(request.url);
        const t: string | null = searchParams.get("t");

        if (!t) {
            throw new Error();
        }

        console.log(t);

        const pessoas = await prisma.pessoa.findMany({
            where: {
                OR: [
                    {
                        nome: {
                            contains: `${t}`,
                            mode: "insensitive",
                        },
                    },
                    {
                        apelido: {
                            contains: `${t}`,
                            mode: "insensitive",
                        },
                    },
                    {
                        stack: {
                            has: `${t}`,
                        },
                    },
                ],
            },
        });

        return NextResponse.json({ data: pessoas }, { status: 200 });
    } catch (error) {
        if (error instanceof Error) {
            return NextResponse.json({ error: error.message }, { status: 400 });
        }
    }
}
