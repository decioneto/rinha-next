-- CreateTable
CREATE TABLE "Pessoa" (
    "apelido" VARCHAR(32) NOT NULL,
    "nome" VARCHAR(100) NOT NULL,
    "nascimento" TIMESTAMP(3) NOT NULL,
    "stack" JSONB NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Pessoa_apelido_key" ON "Pessoa"("apelido");
