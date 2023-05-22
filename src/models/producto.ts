export class Producto{
    _id?: number;
    nombre: string;
    descripcion: string;
    precio: number;


    constructor(_id: number, nombre: string, descripcion: string, precio: number){
        this._id = _id;
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.precio = precio;
    }
}