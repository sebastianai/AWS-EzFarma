export interface Buy{
    COMPRA:     number;
    ORDEN:      number;
    ID:         number;
    DROGUERIA?:  string;
    RUT:        string;
    DIRECCION:  string;
    FECHA:      Date;
    SUBTOTAL:   number;
    IDPRODUCTO: string;
    NOMBRE:     string;
    ESTADO:     number;
    CANTIDAD:   number;
    PRECIO:     number;
    TOTAL:      number;
}
export interface Order{
    Username:  string;
    Productos: Product[];
}
export interface Cart{
    productos:ProductCart;
    total:number;
}

export interface ProductCart{
    producto: Product;
    cantidad:number;
}

export interface Product {
    PRODUCTO_ID:   string;
    DESCRIPCION:   string;
    FORMATO?:       string;
    PRECIO:        number;
    PRECIO_OFERTA: number;
    NOMBRE:        string;
    CANTIDAD:     number
}

export interface Medicamento {
    PRODUCTO_ID: string;
    COUNT:       number;
    NOMBRE:      string;
    VENTA:       string;
    CANTIDAD:    number;
    ULTIMA:      string;
}