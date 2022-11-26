/*
  Warnings:

  - Added the required column `mail` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "User" ADD COLUMN     "mail" TEXT NOT NULL;

-- CreateTable
CREATE TABLE "Password" (
    "id" TEXT NOT NULL,
    "hash" TEXT NOT NULL,
    "salt" TEXT NOT NULL,

    CONSTRAINT "Password_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Session" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL,
    "lifeSpan" TIMESTAMP(3) NOT NULL,
    "status" TEXT NOT NULL,

    CONSTRAINT "Session_pkey" PRIMARY KEY ("id")
);
