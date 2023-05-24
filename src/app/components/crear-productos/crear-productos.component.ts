import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Producto } from 'src/models/producto';
import { ProductosService } from 'src/app/services/productos.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-crear-productos',
  templateUrl: './crear-productos.component.html',
  styleUrls: ['./crear-productos.component.css']
})

export class CrearProductosComponent {

  productoId!: number;

  productoForm: FormGroup;

  productoObt: Producto | undefined;

  constructor(private fb: FormBuilder, 
              private router: Router, 
              private productoService: ProductosService, 
              private route: ActivatedRoute){




        this.route.params.subscribe(params => {
          this.productoId = +params['_id']; // Convertir el ID en número
          // Aquí puedes realizar cualquier lógica adicional para cargar los datos del producto correspondiente
          console.log(this.productoId);
        });

        this.productoObt = productoService.getProducto(this.productoId)

        if(this.productoObt != undefined){
          console.log(this.productoObt);
        }else{
          console.log("No se pudo obtener el producto")
        }

        this.productoForm = this.fb.group({
          producto: [this.productoObt?.nombre, Validators.required],
          descripcion: [this.productoObt?.descripcion, Validators.required],
          precio: [this.productoObt?.precio, Validators.required],
        })

  }


  agregarProducto(){
    const contador: number = 12;

    const PRODUCTO: Producto = {
      _id: (contador + 1),
      nombre: this.productoForm.get('producto')?.value,
      descripcion: this.productoForm.get('descripcion')?.value,
      precio: this.productoForm.get('precio')?.value,
    }

    this.productoService.agregarProducto(PRODUCTO)

    this.router.navigate(['/'])
  }

  actualizarProducto(){
    const PRODUCTO: Producto = {
      nombre: this.productoForm.get('producto')?.value,
      descripcion: this.productoForm.get('descripcion')?.value,
      precio: this.productoForm.get('precio')?.value,
    }

    console.log(PRODUCTO)

    this.productoService.updateProducto(this.productoId, PRODUCTO)
    this.router.navigate(['/'])
  }

}
