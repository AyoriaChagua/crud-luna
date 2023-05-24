import { Component, Input } from '@angular/core';
import { Producto } from 'src/models/producto';
import {ProductosService} from "src/app/services/productos.service"
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-listar-productos',
  templateUrl: './listar-productos.component.html',
  styleUrls: ['./listar-productos.component.css']
})

export class ListarProductosComponent {
  productoId!: number;
  @Input() productos: Producto[] = [];

  constructor(private productService: ProductosService,
              private route: ActivatedRoute){

    this.route.params.subscribe(params => {
          this.productoId = +params['_id'];
    })
  }

  ngOnInit(): void{
    this.productos = this.productService.getProductos()
  } 

  eliminarProducto(){
    this.productService.deleteProducto(this.productoId)
  }

}
