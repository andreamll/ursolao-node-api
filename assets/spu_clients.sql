/* Definition for the `spu_clients` procedure : */
DROP PROCEDURE IF EXISTS `spu_clients`;

DELIMITER $$

CREATE PROCEDURE `spu_clients`(
	pcli_code			INTEGER,
	pcli_name			varchar(60),
    pcli_email			varchar(60),
	pcli_password		varchar(10),
    pcli_countrycode	INTEGER,
	pcli_areacode		INTEGER,
	pcli_telephone		INTEGER,
	pcli_zipcode		INTEGER
)
    NOT DETERMINISTIC
    CONTAINS SQL
    SQL SECURITY DEFINER
    COMMENT ''
BEGIN
  UPDATE	clients
  SET		cli_name			= pcli_name,
			cli_email			= pcli_email,
			cli_password		= pcli_password,
			cli_countrycode		= pcli_countrycode,
			cli_areacode		= pcli_areacode,
			cli_telephone		= pcli_telephone,
			cli_zipcode			= pcli_zipcode
  WHERE		cli_code			= pcli_code;
  
END$$

DELIMITER ;
