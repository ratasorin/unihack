/*
  Warnings:

  - A unique constraint covering the columns `[userId]` on the table `Password` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `userId` to the `Password` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Password" ADD COLUMN     "userId" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Password_userId_key" ON "Password"("userId");

-- AddForeignKey
ALTER TABLE "Password" ADD CONSTRAINT "Password_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
