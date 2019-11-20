/* Definition for the `spi_lendings_items` procedure : */
DROP PROCEDURE IF EXISTS `spi_lendings_items`;

DELIMITER $$

CREATE PROCEDURE `spi_lendings_items`(
	plnd_code 	INTEGER,
    pitm_code	INTEGER,
    psta_code	varchar(03)
)
    NOT DETERMINISTIC
    CONTAINS SQL
    SQL SECURITY DEFINER
    COMMENT ''
BEGIN
  INSERT
  INTO		lendings_items
  (			lnd_code,
			itm_code,
            sta_code
  )
  VALUES
  (			plnd_code,
			pitm_code,
            psta_code
  );
  
END$$

DELIMITER ;
