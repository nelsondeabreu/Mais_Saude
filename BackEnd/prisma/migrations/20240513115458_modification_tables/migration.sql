/*
  Warnings:

  - Added the required column `postID` to the `Notificacoes` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX `Comentarios_autorId_fkey` ON `comentarios`;

-- DropIndex
DROP INDEX `Comentarios_postId_fkey` ON `comentarios`;

-- DropIndex
DROP INDEX `Consultas_especialistaID_fkey` ON `consultas`;

-- DropIndex
DROP INDEX `Consultas_pacienteID_fkey` ON `consultas`;

-- DropIndex
DROP INDEX `Contactos_entidadeID_fkey` ON `contactos`;

-- DropIndex
DROP INDEX `Contactos_usuarioID_fkey` ON `contactos`;

-- DropIndex
DROP INDEX `DiasDisponiveis_especialistaID_fkey` ON `diasdisponiveis`;

-- DropIndex
DROP INDEX `EntidadesSistema_enderecoID_fkey` ON `entidadessistema`;

-- DropIndex
DROP INDEX `Especialistas_entidadeID_fkey` ON `especialistas`;

-- DropIndex
DROP INDEX `HorasDisponiveis_diasDisponiveisID_fkey` ON `horasdisponiveis`;

-- DropIndex
DROP INDEX `HorasDisponiveis_especialistaID_fkey` ON `horasdisponiveis`;

-- DropIndex
DROP INDEX `Mensagens_emissorID_fkey` ON `mensagens`;

-- DropIndex
DROP INDEX `Mensagens_receptorID_fkey` ON `mensagens`;

-- DropIndex
DROP INDEX `MinhasConexoes_friendID_fkey` ON `minhasconexoes`;

-- DropIndex
DROP INDEX `MinhasConexoes_userID_fkey` ON `minhasconexoes`;

-- DropIndex
DROP INDEX `Notificacoes_consultaID_fkey` ON `notificacoes`;

-- DropIndex
DROP INDEX `Notificacoes_destinatarioID_fkey` ON `notificacoes`;

-- DropIndex
DROP INDEX `Notificacoes_usuarioID_fkey` ON `notificacoes`;

-- DropIndex
DROP INDEX `PacientesEspecialistas_especialistaId_fkey` ON `pacientesespecialistas`;

-- DropIndex
DROP INDEX `PedidoDeConexao_destinatarioID_fkey` ON `pedidodeconexao`;

-- DropIndex
DROP INDEX `PedidoDeConexao_userID_fkey` ON `pedidodeconexao`;

-- DropIndex
DROP INDEX `Publicacoes_usuarioID_fkey` ON `publicacoes`;

-- DropIndex
DROP INDEX `Reacoes_postId_fkey` ON `reacoes`;

-- DropIndex
DROP INDEX `Reacoes_userId_fkey` ON `reacoes`;

-- DropIndex
DROP INDEX `Seguidores_entidadeID_fkey` ON `seguidores`;

-- DropIndex
DROP INDEX `Seguidores_seguidorID_fkey` ON `seguidores`;

-- AlterTable
ALTER TABLE `mensagens` ADD COLUMN `visto` VARCHAR(191) NULL;

-- AlterTable
ALTER TABLE `notificacoes` ADD COLUMN `postID` VARCHAR(191) NOT NULL,
    ADD COLUMN `visto` VARCHAR(191) NULL;

-- AddForeignKey
ALTER TABLE `EntidadesSistema` ADD CONSTRAINT `EntidadesSistema_enderecoID_fkey` FOREIGN KEY (`enderecoID`) REFERENCES `Endereco`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Contactos` ADD CONSTRAINT `Contactos_entidadeID_fkey` FOREIGN KEY (`entidadeID`) REFERENCES `EntidadesSistema`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Contactos` ADD CONSTRAINT `Contactos_usuarioID_fkey` FOREIGN KEY (`usuarioID`) REFERENCES `Usuarios`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Especialistas` ADD CONSTRAINT `Especialistas_entidadeID_fkey` FOREIGN KEY (`entidadeID`) REFERENCES `EntidadesSistema`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `PacientesEspecialistas` ADD CONSTRAINT `PacientesEspecialistas_pacienteId_fkey` FOREIGN KEY (`pacienteId`) REFERENCES `Usuarios`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `PacientesEspecialistas` ADD CONSTRAINT `PacientesEspecialistas_especialistaId_fkey` FOREIGN KEY (`especialistaId`) REFERENCES `Especialistas`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

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
