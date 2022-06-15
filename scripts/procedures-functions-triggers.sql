SET GLOBAL event_scheduler = ON;
/*Actualizar vigencia*/
DROP PROCEDURE IF EXISTS verificar_vigencia; 
DROP TRIGGER IF EXISTS nuevo_catalogo;   
DELIMITER //
CREATE PROCEDURE verificar_vigencia()
	BEGIN
		UPDATE Catalogos SET VIGENTE=false
        WHERE VALIDO_HASTA < CURRENT_DATE();
    END//
    
DROP EVENT IF EXISTS actualizar_vigencia;
CREATE EVENT actualizar_vigencia
ON SCHEDULE EVERY 1 DAY
STARTS '2022-06-06 00:00:00'
DO 
	CALL verificar_vigencia();

DELIMITER //
CREATE TRIGGER nuevo_catalogo
	BEFORE INSERT ON Catalogos FOR EACH ROW
    BEGIN
		IF NEW.VALIDO_HASTA < current_date() THEN
			SET NEW.VIGENTE = FALSE;
		ELSE
			SET NEW.VIGENTE = TRUE;
		END IF;
    END//
/*END - Actualizar vigencia*/
/* Añadir Producto*/
DROP TRIGGER IF EXISTS nuevo_producto;
DELIMITER //
CREATE TRIGGER nuevo_producto
	AFTER INSERT ON catalogo_producto FOR EACH ROW
    BEGIN
		INSERT IGNORE INTO producto(ID,NOMBRE) VALUES(NEW.PRODUCTO_ID,NEW.DESCRIPCION);
    END//
/* Obtener detalles Producto */
DROP PROCEDURE IF EXISTS detalle_producto;
DELIMITER //
CREATE PROCEDURE detalle_producto(ID VARCHAR(20))
BEGIN
	SET @TIPO = (SELECT p.TIPO FROM Producto p WHERE p.ID = ID);
	IF(@TIPO = 0) THEN
		SELECT p.*, m.PRINCIPIO_ACTIVO,m.TIPO_VENTA FROM Producto p JOIN Medicamento m on p.ID = m.ID WHERE p.ID = ID;
    END IF;
END//


/* Obtener estadisticas de la farmacia */
DROP PROCEDURE IF EXISTS STATS;
DELIMITER //
CREATE PROCEDURE STATS(IN RUT VARCHAR(13))
BEGIN
	SET @USER = (SELECT ID FROM Farmacias f WHERE f.RUT = RUT);
	SET @PEDIDOS = (SELECT COUNT(*) FROM Ordenes WHERE ID_CLIENTE = @USER); 
    SET @TOTAL = (SELECT SUM(o.GRANDTOTAL) FROM  Ordenes o JOIN Farmacias f ON o.ID_CLIENTE = f.ID WHERE f.ID = @USER);
    SET @NDROGUERIAS = (SELECT COUNT(DISTINCT c.NOMBRE) FROM Catalogos c WHERE c.FARMACIA_ID = @USER AND c.FECHA_CARGA >= DATE_ADD(NOW(), INTERVAL -3 MONTH) );

	SELECT @PEDIDOS, @TOTAL,@NDROGUERIAS;
END//

DROP VIEW IF EXISTS POPULAR_Droguerias;

CREATE VIEW POPULAR_Droguerias as
WITH Top_Droguerias AS(
Select NOMBRE, count(*) as NumCatalogos,
ROW_NUMBER() OVER (PARTITION BY NOMBRE ORDER BY count(*) DESC) AS RN
From Catalogos
Group by NOMBRE
)
SELECT * FROM Top_Droguerias
Where RN = 1;