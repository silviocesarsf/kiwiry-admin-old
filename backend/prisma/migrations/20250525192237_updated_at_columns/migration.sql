-- AlterTable
ALTER TABLE `EnterprisePlan` ADD COLUMN `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    ADD COLUMN `modified_at` DATETIME(3) NULL;

-- AlterTable
ALTER TABLE `PasswordResetToken` ADD COLUMN `modified_at` DATETIME(3) NULL;

-- AlterTable
ALTER TABLE `User` ADD COLUMN `modified_at` DATETIME(3) NULL;
