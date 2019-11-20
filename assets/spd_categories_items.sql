/* Definition for the `spd_categories_items` procedure : */
DROP PROCEDURE IF EXISTS `spd_categories_items`;

DELIMITER $$

CREATE PROCEDURE `spd_categories_items`(
	pcai_code INTEGER
)
    NOT DETERMINISTIC
    CONTAINS SQL
    SQL SECURITY DEFINER
    COMMENT ''
BEGIN
  DELETE
  FROM
    categories_items
  WHERE
	cai_code = pcai_code;
END$$

DELIMITER ;
