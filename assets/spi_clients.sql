/* Definition for the `spi_clients` procedure : */
DROP PROCEDURE IF EXISTS `spi_clients`;

DELIMITER $$

CREATE PROCEDURE `spi_clients`(
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
  INSERT 
  INTO		clients
  (			cli_name,
			cli_email,
			cli_password,
			cli_countrycode,
			cli_areacode,
			cli_telephone,
			cli_zipcode
  )
  VALUES
  (			pcli_name,
			pcli_email,
			pcli_password,
			pcli_countrycode,
			pcli_areacode,
			pcli_telephone,
			pcli_zipcode
  );
  
END$$

DELIMITER ;
