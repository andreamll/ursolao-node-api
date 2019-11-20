/* Definition for the `spu_lendings` procedure : */
DROP PROCEDURE IF EXISTS `spu_lendings`;

DELIMITER $$

CREATE PROCEDURE `spu_lendings`(
	plnd_code			INTEGER,
	plnd_cliowner		INTEGER,
	plnd_clirequester	INTEGER,
	plnd_startdate		DATETIME,
	plnd_enddate		DATETIME,
	plnd_grntmrg		FLOAT,
	psta_code			VARCHAR(03)
)
    NOT DETERMINISTIC
    CONTAINS SQL
    SQL SECURITY DEFINER
    COMMENT ''
BEGIN
  UPDATE	lendings
  SET		lnd_cliowner		= plnd_cliowner,
			lnd_clirequester	= plnd_clirequester,
			lnd_startdate		= plnd_startdate,
			lnd_enddate			= plnd_enddate,
			lnd_grntmrg			= plnd_grntmrg,
			sta_code			= psta_code
  WHERE		lnd_code 			= plnd_code;
  
END$$

DELIMITER ;
