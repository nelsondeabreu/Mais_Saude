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
DROP INDEX `Notificacoes_usuarioID_fkey` ON `notificacoes`;

-- DropIndex
DROP INDEX `PacientesEspecialistas_especialistaId_fkey` ON `pacientesespecialistas`;

-- DropIndex
DROP INDEX `PedidoDeConexao_destinatarioID_fkey` ON `pedidodeconexao`;

-- DropIndex
DROP INDEX `PedidoDeConexao_userID_fkey` ON `pedidodeconexao`;

-- DropIndex
DROP INDEX `Publicacoes_usuarioID_fkey` ON `publicacoes`;

-- AlterTable
ALTER TABLE `usuarios` MODIFY `socketID` VARCHAR(191) NULL;

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
ALTER TABLE `Notificacoes` ADD CONSTRAINT `Notificacoes_usuarioID_fkey` FOREIGN KEY (`usuarioID`) REFERENCES `Usuarios`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

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
