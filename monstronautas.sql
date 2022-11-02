CREATE DATABASE monstronautas;
USE monstronautas;

DROP TABLE IF EXISTS `tb_responsavel`;
CREATE TABLE `tb_responsavel` (
  `id_responsavel` int(11) NOT NULL AUTO_INCREMENT,
  `nome_responsavel` varchar(50) NOT NULL,
  `email_responsavel` varchar(50) NOT NULL,
  `senha_responsavel` varchar(35) NOT NULL,
  PRIMARY KEY (`id_responsavel`),
  UNIQUE (`email_responsavel`)
);


DROP TABLE IF EXISTS `tb_alunos`;

CREATE TABLE `tb_alunos` (
  `id_aluno` int(11) NOT NULL AUTO_INCREMENT,
  `nome_aluno` varchar(50) NOT NULL,
  `idade_aluno` int(11) NOT NULL,
  `sexo_aluno` char(1) NOT NULL,
  `aula_atual_aluno` int(11) NOT NULL,
  `fk_id_responsavel` int(11) NOT NULL,
  PRIMARY KEY (`id_aluno`),
  FOREIGN KEY (`fk_id_responsavel`) REFERENCES tb_responsavel(`id_responsavel`)
);

