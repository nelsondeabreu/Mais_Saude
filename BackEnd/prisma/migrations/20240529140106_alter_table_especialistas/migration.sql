-- DropIndex
DROP INDEX `contacto_id_entitie_fkey` ON `contacto`;

-- DropIndex
DROP INDEX `Entidades_id_endereco_fkey` ON `entidades`;

-- DropIndex
DROP INDEX `Especialistas_entidadeID_fkey` ON `especialistas`;

-- AlterTable
ALTER TABLE `especialistas` MODIFY `entidadeID` VARCHAR(191) NULL;

-- AddForeignKey
ALTER TABLE `Entidades` ADD CONSTRAINT `Entidades_id_endereco_fkey` FOREIGN KEY (`id_endereco`) REFERENCES `endereco`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Especialistas` ADD CONSTRAINT `Especialistas_entidadeID_fkey` FOREIGN KEY (`entidadeID`) REFERENCES `Entidades`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `contacto` ADD CONSTRAINT `contacto_id_entitie_fkey` FOREIGN KEY (`id_entitie`) REFERENCES `Entidades`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
