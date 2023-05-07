-- DropForeignKey
ALTER TABLE "token_usages" DROP CONSTRAINT "token_usages_memberId_fkey";

-- AlterTable
ALTER TABLE "token_usages" ALTER COLUMN "memberId" DROP NOT NULL,
ALTER COLUMN "memberId" SET DEFAULT 'MAIN';
