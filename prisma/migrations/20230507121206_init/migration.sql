/*
  Warnings:

  - You are about to drop the column `userId` on the `token_usages` table. All the data in the column will be lost.
  - Added the required column `memberId` to the `token_usages` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "token_usages" DROP CONSTRAINT "token_usages_userId_fkey";

-- AlterTable
ALTER TABLE "token_usages" DROP COLUMN "userId",
ADD COLUMN     "memberId" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "token_usages" ADD CONSTRAINT "token_usages_memberId_fkey" FOREIGN KEY ("memberId") REFERENCES "members"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
