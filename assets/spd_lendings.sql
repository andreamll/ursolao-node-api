/* Definition for the `spd_lendings` procedure : */
DROP PROCEDURE IF EXISTS `spd_lendings`;

DELIMITER $$

CREATE PROCEDURE `spd_lendings`(
	plnd_code 		INTEGER
)
    NOT DETERMINISTIC
    CONTAINS SQL
    SQL SECURITY DEFINER
    COMMENT ''
BEGIN
  DELETE	
  FROM		lendings	
  WHERE		lnd_code = plnd_code;
  
END$$

DELIMITER ;
