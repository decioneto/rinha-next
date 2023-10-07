/*
  Warnings:

  - Changed the type of `stack` on the `Pessoa` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "Pessoa" DROP COLUMN "stack",
ADD COLUMN     "stack" JSONB NOT NULL;
