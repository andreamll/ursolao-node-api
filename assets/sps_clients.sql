/* Definition for the `sps_clients` procedure : */
DROP PROCEDURE IF EXISTS `sps_clients`;

DELIMITER $$

CREATE PROCEDURE `sps_clients`(
	pcli_code		INTEGER,
	pcli_email		varchar(60),
	pcli_password	varchar(10)
)
    NOT DETERMINISTIC
    CONTAINS SQL
    SQL SECURITY DEFINER
    COMMENT ''
BEGIN
  SELECT	cli_code			as code,
			cli_name			as name,
			cli_email			as email,
			cli_password		as password,
			cli_countrycode		as countrycode,
			cli_areacode		as areacode,
			cli_telephone		as telephone,
			cli_zipcode			as zipcode,
			cli_reputation		as reputation,
			cli_lastlogin		as lastlogin
  FROM		clients
  WHERE		(pcli_code is null or cli_code = pcli_code)
  AND		(pcli_email is null or cli_email = pcli_email)
  AND		(pcli_password is null or cli_password = pcli_password);
  
END$$;
