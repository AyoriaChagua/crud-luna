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

  constructor(private fb: FormBuilder, 
              private router: Router, 
              private productoService: ProductosService, 
              private route: ActivatedRoute){

        this.productoForm = this.fb.group({
          producto: ['', Validators.required],
          descripcion: ['', Validators.required],
          precio: ['', Validators.required],
        })


        this.route.params.subscribe(params => {
          this.productoId = +params['_id']; // Convertir el ID en número
          // Aquí puedes realizar cualquier lógica adicional para cargar los datos del producto correspondiente
          console.log(this.productoId)
        });

  }


  agregarProducto(){
    const contador: number = 10;

    const PRODUCTO: Producto = {
      _id: (contador + 1),
      nombre: this.productoForm.get('producto')?.value,
      descripcion: this.productoForm.get('descripcion')?.value,
      precio: this.productoForm.get('precio')?.value,
    }

    this.productoService.agregarProducto(PRODUCTO)

    console.log(PRODUCTO)

    this.router.navigate(['/'])
  }

}
