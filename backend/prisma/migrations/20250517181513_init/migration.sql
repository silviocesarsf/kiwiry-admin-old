-- CreateTable
CREATE TABLE `Enterprise` (
    `enterprise_id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `cnpj` VARCHAR(191) NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `modified_at` DATETIME(3) NULL,

    PRIMARY KEY (`enterprise_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `User` (
    `user_id` INTEGER NOT NULL AUTO_INCREMENT,
    `enterprise_id` INTEGER NOT NULL,
    `email` VARCHAR(191) NOT NULL,
    `name` VARCHAR(191) NOT NULL,
    `verified` BOOLEAN NOT NULL DEFAULT false,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NULL,
    `password_hash` VARCHAR(191) NULL,
    `email_verification_token` VARCHAR(191) NULL,

    UNIQUE INDEX `User_email_key`(`email`),
    PRIMARY KEY (`user_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Plan` (
    `plan_id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `price` DECIMAL(10, 2) NOT NULL,
    `is_active` BOOLEAN NOT NULL DEFAULT true,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `modified_at` DATETIME(3) NULL,

    PRIMARY KEY (`plan_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `EnterprisePlan` (
    `enterprise_plan_id` INTEGER NOT NULL AUTO_INCREMENT,
    `enterprise_id` INTEGER NOT NULL,
    `plan_id` INTEGER NOT NULL,
    `started_at` DATETIME(3) NOT NULL,
    `expires_at` DATETIME(3) NULL,
    `is_trial` BOOLEAN NOT NULL DEFAULT true,

    PRIMARY KEY (`enterprise_plan_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `User` ADD CONSTRAINT `User_enterprise_id_fkey` FOREIGN KEY (`enterprise_id`) REFERENCES `Enterprise`(`enterprise_id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `EnterprisePlan` ADD CONSTRAINT `EnterprisePlan_enterprise_id_fkey` FOREIGN KEY (`enterprise_id`) REFERENCES `Enterprise`(`enterprise_id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `EnterprisePlan` ADD CONSTRAINT `EnterprisePlan_plan_id_fkey` FOREIGN KEY (`plan_id`) REFERENCES `Plan`(`plan_id`) ON DELETE RESTRICT ON UPDATE CASCADE;
