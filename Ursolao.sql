/* SQL Manager for MySQL                              5.7.2.52112 */
/* -------------------------------------------------------------- */
/* Host     : localhost                                           */
/* Port     : 3306                                                */
/* Database : Ursolao                                             */


DROP DATABASE IF EXISTS `Ursolao`;

CREATE DATABASE `Ursolao`
    CHARACTER SET 'utf8mb4'
    COLLATE 'utf8mb4_general_ci';

USE `Ursolao`;

/* Dropping database objects */

DROP TABLE IF EXISTS `lendings_items`;
DROP TABLE IF EXISTS `lendings_evaluation`;
DROP TABLE IF EXISTS `lendings`;
DROP TABLE IF EXISTS `history`;
DROP TABLE IF EXISTS `routines`;
DROP TABLE IF EXISTS `items`;
DROP TABLE IF EXISTS `clients_items`;
DROP TABLE IF EXISTS `clients`;
DROP TABLE IF EXISTS `categories_items`;
DROP TABLE IF EXISTS `status`;

/* Structure for the `status` table : */

CREATE TABLE `status` (
  `sta_code` VARCHAR(3) COLLATE utf8mb4_general_ci NOT NULL COMMENT 'codigo do status',
  `sta_descr` VARCHAR(30) COLLATE utf8mb4_general_ci NOT NULL COMMENT 'descricao do status',
  PRIMARY KEY USING BTREE (`sta_code`),
  KEY `sta_code` USING BTREE (`sta_code`)
) ENGINE=InnoDB
ROW_FORMAT=DYNAMIC CHARACTER SET 'utf8mb4' COLLATE 'utf8mb4_general_ci'
;

/* Structure for the `categories_items` table : */

CREATE TABLE `categories_items` (
  `cai_code` INTEGER(11) NOT NULL AUTO_INCREMENT COMMENT 'codigo da categoria do item',
  `cai_descr` VARCHAR(60) COLLATE utf8mb4_general_ci NOT NULL COMMENT 'descricao da categoria do item',
  `sta_code` VARCHAR(3) COLLATE utf8mb4_general_ci NOT NULL COMMENT 'codigo de status da categoria',
  PRIMARY KEY USING BTREE (`cai_code`),
  KEY `categories_items_fk1` USING BTREE (`sta_code`),
  CONSTRAINT `categories_items_fk1` FOREIGN KEY (`sta_code`) REFERENCES `status` (`sta_code`)
) ENGINE=InnoDB
ROW_FORMAT=DYNAMIC CHARACTER SET 'utf8mb4' COLLATE 'utf8mb4_general_ci'
;

/* Structure for the `clients` table : */

CREATE TABLE `clients` (
  `cli_code` INTEGER(11) NOT NULL AUTO_INCREMENT COMMENT 'código do cliente',
  `cli_name` VARCHAR(60) COLLATE utf8mb4_general_ci NOT NULL COMMENT 'nome do cliente',
  `cli_email` VARCHAR(60) COLLATE utf8mb4_general_ci NOT NULL COMMENT 'email do cliente',
  `cli_password` VARCHAR(10) COLLATE utf8mb4_general_ci NOT NULL COMMENT 'senha de acesso do cliente',
  `cli_countrycode` INTEGER(11) NOT NULL DEFAULT 55 COMMENT 'código DDI do telefone do cliente',
  `cli_areacode` INTEGER(11) NOT NULL COMMENT 'código DDD do telefone do cliente',
  `cli_telephone` INTEGER(11) NOT NULL COMMENT 'numero de telefone do cliente',
  `cli_zipcode` INTEGER(11) NOT NULL COMMENT 'cep do cliente',
  `cli_reputation` INTEGER(11) DEFAULT 0 COMMENT 'reputação do cliente ; qtde de ursoladas',
  `cli_lastlogin` DATETIME DEFAULT NULL COMMENT 'data e hora do último acesso',
  PRIMARY KEY USING BTREE (`cli_code`),
  UNIQUE KEY `cli_code` USING BTREE (`cli_code`)
) ENGINE=InnoDB
ROW_FORMAT=DYNAMIC CHARACTER SET 'utf8mb4' COLLATE 'utf8mb4_general_ci'
;

