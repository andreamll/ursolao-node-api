/* Definition for the `spd_lendings_items` procedure : */
DROP PROCEDURE IF EXISTS `spd_lendings_items`;

DELIMITER $$

CREATE PROCEDURE `spd_lendings_items`(
	plnd_code 	INTEGER,
    pitm_code	INTEGER
)
    NOT DETERMINISTIC
    CONTAINS SQL
    SQL SECURITY DEFINER
    COMMENT ''
BEGIN
  DELETE	
  FROM		lendings_items
  WHERE		lnd_code 	= plnd_code
  AND		itm_code	= pitm_code;
  
END$$

DELIMITER ;
