-- CreateTable
CREATE TABLE `Endereco` (
    `id` VARCHAR(191) NOT NULL,
    `adress` VARCHAR(191) NOT NULL,

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
CREATE TABLE `Especialistas` (
    `id` VARCHAR(191) NOT NULL,
    `nome` VARCHAR(191) NOT NULL,
    `crm` VARCHAR(191) NOT NULL,
    `especialidade` VARCHAR(191) NOT NULL,
    `tipo_De_Consulta` VARCHAR(191) NOT NULL,
    `valor` VARCHAR(191) NULL,
    `sexo` ENUM('Masculino', 'Feminino') NOT NULL,
    `entidadeID` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `Especialistas_crm_key`(`crm`),
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
    `nascimento` DATETIME(3) NOT NULL,

    UNIQUE INDEX `Usuarios_email_key`(`email`),
    UNIQUE INDEX `Usuarios_crm_key`(`crm`),
    UNIQUE INDEX `Usuarios_cnpj_key`(`cnpj`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Publicacoes` (
    `id` VARCHAR(191) NOT NULL,
    `conteudo` VARCHAR(191) NOT NULL,
    `foto` VARCHAR(191) NULL,
    `video` VARCHAR(191) NULL,
    `data` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `usuarioID` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Notificacoes` (
    `id` VARCHAR(191) NOT NULL,
    `data` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `conteudo` VARCHAR(191) NOT NULL,
    `usuarioID` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Mensagens` (
    `id` VARCHAR(191) NOT NULL,
    `conteudo` VARCHAR(191) NOT NULL,
    `data` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `emissorID` VARCHAR(191) NOT NULL,
    `receptorID` VARCHAR(191) NOT NULL,

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
    `nome` VARCHAR(191) NOT NULL,
    `email` VARCHAR(191) NOT NULL,
    `especialistaID` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `EntidadesSistema` ADD CONSTRAINT `EntidadesSistema_enderecoID_fkey` FOREIGN KEY (`enderecoID`) REFERENCES `Endereco`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Contactos` ADD CONSTRAINT `Contactos_entidadeID_fkey` FOREIGN KEY (`entidadeID`) REFERENCES `EntidadesSistema`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Contactos` ADD CONSTRAINT `Contactos_usuarioID_fkey` FOREIGN KEY (`usuarioID`) REFERENCES `Usuarios`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Especialistas` ADD CONSTRAINT `Especialistas_entidadeID_fkey` FOREIGN KEY (`entidadeID`) REFERENCES `EntidadesSistema`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

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
ALTER TABLE `MinhasConexoes` ADD CONSTRAINT `MinhasConexoes_especialistaID_fkey` FOREIGN KEY (`especialistaID`) REFERENCES `Especialistas`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
