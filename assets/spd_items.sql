/* Definition for the `spd_items` procedure : */
DROP PROCEDURE IF EXISTS `spd_items`;

DELIMITER $$

CREATE PROCEDURE `spd_items`(
	pitm_code	INTEGER
)
    NOT DETERMINISTIC
    CONTAINS SQL
    SQL SECURITY DEFINER
    COMMENT ''
BEGIN
  DELETE
  FROM		items				
  WHERE		itm_code 	= pitm_code;
  
END$$

DELIMITER ;
