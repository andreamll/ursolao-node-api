/* SQL Manager for MySQL                              5.7.2.52112 */
/* -------------------------------------------------------------- */
/* Host     : localhost                                           */
/* Port     : 3306                                                */
/* Database : Ursolao                                             */


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES 'utf8' */;

DROP DATABASE IF EXISTS `ursolao`;

CREATE DATABASE `Ursolao`
    CHARACTER SET 'utf8mb4'
    COLLATE 'utf8mb4_general_ci';

USE `ursolao`;

/* Dropping database objects */

DROP PROCEDURE IF EXISTS `spu_status`;
DROP PROCEDURE IF EXISTS `spu_routines`;
DROP PROCEDURE IF EXISTS `spu_lending_items`;
DROP PROCEDURE IF EXISTS `spu_lending_evaluation`;
DROP PROCEDURE IF EXISTS `spu_lendings`;
DROP PROCEDURE IF EXISTS `spu_items`;
DROP PROCEDURE IF EXISTS `spu_clients_items`;
DROP PROCEDURE IF EXISTS `spu_clients`;
DROP PROCEDURE IF EXISTS `spu_categories_items`;
DROP PROCEDURE IF EXISTS `sps_history`;
DROP PROCEDURE IF EXISTS `sps_clients`;
DROP PROCEDURE IF EXISTS `sps_categories_items`;
DROP PROCEDURE IF EXISTS `spi_status`;
DROP PROCEDURE IF EXISTS `spi_routines`;
DROP PROCEDURE IF EXISTS `spi_lending_items`;
DROP PROCEDURE IF EXISTS `spi_lending_evaluation`;
DROP PROCEDURE IF EXISTS `spi_lendings`;
DROP PROCEDURE IF EXISTS `spi_items`;
DROP PROCEDURE IF EXISTS `spi_history`;
DROP PROCEDURE IF EXISTS `spi_clients_items`;
DROP PROCEDURE IF EXISTS `spi_clients`;
DROP PROCEDURE IF EXISTS `spi_categories_items`;
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

/* Structure for the `clients_items` table : */

