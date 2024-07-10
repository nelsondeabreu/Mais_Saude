/*
  Warnings:

  - You are about to drop the column `bloqueado` on the `especialistas` table. All the data in the column will be lost.
  - You are about to drop the column `tipo_De_Consulta` on the `especialistas` table. All the data in the column will be lost.
  - You are about to drop the column `valor` on the `especialistas` table. All the data in the column will be lost.
  - You are about to drop the `comentarios` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `consultas` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `contactos` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `diasdisponiveis` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `entidadessistema` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `horasdisponiveis` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `mensagens` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `minhasconexoes` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `notificacoes` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `partilha` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `pedidodeconexao` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `publicacoes` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `reacoes` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `seguidores` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `usuarios` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `videocall` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `tipo_Da_Consulta` to the `Especialistas` table without a default value. This is not possible if the table is not empty.
  - Made the column `entidadeID` on table `especialistas` required. This step will fail if there are existing NULL values in that column.

*/
-- DropIndex
DROP INDEX `Especialistas_entidadeID_fkey` ON `especialistas`;

-- AlterTable
ALTER TABLE `especialistas` DROP COLUMN `bloqueado`,
    DROP COLUMN `tipo_De_Consulta`,
    DROP COLUMN `valor`,
    ADD COLUMN `tipo_Da_Consulta` VARCHAR(191) NOT NULL,
    MODIFY `entidadeID` VARCHAR(191) NOT NULL;

-- DropTable
DROP TABLE `comentarios`;

-- DropTable
DROP TABLE `consultas`;

-- DropTable
DROP TABLE `contactos`;

-- DropTable
DROP TABLE `diasdisponiveis`;

-- DropTable
DROP TABLE `entidadessistema`;

-- DropTable
DROP TABLE `horasdisponiveis`;

-- DropTable
DROP TABLE `mensagens`;

-- DropTable
DROP TABLE `minhasconexoes`;

-- DropTable
DROP TABLE `notificacoes`;

-- DropTable
DROP TABLE `partilha`;

-- DropTable
DROP TABLE `pedidodeconexao`;

-- DropTable
DROP TABLE `publicacoes`;

-- DropTable
DROP TABLE `reacoes`;

-- DropTable
DROP TABLE `seguidores`;

-- DropTable
DROP TABLE `usuarios`;

-- DropTable
DROP TABLE `videocall`;

-- CreateTable
CREATE TABLE `Entidades` (
    `id` VARCHAR(191) NOT NULL,
    `name` VARCHAR(191) NOT NULL,
    `cnpj` VARCHAR(191) NOT NULL,
    `type` VARCHAR(191) NOT NULL,
    `email` VARCHAR(191) NOT NULL,
    `id_endereco` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `Entidades_name_key`(`name`),
    UNIQUE INDEX `Entidades_cnpj_key`(`cnpj`),
    UNIQUE INDEX `Entidades_email_key`(`email`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `contacto` (
    `id` VARCHAR(191) NOT NULL,
    `numero` VARCHAR(191) NOT NULL,
    `id_entitie` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `contacto_numero_key`(`numero`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Entidades` ADD CONSTRAINT `Entidades_id_endereco_fkey` FOREIGN KEY (`id_endereco`) REFERENCES `endereco`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Especialistas` ADD CONSTRAINT `Especialistas_entidadeID_fkey` FOREIGN KEY (`entidadeID`) REFERENCES `Entidades`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `contacto` ADD CONSTRAINT `contacto_id_entitie_fkey` FOREIGN KEY (`id_entitie`) REFERENCES `Entidades`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
