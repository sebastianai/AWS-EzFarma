CREATE OR REPLACE VIEW MARKET_Producto AS
SELECT * FROM Catalogo_Producto cp JOIN Catalogos c ON cp.ID_CATALOGO = c.ID
WHERE c.VIGENTE = True;