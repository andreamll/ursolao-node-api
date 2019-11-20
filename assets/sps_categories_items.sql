/* Definition for the `sps_categories_items` procedure : */
DROP PROCEDURE IF EXISTS `sps_categories_items`;

DELIMITER $$

CREATE PROCEDURE `sps_categories_items`(
	pcai_code INTEGER
)
    NOT DETERMINISTIC
    CONTAINS SQL
    SQL SECURITY DEFINER
    COMMENT ''
BEGIN
  SELECT
    cai_code as code,
    cai_descr as descr,
    sta_code as status
  FROM
    categories_items
  WHERE
	(pcai_code is null or cai_code = pcai_code);
END$$

DELIMITER ;
