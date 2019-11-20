/* Definition for the `spu_items` procedure : */
DROP PROCEDURE IF EXISTS `spu_items`;

DELIMITER $$

CREATE PROCEDURE `spu_items`(
	pitm_code	  INTEGER,
	pitm_title	varchar(60),
	pitm_descr	text,
	pitm_photo	VARCHAR(250),
	pcai_code	  INTEGER
)
    NOT DETERMINISTIC
    CONTAINS SQL
    SQL SECURITY DEFINER
    COMMENT ''
BEGIN
  UPDATE	items
  SET		  itm_title	= pitm_title,
			    itm_descr	= pitm_descr,
          itm_photo	= pitm_photo,
          cai_code	= pcai_code
  WHERE		itm_code 	= pitm_code;
  
END$$

DELIMITER ;
