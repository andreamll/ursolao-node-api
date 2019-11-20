/* Definition for the `sps_lendings_items` procedure : */
DROP PROCEDURE IF EXISTS `sps_lendings_items`;

DELIMITER $$

CREATE PROCEDURE `sps_lendings_items`(
	plnd_code INTEGER
)
    NOT DETERMINISTIC
    CONTAINS SQL
    SQL SECURITY DEFINER
    COMMENT ''
BEGIN
  SELECT	l.lnd_code	as code,
			i.itm_code	as item,
			i.itm_title	as title,
            i.itm_descr	as descr,
			i.itm_photo	as photo,
            c.cai_code	as category,
            c.cai_descr	as category_descr
  FROM		lendings_items		l,
			items				i,
            categories_items	c
  WHERE		l.itm_code	= i.itm_code
  AND		i.cai_code	= c.cai_code
  AND		(plnd_code IS NULL or lnd_code = plnd_code);
  
END$$

DELIMITER ;
