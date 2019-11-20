/* Definition for the `spi_categories_items` procedure : */
DROP PROCEDURE IF EXISTS `spi_categories_items`;

DELIMITER $$

CREATE PROCEDURE `spi_categories_items`(
	pcai_descr	varchar(60),
    psta_code	VARCHAR(03)
)
    NOT DETERMINISTIC
    CONTAINS SQL
    SQL SECURITY DEFINER
    COMMENT ''
BEGIN
  INSERT	categories_items
  (			cai_descr
  ,			sta_code
  )
  VALUES
  (			pcai_descr
  ,			psta_code
  );
END$$

DELIMITER ;
