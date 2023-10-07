/*
  Warnings:

  - The `stack` column on the `Pessoa` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "Pessoa" DROP COLUMN "stack",
ADD COLUMN     "stack" TEXT[];
