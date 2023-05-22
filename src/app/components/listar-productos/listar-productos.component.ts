import { Component, Input } from '@angular/core';
import { Producto } from 'src/models/producto';
import {ProductosService} from "src/app/services/productos.service"

@Component({
  selector: 'app-listar-productos',
  templateUrl: './listar-productos.component.html',
  styleUrls: ['./listar-productos.component.css']
})

export class ListarProductosComponent {
  @Input() productos: Producto[] = [];
  constructor(private productService: ProductosService){}

  ngOnInit(): void{
    this.productos = this.productService.getProductos()
  }   

}
