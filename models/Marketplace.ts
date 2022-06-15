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
    PRECIO_OFERTA?: number;
    NOMBRE:        string;
    CANTIDAD?:     number
}