-- MariaDB dump 10.19  Distrib 10.4.24-MariaDB, for Win64 (AMD64)
--
-- Host: localhost    Database: tcc
-- ------------------------------------------------------
-- Server version	10.4.24-MariaDB

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `aluno`
--

DROP TABLE IF EXISTS `aluno`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `aluno` (
  `id_aluno` int(11) NOT NULL AUTO_INCREMENT,
  `nome_aluno` varchar(100) DEFAULT NULL,
  `data_nacimento` date DEFAULT NULL,
  `idade` int(11) DEFAULT NULL,
  `login` varchar(150) DEFAULT NULL,
  `senha` int(11) DEFAULT NULL,
  PRIMARY KEY (`id_aluno`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `aluno`
--

LOCK TABLES `aluno` WRITE;
/*!40000 ALTER TABLE `aluno` DISABLE KEYS */;
INSERT INTO `aluno` VALUES (2,'Erick','2022-04-08',NULL,'erick@erick',3456);
/*!40000 ALTER TABLE `aluno` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `aluno_modulos`
--

DROP TABLE IF EXISTS `aluno_modulos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `aluno_modulos` (
  `id_aluno_modulos` int(11) NOT NULL AUTO_INCREMENT,
  `fk_modulos` int(11) NOT NULL,
  `fk_aluno_` int(11) NOT NULL,
  PRIMARY KEY (`id_aluno_modulos`),
  KEY `fk_modulo` (`fk_modulos`),
  KEY `fk_aluno_` (`fk_aluno_`),
  CONSTRAINT `fk_aluno_` FOREIGN KEY (`fk_aluno_`) REFERENCES `aluno` (`id_aluno`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `fk_modulo` FOREIGN KEY (`fk_modulos`) REFERENCES `modulos` (`id_modulos`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `aluno_modulos`
--

LOCK TABLES `aluno_modulos` WRITE;
/*!40000 ALTER TABLE `aluno_modulos` DISABLE KEYS */;
INSERT INTO `aluno_modulos` VALUES (1,0,2);
/*!40000 ALTER TABLE `aluno_modulos` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `aluno_pais`
--

DROP TABLE IF EXISTS `aluno_pais`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `aluno_pais` (
  `id_aluno_pais` int(11) NOT NULL AUTO_INCREMENT,
  `fk_aluno` int(11) NOT NULL,
  `fk_responsavel` int(11) NOT NULL,
  PRIMARY KEY (`id_aluno_pais`),
  KEY `fk_responsavel` (`fk_responsavel`),
  KEY `fk_aluno` (`fk_aluno`),
  CONSTRAINT `fk_aluno` FOREIGN KEY (`fk_aluno`) REFERENCES `aluno` (`id_aluno`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `fk_responsavel` FOREIGN KEY (`fk_responsavel`) REFERENCES `responsavel` (`id_responsavel`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `aluno_pais`
--

LOCK TABLES `aluno_pais` WRITE;
/*!40000 ALTER TABLE `aluno_pais` DISABLE KEYS */;
INSERT INTO `aluno_pais` VALUES (1,2,4);
/*!40000 ALTER TABLE `aluno_pais` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `disciplinas`
--

DROP TABLE IF EXISTS `disciplinas`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `disciplinas` (
  `id_disciplinas` int(11) NOT NULL AUTO_INCREMENT,
  `nome_disciplinas` varchar(30) DEFAULT NULL,
  `fk_modulos` int(11) NOT NULL,
  PRIMARY KEY (`id_disciplinas`),
  KEY `fk_modulo_` (`fk_modulos`),
  CONSTRAINT `fk_modulo_` FOREIGN KEY (`fk_modulos`) REFERENCES `modulos` (`id_modulos`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `disciplinas`
--

LOCK TABLES `disciplinas` WRITE;
/*!40000 ALTER TABLE `disciplinas` DISABLE KEYS */;
/*!40000 ALTER TABLE `disciplinas` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `modulos`
--

DROP TABLE IF EXISTS `modulos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `modulos` (
  `id_modulos` int(11) NOT NULL AUTO_INCREMENT,
  `nome_modulo` varchar(30) DEFAULT NULL,
  `data_inicio` int(11) DEFAULT NULL,
  PRIMARY KEY (`id_modulos`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `modulos`
--

LOCK TABLES `modulos` WRITE;
/*!40000 ALTER TABLE `modulos` DISABLE KEYS */;
INSERT INTO `modulos` VALUES (0,'matematica',23);
/*!40000 ALTER TABLE `modulos` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `responsavel`
--

DROP TABLE IF EXISTS `responsavel`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `responsavel` (
  `id_responsavel` int(11) NOT NULL AUTO_INCREMENT,
  `nome_responsavel0` varchar(100) DEFAULT NULL,
  `nome_responsavel1` varchar(100) DEFAULT NULL,
  `endereco` varchar(150) DEFAULT NULL,
  `contato0` int(11) DEFAULT NULL,
  `contato1` int(11) DEFAULT NULL,
  PRIMARY KEY (`id_responsavel`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `responsavel`
--

LOCK TABLES `responsavel` WRITE;
/*!40000 ALTER TABLE `responsavel` DISABLE KEYS */;
INSERT INTO `responsavel` VALUES (4,'lucineia','zaqueu','rua tat',998,997);
/*!40000 ALTER TABLE `responsavel` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-04-18 16:57:37