CREATE TABLE `clients_items` (
  `cli_code` INTEGER(11) NOT NULL COMMENT 'código do cliente',
  `itm_code` INTEGER(11) NOT NULL COMMENT 'coódigo do item',
  `sta_code` VARCHAR(3) COLLATE utf8mb4_general_ci NOT NULL COMMENT 'codigo de status do item associado ao cliente',
  PRIMARY KEY USING BTREE (`cli_code`, `itm_code`),
  KEY `cli_code` USING BTREE (`cli_code`),
  KEY `clients_items_fk2` USING BTREE (`itm_code`),
  KEY `clients_items_fk3` USING BTREE (`sta_code`),
  CONSTRAINT `clients_items_fk1` FOREIGN KEY (`cli_code`) REFERENCES `clients_items` (`cli_code`),
  CONSTRAINT `clients_items_fk2` FOREIGN KEY (`itm_code`) REFERENCES `items` (`itm_code`),
  CONSTRAINT `clients_items_fk3` FOREIGN KEY (`sta_code`) REFERENCES `status` (`sta_code`)
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

/* Definition for the `spi_categories_items` procedure : */

DELIMITER $$

CREATE DEFINER = 'root'@'localhost' PROCEDURE `spi_categories_items`(
        IN `param_cai_code` INTEGER(11),
        IN `param_cai_descr` VARCHAR(60),
        IN `param_sta_code` VARCHAR(3)
    )
    NOT DETERMINISTIC
    CONTAINS SQL
    SQL SECURITY DEFINER
    COMMENT ''
BEGIN
  INSERT INTO
    `categories_items`
  (
    `cai_code`,
    `cai_descr`,
    `sta_code`)
  VALUE (
    param_cai_code,
    param_cai_descr,
    param_sta_code);
END$$

DELIMITER ;

/* Definition for the `spi_clients` procedure : */

DELIMITER $$

CREATE DEFINER = 'root'@'localhost' PROCEDURE `spi_clients`(
        IN `param_cli_code` INTEGER(11),
        IN `param_cli_name` VARCHAR(60),
        IN `param_cli_email` VARCHAR(60),
        IN `param_cli_password` VARCHAR(10),
        IN `param_cli_countrycode` INTEGER(11),
        IN `param_cli_areacode` INTEGER(11),
        IN `param_cli_telephone` INTEGER(11),
        IN `param_cli_zipcode` INTEGER(11),
        IN `param_cli_reputation` INTEGER(11),
        IN `param_cli_lastlogin` DATETIME
    )
    NOT DETERMINISTIC
    CONTAINS SQL
    SQL SECURITY DEFINER
    COMMENT ''
BEGIN
  INSERT INTO
    `clients`
  (
    `cli_code`,
    `cli_name`,
    `cli_email`,
    `cli_password`,
    `cli_countrycode`,
    `cli_areacode`,
    `cli_telephone`,
    `cli_zipcode`,
    `cli_reputation`,
    `cli_lastlogin`)
  VALUE (
    param_cli_code,
    param_cli_name,
    param_cli_email,
    param_cli_password,
    param_cli_countrycode,
    param_cli_areacode,
    param_cli_telephone,
    param_cli_zipcode,
    param_cli_reputation,
    param_cli_lastlogin);
END$$

DELIMITER ;

/* Definition for the `spi_clients_items` procedure : */

DELIMITER $$

CREATE DEFINER = 'root'@'localhost' PROCEDURE `spi_clients_items`(
        IN `param_cli_code` INTEGER(11),
        IN `param_itm_code` INTEGER(11)
    )
    NOT DETERMINISTIC
    CONTAINS SQL
    SQL SECURITY DEFINER
    COMMENT ''
BEGIN
  INSERT INTO
    `clients_items`
  (
    `cli_code`,
    `itm_code`)
  VALUE (
    param_cli_code,
    param_itm_code);
END$$

DELIMITER ;

/* Definition for the `spi_history` procedure : */

DELIMITER $$

CREATE DEFINER = 'root'@'localhost' PROCEDURE `spi_history`(
        IN `param_his_datetime` DATETIME,
        IN `param_cli_code` INTEGER(11),
        IN `param_rou_code` VARCHAR(3),
        IN `param_his_descr` VARCHAR(150)
    )
    NOT DETERMINISTIC
    CONTAINS SQL
    SQL SECURITY DEFINER
    COMMENT ''
BEGIN
  INSERT INTO
    `history`
  (
    `his_datetime`,
    `cli_code`,
    `rou_code`,
    `his_descr`)
  VALUE (
    param_his_datetime,
    param_cli_code,
    param_rou_code,
    param_his_descr);
END$$

DELIMITER ;

/* Definition for the `spi_items` procedure : */

DELIMITER $$

CREATE DEFINER = 'root'@'localhost' PROCEDURE `spi_items`(
        IN `param_itm_code` INTEGER(11),
        IN `param_itm_title` VARCHAR(60),
        IN `param_itm_descr` TEXT,
        IN `param_itm_photo` VARCHAR(250),
        IN `param_cai_code` INTEGER(11)
    )
    NOT DETERMINISTIC
    CONTAINS SQL
    SQL SECURITY DEFINER
    COMMENT ''
BEGIN
  INSERT INTO
    `items`
  (
    `itm_code`,
    `itm_title`,
    `itm_descr`,
    `itm_photo`,
    `cai_code`)
  VALUE (
    param_itm_code,
    param_itm_title,
    param_itm_descr,
    param_itm_photo,
    param_cai_code);
END$$

DELIMITER ;

/* Definition for the `spi_lendings` procedure : */

DELIMITER $$

CREATE DEFINER = 'root'@'localhost' PROCEDURE `spi_lendings`(
        IN `param_lnd_code` INTEGER(11),
        IN `param_lnd_cliowner` INTEGER(11),
        IN `param_lnd_clirequester` INTEGER(11),
        IN `param_lnd_startdate` DATETIME,
        IN `param_lnd_enddate` DATETIME,
        IN `param_lnd_grntmrg` FLOAT,
        IN `param_sta_code` VARCHAR(3)
    )
    NOT DETERMINISTIC
    CONTAINS SQL
    SQL SECURITY DEFINER
    COMMENT ''
BEGIN
  INSERT INTO
    `lendings`
  (
    `lnd_code`,
    `lnd_cliowner`,
    `lnd_clirequester`,
    `lnd_startdate`,
    `lnd_enddate`,
    `lnd_grntmrg`,
    `sta_code`)
  VALUE (
    param_lnd_code,
    param_lnd_cliowner,
    param_lnd_clirequester,
    param_lnd_startdate,
    param_lnd_enddate,
    param_lnd_grntmrg,
    param_sta_code);
END$$

DELIMITER ;

/* Definition for the `spi_lending_evaluation` procedure : */

DELIMITER $$

CREATE DEFINER = 'root'@'localhost' PROCEDURE `spi_lending_evaluation`(
        IN `param_lnd_code` INTEGER(11),
        IN `param_cli_code` INTEGER(11),
        IN `param_lnd_rating` INTEGER(11),
        IN `param_lnd_evaluation` TEXT,
        IN `param_lnd_evaluationdate` DATETIME
    )
    NOT DETERMINISTIC
    CONTAINS SQL
    SQL SECURITY DEFINER
    COMMENT ''
BEGIN
  INSERT INTO
    `lendings_evaluation`
  (
    `lnd_code`,
    `cli_code`,
    `lnd_rating`,
    `lnd_evaluation`,
    `lnd_evaluationdate`)
  VALUE (
    param_lnd_code,
    param_cli_code,
    param_lnd_rating,
    param_lnd_evaluation,
    param_lnd_evaluationdate);
END$$

DELIMITER ;

/* Definition for the `spi_lending_items` procedure : */

DELIMITER $$

CREATE DEFINER = 'root'@'localhost' PROCEDURE `spi_lending_items`(
        IN `param_lnd_code` INTEGER(11),
        IN `param_itm_code` INTEGER(11),
        IN `param_sta_code` VARCHAR(3)
    )
    NOT DETERMINISTIC
    CONTAINS SQL
    SQL SECURITY DEFINER
    COMMENT ''
BEGIN
  INSERT INTO
    `lendings_items`
  (
    `lnd_code`,
    `itm_code`,
    `sta_code`)
  VALUE (
    param_lnd_code,
    param_itm_code,
    param_sta_code);
END$$

DELIMITER ;

/* Definition for the `spi_routines` procedure : */

DELIMITER $$

CREATE DEFINER = 'root'@'localhost' PROCEDURE `spi_routines`(
        IN `param_rou_code` VARCHAR(10),
        IN `param_rou_descr` VARCHAR(60)
    )
    NOT DETERMINISTIC
    CONTAINS SQL
    SQL SECURITY DEFINER
    COMMENT ''
BEGIN
  INSERT INTO
    `routines`
  (
    `rou_code`,
    `rou_descr`)
  VALUE (
    param_rou_code,
    param_rou_descr);
END$$

DELIMITER ;

/* Definition for the `spi_status` procedure : */

DELIMITER $$

CREATE DEFINER = 'root'@'localhost' PROCEDURE `spi_status`(
        IN `param_sta_code` VARCHAR(3),
        IN `param_sta_descr` VARCHAR(30)
    )
    NOT DETERMINISTIC
    CONTAINS SQL
    SQL SECURITY DEFINER
    COMMENT ''
BEGIN
  INSERT INTO
    `status`
  (
    `sta_code`,
    `sta_descr`)
  VALUE (
    param_sta_code,
    param_sta_descr);
END$$

DELIMITER ;

/* Definition for the `sps_categories_items` procedure : */

DELIMITER $$

CREATE DEFINER = 'root'@'localhost' PROCEDURE `sps_categories_items`()
    NOT DETERMINISTIC
    CONTAINS SQL
    SQL SECURITY DEFINER
    COMMENT ''
BEGIN
  SELECT
    `cai_code`,
    `cai_descr`,
    `sta_code`
  FROM
    `categories_items`;
END$$

DELIMITER ;

/* Definition for the `sps_clients` procedure : */

DELIMITER $$

CREATE DEFINER = 'root'@'localhost' PROCEDURE `sps_clients`()
    NOT DETERMINISTIC
    CONTAINS SQL
    SQL SECURITY DEFINER
    COMMENT ''
BEGIN
  SELECT
    `cli_code`,
    `cli_name`,
    `cli_email`,
    `cli_password`,
    `cli_countrycode`,
    `cli_areacode`,
    `cli_telephone`,
    `cli_zipcode`,
    `cli_reputation`,
    `cli_lastlogin`
  FROM
    `clients`;
END$$

DELIMITER ;

/* Definition for the `sps_history` procedure : */

DELIMITER $$

CREATE DEFINER = 'root'@'localhost' PROCEDURE `sps_history`()
    NOT DETERMINISTIC
    CONTAINS SQL
    SQL SECURITY DEFINER
    COMMENT ''
BEGIN
  SELECT
    `his_datetime`,
    `cli_code`,
    `rou_code`,
    `his_descr`
  FROM
    `history`;
END$$

DELIMITER ;

/* Definition for the `spu_categories_items` procedure : */

DELIMITER $$

CREATE DEFINER = 'root'@'localhost' PROCEDURE `spu_categories_items`(
        IN `param_cai_code` INTEGER(11),
        IN `param_cai_descr` VARCHAR(60),
        IN `param_sta_code` VARCHAR(3)
    )
    NOT DETERMINISTIC
    CONTAINS SQL
    SQL SECURITY DEFINER
    COMMENT ''
BEGIN
  UPDATE
    `categories_items`
  SET
    `cai_descr` = param_cai_descr,
    `sta_code` = param_sta_code
  WHERE
    `cai_code` = param_cai_code;
END$$

DELIMITER ;

/* Definition for the `spu_clients` procedure : */

DELIMITER $$

CREATE DEFINER = 'root'@'localhost' PROCEDURE `spu_clients`(
        IN `param_cli_code` INTEGER(11),
        IN `param_cli_name` VARCHAR(60),
        IN `param_cli_email` VARCHAR(60),
        IN `param_cli_password` VARCHAR(10),
        IN `param_cli_countrycode` INTEGER(11),
        IN `param_cli_areacode` INTEGER(11),
        IN `param_cli_telephone` INTEGER(11),
        IN `param_cli_zipcode` INTEGER(11),
        IN `param_cli_reputation` INTEGER(11),
        IN `param_cli_lastlogin` DATETIME
    )
    NOT DETERMINISTIC
    CONTAINS SQL
    SQL SECURITY DEFINER
    COMMENT ''
BEGIN
  UPDATE
    `clients`
  SET
    `cli_name` = param_cli_name,
    `cli_email` = param_cli_email,
    `cli_password` = param_cli_password,
    `cli_countrycode` = param_cli_countrycode,
    `cli_areacode` = param_cli_areacode,
    `cli_telephone` = param_cli_telephone,
    `cli_zipcode` = param_cli_zipcode,
    `cli_reputation` = param_cli_reputation,
    `cli_lastlogin` = param_cli_lastlogin
  WHERE
    `cli_code` = param_cli_code;
END$$

DELIMITER ;

/* Definition for the `spu_clients_items` procedure : */

DELIMITER $$

CREATE DEFINER = 'root'@'localhost' PROCEDURE `spu_clients_items`(
        IN `param_cli_code` INTEGER(11),
        IN `param_itm_code` INTEGER(11),
        IN `param_sta_code` VARCHAR(3)
    )
    NOT DETERMINISTIC
    CONTAINS SQL
    SQL SECURITY DEFINER
    COMMENT ''
BEGIN
  UPDATE
    `clients_items`
  SET
    `sta_code` = param_sta_code
  WHERE
    `cli_code` = param_cli_code AND
    `itm_code` = param_itm_code;
END$$

DELIMITER ;

/* Definition for the `spu_items` procedure : */

DELIMITER $$

CREATE DEFINER = 'root'@'localhost' PROCEDURE `spu_items`(
        IN `param_itm_code` INTEGER(11),
        IN `param_itm_title` VARCHAR(60),
        IN `param_itm_descr` TEXT,
        IN `param_itm_photo` VARCHAR(250),
        IN `param_cai_code` INTEGER(11)
    )
    NOT DETERMINISTIC
    CONTAINS SQL
    SQL SECURITY DEFINER
    COMMENT ''
BEGIN
  UPDATE
    `items`
  SET
    `itm_title` = param_itm_title,
    `itm_descr` = param_itm_descr,
    `itm_photo` = param_itm_photo,
    `cai_code` = param_cai_code
  WHERE
    `itm_code` = param_itm_code;
END$$

DELIMITER ;

/* Definition for the `spu_lendings` procedure : */

DELIMITER $$

CREATE DEFINER = 'root'@'localhost' PROCEDURE `spu_lendings`(
        IN `param_lnd_code` INTEGER(11),
        IN `param_lnd_cliowner` INTEGER(11),
        IN `param_lnd_clirequester` INTEGER(11),
        IN `param_lnd_startdate` DATETIME,
        IN `param_lnd_enddate` DATETIME,
        IN `param_lnd_grntmrg` FLOAT,
        IN `param_sta_code` VARCHAR(3)
    )
    NOT DETERMINISTIC
    CONTAINS SQL
    SQL SECURITY DEFINER
    COMMENT ''
BEGIN
  UPDATE
    `lendings`
  SET
    `lnd_cliowner` = param_lnd_cliowner,
    `lnd_clirequester` = param_lnd_clirequester,
    `lnd_startdate` = param_lnd_startdate,
    `lnd_enddate` = param_lnd_enddate,
    `lnd_grntmrg` = param_lnd_grntmrg,
    `sta_code` = param_sta_code
  WHERE
    `lnd_code` = param_lnd_code;
END$$

DELIMITER ;

/* Definition for the `spu_lending_evaluation` procedure : */

DELIMITER $$

CREATE DEFINER = 'root'@'localhost' PROCEDURE `spu_lending_evaluation`(
        IN `param_lnd_code` INTEGER(11),
        IN `param_cli_code` INTEGER(11),
        IN `param_lnd_rating` INTEGER(11),
        IN `param_lnd_evaluation` TEXT,
        IN `param_lnd_evaluationdate` DATETIME
    )
    NOT DETERMINISTIC
    CONTAINS SQL
    SQL SECURITY DEFINER
    COMMENT ''
BEGIN
  UPDATE
    `lendings_evaluation`
  SET
    `lnd_rating` = param_lnd_rating,
    `lnd_evaluation` = param_lnd_evaluation,
    `lnd_evaluationdate` = param_lnd_evaluationdate
  WHERE
    `lnd_code` = param_lnd_code and
    `cli_code` = param_cli_code;
END$$

DELIMITER ;

/* Definition for the `spu_lending_items` procedure : */

DELIMITER $$

CREATE DEFINER = 'root'@'localhost' PROCEDURE `spu_lending_items`(
        IN `param_lnd_code` INTEGER(11),
        IN `param_itm_code` INTEGER(11),
        IN `param_sta_code` VARCHAR(3)
    )
    NOT DETERMINISTIC
    CONTAINS SQL
    SQL SECURITY DEFINER
    COMMENT ''
BEGIN
  UPDATE
    `lendings_items`
  SET
    `sta_code` = param_sta_code
  WHERE
    `lnd_code` = param_lnd_code and
    `itm_code` = param_itm_code;
END$$

DELIMITER ;

/* Definition for the `spu_routines` procedure : */

DELIMITER $$

CREATE DEFINER = 'root'@'localhost' PROCEDURE `spu_routines`(
        IN `param_rou_code` VARCHAR(10),
        IN `param_rou_descr` VARCHAR(60)
    )
    NOT DETERMINISTIC
    CONTAINS SQL
    SQL SECURITY DEFINER
    COMMENT ''
BEGIN
  UPDATE
    `routines`
  SET
    `rou_descr` = param_rou_descr
  WHERE
    `rou_code` = param_rou_code;
END$$

DELIMITER ;

/* Definition for the `spu_status` procedure : */

DELIMITER $$

CREATE DEFINER = 'root'@'localhost' PROCEDURE `spu_status`(
        IN `param_sta_code` VARCHAR(3),
        IN `param_sta_descr` VARCHAR(30)
    )
    NOT DETERMINISTIC
    CONTAINS SQL
    SQL SECURITY DEFINER
    COMMENT ''
BEGIN
  UPDATE
    `status`
  SET
    `sta_descr` = param_sta_descr
  WHERE
    `sta_code` = param_sta_code;
END$$

DELIMITER ;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;