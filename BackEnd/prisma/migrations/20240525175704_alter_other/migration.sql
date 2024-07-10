-- DropIndex
DROP INDEX `Especialistas_entidadeID_fkey` ON `especialistas`;

-- AddForeignKey
ALTER TABLE `especialistas` ADD CONSTRAINT `especialistas_entidadeID_fkey` FOREIGN KEY (`entidadeID`) REFERENCES `entidadessistema`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
