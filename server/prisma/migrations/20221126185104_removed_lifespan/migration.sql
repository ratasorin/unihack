/*
  Warnings:

  - You are about to drop the column `lifeSpan` on the `Session` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Session" DROP COLUMN "lifeSpan",
ALTER COLUMN "createdAt" SET DEFAULT CURRENT_TIMESTAMP;
