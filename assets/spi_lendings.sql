/* Definition for the `spi_lendings` procedure : */
DROP PROCEDURE IF EXISTS `spi_lendings`;

DELIMITER $$

CREATE PROCEDURE `spi_lendings`(
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
  INSERT
  INTO		lendings
  (			lnd_cliowner,
			lnd_clirequester,
			lnd_startdate,
			lnd_enddate,
			lnd_grntmrg,
			sta_code
  )	
  VALUES	
  (			plnd_cliowner,
			plnd_clirequester,
			plnd_startdate,
			plnd_enddate,
			plnd_grntmrg,
			psta_code
  )	;
  
END$$

DELIMITER ;
