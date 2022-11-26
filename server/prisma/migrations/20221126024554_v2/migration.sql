/*
  Warnings:

  - You are about to drop the column `previousWordId` on the `Word` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[sentenceId,nextWordId]` on the table `Word` will be added. If there are existing duplicate values, this will fail.

*/
-- DropForeignKey
ALTER TABLE "Word" DROP CONSTRAINT "Word_previousWordId_fkey";

-- DropIndex
DROP INDEX "Word_sentenceId_previousWordId_key";

-- AlterTable
ALTER TABLE "Word" DROP COLUMN "previousWordId",
ADD COLUMN     "nextWordId" TEXT;

-- CreateIndex
CREATE UNIQUE INDEX "Word_sentenceId_nextWordId_key" ON "Word"("sentenceId", "nextWordId");

-- AddForeignKey
ALTER TABLE "Word" ADD CONSTRAINT "Word_nextWordId_fkey" FOREIGN KEY ("nextWordId") REFERENCES "Word"("id") ON DELETE SET NULL ON UPDATE CASCADE;
