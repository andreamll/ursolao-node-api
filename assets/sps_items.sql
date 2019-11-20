/* Definition for the `sps_items` procedure : */
DROP PROCEDURE IF EXISTS `sps_items`;

DELIMITER $$

CREATE PROCEDURE `sps_items`(
	pitm_code	INTEGER,
    pcai_code	INTEGER,
    psta_code	varchar(03)
)
    NOT DETERMINISTIC
    CONTAINS SQL
    SQL SECURITY DEFINER
    COMMENT ''
BEGIN
  SELECT	i.itm_code	as code,
			i.itm_title	as title,
			i.itm_descr	as descr,
			i.itm_photo	as photo,
			c.cai_code	as category,
            c.cai_descr	as category_descr,
            c.sta_code	as status
  FROM		items				i,
			categories_items	c
  WHERE		i.cai_code	= c.cai_code
  AND		(pitm_code IS NULL OR i.itm_code 	= pitm_code)
  AND		(pcai_code IS NULL OR c.cai_code 	= pcai_code)
  AND		(psta_code IS NULL OR c.sta_code	= psta_code);
  
END$$

DELIMITER ;
