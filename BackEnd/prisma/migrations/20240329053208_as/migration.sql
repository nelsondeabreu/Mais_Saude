-- CreateTable
CREATE TABLE `EntidadesSistema` (
    `id` VARCHAR(191) NOT NULL,
    `name` VARCHAR(191) NOT NULL,
    `cnpj` VARCHAR(191) NOT NULL,
    `tipo_entidade` VARCHAR(191) NOT NULL,
    `sobre` VARCHAR(191) NULL,
    `email` VARCHAR(191) NOT NULL,
    `foto` VARCHAR(191) NULL,
    `enderecoID` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `EntidadesSistema_cnpj_key`(`cnpj`),
    UNIQUE INDEX `EntidadesSistema_email_key`(`email`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
