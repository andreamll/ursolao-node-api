/* Definition for the `spu_categories_items` procedure : */
DROP PROCEDURE IF EXISTS `spu_categories_items`;

DELIMITER $$

CREATE PROCEDURE `spu_categories_items`(
	pcai_code 	INTEGER,
    pcai_descr	varchar(60),
    psta_code	varchar(03)
)
    NOT DETERMINISTIC
    CONTAINS SQL
    SQL SECURITY DEFINER
    COMMENT ''
BEGIN
  UPDATE	categories_items
  SET		cai_descr 	= pcai_descr,
			sta_code 	= psta_code
  WHERE
			cai_code = pcai_code;
END$$

DELIMITER ;
