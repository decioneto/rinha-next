import { JsonValue } from "@prisma/client/runtime/library";

export type Pessoa = {
    id: string;
    apelido: string;
    nome: string;
    nascimento: Date;
    stack: string[];
}