/* Structure for the `items` table : */

CREATE TABLE `items` (
  `itm_code` INTEGER(11) NOT NULL AUTO_INCREMENT COMMENT 'codigo do item',
  `itm_title` VARCHAR(60) COLLATE utf8mb4_general_ci NOT NULL COMMENT 'titulo do item',
  `itm_descr` TEXT COLLATE utf8mb4_general_ci COMMENT 'descricao do item',
  `itm_photo` VARCHAR(250) COLLATE utf8mb4_general_ci DEFAULT NULL COMMENT 'foto do item',
  `cai_code` INTEGER(11) NOT NULL COMMENT 'codigo da categoria do item',
  PRIMARY KEY USING BTREE (`itm_code`),
  KEY `items_fk1` USING BTREE (`cai_code`),
  CONSTRAINT `items_fk1` FOREIGN KEY (`cai_code`) REFERENCES `categories_items` (`cai_code`)
) ENGINE=InnoDB
ROW_FORMAT=DYNAMIC CHARACTER SET 'utf8mb4' COLLATE 'utf8mb4_general_ci'
;

/* Structure for the `clients_items` table : */

CREATE TABLE `clients_items` (
  `cli_code` INTEGER(11) NOT NULL COMMENT 'código do cliente',
  `itm_code` INTEGER(11) NOT NULL COMMENT 'coódigo do item',
  `sta_code` VARCHAR(3) COLLATE utf8mb4_general_ci NOT NULL COMMENT 'codigo de status do item associado ao cliente',
  PRIMARY KEY USING BTREE (`cli_code`, `itm_code`),
  KEY `cli_code` USING BTREE (`cli_code`),
  KEY `clients_items_fk2` USING BTREE (`itm_code`),
  KEY `clients_items_fk3` USING BTREE (`sta_code`),
  CONSTRAINT `clients_items_fk1` FOREIGN KEY (`cli_code`) REFERENCES `clients` (`cli_code`),
  CONSTRAINT `clients_items_fk2` FOREIGN KEY (`itm_code`) REFERENCES `items` (`itm_code`),
  CONSTRAINT `clients_items_fk3` FOREIGN KEY (`sta_code`) REFERENCES `status` (`sta_code`)
) ENGINE=InnoDB
ROW_FORMAT=DYNAMIC CHARACTER SET 'utf8mb4' COLLATE 'utf8mb4_general_ci'
;

/* Structure for the `routines` table : */

CREATE TABLE `routines` (
  `rou_code` VARCHAR(10) COLLATE utf8mb4_general_ci NOT NULL COMMENT 'codigo da rotina',
  `rou_descr` VARCHAR(60) COLLATE utf8mb4_general_ci NOT NULL COMMENT 'descricao da rotina',
  PRIMARY KEY USING BTREE (`rou_code`)
) ENGINE=InnoDB
ROW_FORMAT=DYNAMIC CHARACTER SET 'utf8mb4' COLLATE 'utf8mb4_general_ci'
;

/* Structure for the `history` table : */

CREATE TABLE `history` (
  `his_datetime` DATETIME DEFAULT NULL COMMENT 'data e hora do log',
  `cli_code` INTEGER(11) NOT NULL COMMENT 'codigo do cliente',
  `rou_code` VARCHAR(3) COLLATE utf8mb4_general_ci NOT NULL COMMENT 'codigo da rotina',
  `his_descr` VARCHAR(150) COLLATE utf8mb4_general_ci NOT NULL COMMENT 'descricao da ocorrencia',
  KEY `history_fk1` USING BTREE (`cli_code`),
  KEY `history_fk2` USING BTREE (`rou_code`),
  CONSTRAINT `history_fk1` FOREIGN KEY (`cli_code`) REFERENCES `clients` (`cli_code`),
  CONSTRAINT `history_fk2` FOREIGN KEY (`rou_code`) REFERENCES `routines` (`rou_code`)
) ENGINE=InnoDB
ROW_FORMAT=DYNAMIC CHARACTER SET 'utf8mb4' COLLATE 'utf8mb4_general_ci'
;

/* Structure for the `lendings` table : */

