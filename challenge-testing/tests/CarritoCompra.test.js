const CarritoCompra = require("../index");

describe("Grupo de tests de CarritoCompra", () => {
    let carritoCompra;
    const product1 = {
        id: 1,
        name: "Lapicera azul",
        price: 1000,
        quantity: 3
    };
    const product2 = {
        id: 1,
        name: "Lapicera negra",
        price: 900,
        quantity: 5
    };

    beforeEach(() => {
        carritoCompra = new CarritoCompra();
    });

    // CarritoCompra deberia ser una clase
    it("CarritoCompra deberia ser una clase", () => {
        expect(typeof CarritoCompra.prototype.constructor).toBe('function')
    });

    // carritoCompra deberia ser una instancia de la clase CarritoCompra
    it("carritoCompra deberia ser una instancia de la clase CarritoCompra", () => {
        expect(carritoCompra instanceof CarritoCompra).toBe(true)
    });

    // Deberia guardar productos en una lista
    it("Deberia guardar productos en una lista", () => {
        expect(carritoCompra.products).toEqual([])
    });

    // Deberia tener un metodo llamado agregarProducto
    it("Deberia tener un metodo llamado agregarProducto", () => {
        expect(typeof carritoCompra.agregarProducto).toBe('function')
    });

    // Deberia tener un metodo llamado calcularTotal
    it("Deberia tener un metodo llamado calcularTotal", () => {
        expect(typeof carritoCompra.calcularTotal).toBe('function')
    });

    // Deberia tener un metodo llamado aplicarDescuento
    it("Deberia tener un metodo llamado aplicarDescuento", () => {
        expect(typeof carritoCompra.aplicarDescuento).toBe('function')
    });

    // El metodo agregarProducto deberia poder agregar un producto a la lista
    it("El metodo agregarProducto deberia poder agregar un producto a la lista", () => {
        carritoCompra.agregarProducto(product1);
        expect(carritoCompra.products).toContain(product1)
    });

    // El metodo calcularTotal deberia poder calcular el total de la compra sumando los precios de todos los productos en el carrito
    it("El metodo calcularTotal deberia poder calcular el total de la compra sumando los precios de todos los productos en el carrito", () => {
        carritoCompra.agregarProducto(product1);
        carritoCompra.agregarProducto(product2);
        const totalExpected = product1.price * product1.quantity + product2.price * product2.quantity;
        const total = carritoCompra.calcularTotal();
        expect(total).toBe(totalExpected);
    });

    // El metodo aplicarDescuento deberia poder aplicar un descuento al total de la compra
    it("El metodo aplicarDescuento deberia poder aplicar un descuento al total de la compra", () => {
        carritoCompra.agregarProducto(product1);
        carritoCompra.agregarProducto(product2);
        const subtotal = product1.price * product1.quantity + product2.price * product2.quantity;
        const discount = 15;
        const totalExpected = subtotal - (subtotal * (discount / 100));
        const total = carritoCompra.aplicarDescuento(discount);
        expect(total).toBe(totalExpected);
    });
});