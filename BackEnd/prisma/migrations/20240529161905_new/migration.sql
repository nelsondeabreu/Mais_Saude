/*
  Warnings:

  - You are about to drop the column `tipo_Da_Consulta` on the `especialistas` table. All the data in the column will be lost.
  - You are about to drop the `contacto` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `entidades` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `tipo_De_Consulta` to the `Especialistas` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX `Especialistas_entidadeID_fkey` ON `especialistas`;

-- AlterTable
ALTER TABLE `especialistas` DROP COLUMN `tipo_Da_Consulta`,
    ADD COLUMN `bloqueado` VARCHAR(191) NULL,
    ADD COLUMN `tipo_De_Consulta` VARCHAR(191) NOT NULL,
    ADD COLUMN `valor` VARCHAR(191) NULL;

-- DropTable
DROP TABLE `contacto`;

-- DropTable
DROP TABLE `entidades`;

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

-- CreateTable
CREATE TABLE `Contactos` (
    `id` VARCHAR(191) NOT NULL,
    `contacto` VARCHAR(191) NOT NULL,
    `entidadeID` VARCHAR(191) NOT NULL,
    `usuarioID` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Usuarios` (
    `id` VARCHAR(191) NOT NULL,
    `name` VARCHAR(191) NOT NULL,
    `email` VARCHAR(191) NOT NULL,
    `crm` VARCHAR(191) NULL,
    `cnpj` VARCHAR(191) NULL,
    `foto` VARCHAR(191) NULL,
    `senha` VARCHAR(191) NOT NULL,
    `sobre` VARCHAR(191) NULL,
    `sexo` ENUM('Masculino', 'Feminino') NOT NULL,
    `socketID` VARCHAR(191) NULL,
    `nascimento` DATETIME(3) NOT NULL,

    UNIQUE INDEX `Usuarios_email_key`(`email`),
    UNIQUE INDEX `Usuarios_crm_key`(`crm`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Publicacoes` (
    `id` VARCHAR(191) NOT NULL,
    `conteudo` VARCHAR(191) NOT NULL,
    `foto` VARCHAR(191) NULL,
    `video` VARCHAR(191) NULL,
    `data` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,
    `usuarioID` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Comentarios` (
    `id` VARCHAR(191) NOT NULL,
    `postId` VARCHAR(191) NOT NULL,
    `autorId` VARCHAR(191) NOT NULL,
    `conteudo` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Reacoes` (
    `id` VARCHAR(191) NOT NULL,
    `postId` VARCHAR(191) NOT NULL,
    `userId` VARCHAR(191) NOT NULL,
    `type` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Notificacoes` (
    `id` VARCHAR(191) NOT NULL,
    `data` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `usuarioID` VARCHAR(191) NOT NULL,
    `destinatarioID` VARCHAR(191) NOT NULL,
    `consultaID` VARCHAR(191) NOT NULL,
    `postID` VARCHAR(191) NOT NULL,
    `tipo` VARCHAR(191) NOT NULL,
    `visto` VARCHAR(191) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Seguidores` (
    `id` VARCHAR(191) NOT NULL,
    `seguidorID` VARCHAR(191) NOT NULL,
    `entidadeID` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Mensagens` (
    `id` VARCHAR(191) NOT NULL,
    `conteudo` VARCHAR(191) NULL,
    `foto` VARCHAR(191) NULL,
    `video` VARCHAR(191) NULL,
    `arquivo` VARCHAR(191) NULL,
    `data` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `emissorID` VARCHAR(191) NOT NULL,
    `receptorID` VARCHAR(191) NOT NULL,
    `visto` BOOLEAN NOT NULL DEFAULT false,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `DiasDisponiveis` (
    `id` VARCHAR(191) NOT NULL,
    `date` DATETIME(3) NOT NULL,
    `especialistaID` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `HorasDisponiveis` (
    `id` VARCHAR(191) NOT NULL,
    `hora` VARCHAR(191) NOT NULL,
    `diasDisponiveisID` VARCHAR(191) NOT NULL,
    `especialistaID` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Consultas` (
    `id` VARCHAR(191) NOT NULL,
    `tipo_Da_Consulta` VARCHAR(191) NOT NULL,
    `data` DATETIME(3) NOT NULL,
    `hora` VARCHAR(191) NOT NULL,
    `especialistaID` VARCHAR(191) NOT NULL,
    `status` ENUM('Marcada', 'Realizada', 'NRealizada', 'Cancelada') NOT NULL,
    `pacienteID` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `VideoCall` (
    `id` VARCHAR(191) NOT NULL,
    `emissor` VARCHAR(191) NOT NULL,
    `destinatario` VARCHAR(191) NOT NULL,
    `offer` JSON NULL,
    `answer` JSON NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `MinhasConexoes` (
    `id` VARCHAR(191) NOT NULL,
    `userID` VARCHAR(191) NOT NULL,
    `friendID` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `PedidoDeConexao` (
    `id` VARCHAR(191) NOT NULL,
    `userID` VARCHAR(191) NOT NULL,
    `destinatarioID` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Partilha` (
    `id` VARCHAR(191) NOT NULL,
    `userID` VARCHAR(191) NOT NULL,
    `createPostShareID` VARCHAR(191) NOT NULL,
    `postShareID` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `EntidadesSistema` ADD CONSTRAINT `EntidadesSistema_enderecoID_fkey` FOREIGN KEY (`enderecoID`) REFERENCES `Endereco`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Contactos` ADD CONSTRAINT `Contactos_entidadeID_fkey` FOREIGN KEY (`entidadeID`) REFERENCES `EntidadesSistema`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Contactos` ADD CONSTRAINT `Contactos_usuarioID_fkey` FOREIGN KEY (`usuarioID`) REFERENCES `Usuarios`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Especialistas` ADD CONSTRAINT `Especialistas_entidadeID_fkey` FOREIGN KEY (`entidadeID`) REFERENCES `EntidadesSistema`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Publicacoes` ADD CONSTRAINT `Publicacoes_usuarioID_fkey` FOREIGN KEY (`usuarioID`) REFERENCES `Usuarios`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Comentarios` ADD CONSTRAINT `Comentarios_postId_fkey` FOREIGN KEY (`postId`) REFERENCES `Publicacoes`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Comentarios` ADD CONSTRAINT `Comentarios_autorId_fkey` FOREIGN KEY (`autorId`) REFERENCES `Usuarios`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Reacoes` ADD CONSTRAINT `Reacoes_postId_fkey` FOREIGN KEY (`postId`) REFERENCES `Publicacoes`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Reacoes` ADD CONSTRAINT `Reacoes_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `Usuarios`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Notificacoes` ADD CONSTRAINT `Notificacoes_usuarioID_fkey` FOREIGN KEY (`usuarioID`) REFERENCES `Usuarios`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Notificacoes` ADD CONSTRAINT `Notificacoes_destinatarioID_fkey` FOREIGN KEY (`destinatarioID`) REFERENCES `Usuarios`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Notificacoes` ADD CONSTRAINT `Notificacoes_postID_fkey` FOREIGN KEY (`postID`) REFERENCES `Publicacoes`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Notificacoes` ADD CONSTRAINT `Notificacoes_consultaID_fkey` FOREIGN KEY (`consultaID`) REFERENCES `Consultas`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Seguidores` ADD CONSTRAINT `Seguidores_seguidorID_fkey` FOREIGN KEY (`seguidorID`) REFERENCES `Usuarios`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Seguidores` ADD CONSTRAINT `Seguidores_entidadeID_fkey` FOREIGN KEY (`entidadeID`) REFERENCES `EntidadesSistema`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Mensagens` ADD CONSTRAINT `Mensagens_emissorID_fkey` FOREIGN KEY (`emissorID`) REFERENCES `Usuarios`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Mensagens` ADD CONSTRAINT `Mensagens_receptorID_fkey` FOREIGN KEY (`receptorID`) REFERENCES `Usuarios`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `DiasDisponiveis` ADD CONSTRAINT `DiasDisponiveis_especialistaID_fkey` FOREIGN KEY (`especialistaID`) REFERENCES `Especialistas`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `HorasDisponiveis` ADD CONSTRAINT `HorasDisponiveis_diasDisponiveisID_fkey` FOREIGN KEY (`diasDisponiveisID`) REFERENCES `DiasDisponiveis`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `HorasDisponiveis` ADD CONSTRAINT `HorasDisponiveis_especialistaID_fkey` FOREIGN KEY (`especialistaID`) REFERENCES `Especialistas`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Consultas` ADD CONSTRAINT `Consultas_especialistaID_fkey` FOREIGN KEY (`especialistaID`) REFERENCES `Especialistas`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Consultas` ADD CONSTRAINT `Consultas_pacienteID_fkey` FOREIGN KEY (`pacienteID`) REFERENCES `Usuarios`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `MinhasConexoes` ADD CONSTRAINT `MinhasConexoes_userID_fkey` FOREIGN KEY (`userID`) REFERENCES `Usuarios`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `MinhasConexoes` ADD CONSTRAINT `MinhasConexoes_friendID_fkey` FOREIGN KEY (`friendID`) REFERENCES `Usuarios`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `PedidoDeConexao` ADD CONSTRAINT `PedidoDeConexao_userID_fkey` FOREIGN KEY (`userID`) REFERENCES `Usuarios`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `PedidoDeConexao` ADD CONSTRAINT `PedidoDeConexao_destinatarioID_fkey` FOREIGN KEY (`destinatarioID`) REFERENCES `Usuarios`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Partilha` ADD CONSTRAINT `Partilha_userID_fkey` FOREIGN KEY (`userID`) REFERENCES `Usuarios`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Partilha` ADD CONSTRAINT `Partilha_postShareID_fkey` FOREIGN KEY (`postShareID`) REFERENCES `Publicacoes`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Partilha` ADD CONSTRAINT `Partilha_createPostShareID_fkey` FOREIGN KEY (`createPostShareID`) REFERENCES `Publicacoes`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
