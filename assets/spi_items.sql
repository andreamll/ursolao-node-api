/* Definition for the `spi_items` procedure : */
DROP PROCEDURE IF EXISTS `spi_items`;

DELIMITER $$

CREATE PROCEDURE `spi_items`(
	pitm_title	varchar(60),
	pitm_descr	text,
	pitm_photo	VARCHAR(250),
	pcai_code	INTEGER
)
    NOT DETERMINISTIC
    CONTAINS SQL
    SQL SECURITY DEFINER
    COMMENT ''
BEGIN
  INSERT
  INTO		items
  (			itm_title,
			itm_descr,
            itm_photo,
            cai_code
  )
  VALUES
  (			pitm_title,
			pitm_descr,
            pitm_photo,
            pcai_code
  );
  
END$$

DELIMITER ;
