/* Definition for the `sps_lendings` procedure : */
DROP PROCEDURE IF EXISTS `sps_lendings`;

DELIMITER $$

CREATE PROCEDURE `sps_lendings`(
	plnd_code 		INTEGER,
    pcli_code		INTEGER
)
    NOT DETERMINISTIC
    CONTAINS SQL
    SQL SECURITY DEFINER
    COMMENT ''
BEGIN
  SELECT	l.lnd_code          as code,
			l.lnd_cliowner      as cliowner,
			o.cli_name          as nameowner, 
			l.lnd_clirequester  as clirequester,
			r.cli_name          as namerequester,
			l.lnd_startdate     as startdate,
			l.lnd_enddate       as enddate,
			l.lnd_grntmrg       as grntmrg,
			l.sta_code          as status
  FROM		lendings	l,
			clients		o,
            clients		r
  WHERE		l.lnd_cliowner		= o.cli_code
  AND		l.lnd_clirequester 	= r.cli_code
  AND		(plnd_code IS NULL OR l.lnd_code = plnd_code)
  AND		(pcli_code IS NULL OR l.lnd_cliowner = pcli_code OR l.lnd_clirequester = pcli_code);
  
END$$

DELIMITER ;
