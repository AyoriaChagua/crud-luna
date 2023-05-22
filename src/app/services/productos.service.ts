import { Injectable } from '@angular/core';
import { Producto } from 'src/models/producto';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {
  
  productos: Producto[] = [];

  constructor(){
    this.productos.push(
      new Producto(10, "Data test1", "this is a data test 1", 10),
      new Producto(10, "Data test2", "this is a data test 2", 20),
      new Producto(10, "Data test3", "this is a data test 3", 30)
    );
  }

  getProductos(): Producto[]{
    return this.productos;
  }

  agregarProducto(producto: Producto): void {
    this.productos.push(producto);
  }

  getProducto(_id: string): Producto | undefined{
    return this.productos.find(p => p._id || undefined == _id);
  }

  updateProduct(_id: string, newProducto: Producto): void {
    this.productos.forEach((p, i)=> {
      if(p._id || undefined == _id) this.productos[i] = newProducto;
    })
  }

}