CREATE TABLE `lendings` (
  `lnd_code` INTEGER(11) NOT NULL AUTO_INCREMENT COMMENT 'codigo do emprestimo',
  `lnd_cliowner` INTEGER(11) NOT NULL COMMENT 'codigo do cliente proprietario',
  `lnd_clirequester` INTEGER(11) NOT NULL COMMENT 'codigo do cliente solicitante',
  `lnd_startdate` DATETIME NOT NULL COMMENT 'data de inicio do emprestimo',
  `lnd_enddate` DATETIME NOT NULL COMMENT 'data de termino do emprestimo',
  `lnd_grntmrg` FLOAT NOT NULL COMMENT 'margem de garantia do emprestimo',
  `sta_code` VARCHAR(3) COLLATE utf8mb4_general_ci NOT NULL COMMENT 'codigo de status do emprestimo',
  PRIMARY KEY USING BTREE (`lnd_code`),
  KEY `lendings_fk1` USING BTREE (`lnd_cliowner`),
  KEY `lendings_fk2` USING BTREE (`lnd_clirequester`),
  KEY `lendings_fk3` USING BTREE (`sta_code`),
  CONSTRAINT `lendings_fk1` FOREIGN KEY (`lnd_cliowner`) REFERENCES `clients` (`cli_code`),
  CONSTRAINT `lendings_fk2` FOREIGN KEY (`lnd_clirequester`) REFERENCES `clients` (`cli_code`),
  CONSTRAINT `lendings_fk3` FOREIGN KEY (`sta_code`) REFERENCES `status` (`sta_code`)
) ENGINE=InnoDB
ROW_FORMAT=DYNAMIC CHARACTER SET 'utf8mb4' COLLATE 'utf8mb4_general_ci'
;

/* Structure for the `lendings_evaluation` table : */

CREATE TABLE `lendings_evaluation` (
  `lnd_code` INTEGER(11) NOT NULL COMMENT 'codigo do emprestimo',
  `cli_code` INTEGER(11) NOT NULL COMMENT 'codigo do cliente',
  `lnd_rating` INTEGER(11) NOT NULL COMMENT 'classificacao da avaliacao',
  `lnd_evaluation` TEXT COLLATE utf8mb4_general_ci NOT NULL COMMENT 'descricao da avaliacao',
  `lnd_evaluationdate` DATETIME NOT NULL COMMENT 'data da avaliacao',
  KEY `lendings_evaluation_fk1` USING BTREE (`lnd_code`),
  KEY `lendings_evaluation_fk2` USING BTREE (`cli_code`),
  CONSTRAINT `lendings_evaluation_fk1` FOREIGN KEY (`lnd_code`) REFERENCES `lendings` (`lnd_code`),
  CONSTRAINT `lendings_evaluation_fk2` FOREIGN KEY (`cli_code`) REFERENCES `clients` (`cli_code`)
) ENGINE=InnoDB
ROW_FORMAT=DYNAMIC CHARACTER SET 'utf8mb4' COLLATE 'utf8mb4_general_ci'
;

/* Structure for the `lendings_items` table : */

CREATE TABLE `lendings_items` (
  `lnd_code` INTEGER(11) NOT NULL COMMENT 'codigo do emprestimo',
  `itm_code` INTEGER(11) NOT NULL COMMENT 'codigo do item',
  `sta_code` VARCHAR(3) COLLATE utf8mb4_general_ci NOT NULL COMMENT 'codigo de status do emprsestimo do item',
  KEY `lendings_items_fk1` USING BTREE (`lnd_code`),
  KEY `lendings_items_fk2` USING BTREE (`itm_code`),
  KEY `lendings_items_fk3` USING BTREE (`sta_code`),
  CONSTRAINT `lendings_items_fk1` FOREIGN KEY (`lnd_code`) REFERENCES `lendings` (`lnd_code`),
  CONSTRAINT `lendings_items_fk2` FOREIGN KEY (`itm_code`) REFERENCES `items` (`itm_code`),
  CONSTRAINT `lendings_items_fk3` FOREIGN KEY (`sta_code`) REFERENCES `status` (`sta_code`)
) ENGINE=InnoDB
ROW_FORMAT=DYNAMIC CHARACTER SET 'utf8mb4' COLLATE 'utf8mb4_general_ci'
;
