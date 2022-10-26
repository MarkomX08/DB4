import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router,ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.scss']
})
export class UpdateComponent implements OnInit {
  Formulario: FormGroup = this.fb.group({
    id: [],
    nombre:[,[Validators.required, Validators.minLength(3)]], 
    apellido:[,[Validators.required, Validators.minLength(3)]],
    posicion:[,[Validators.required, Validators.minLength(3)]]
  })

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private activedRouter: ActivatedRoute
  ) {
    // const id = this.activedRouter.snapshot.params['id'];
    // this.ObtenerRegistro(id);
   }

  //  ObtenerRegistro(id: any) {
  //    this.conexion.Post('articulo', 'GetId', { 'id': id }).subscribe((dato: any) => {
  //      this.Formulario.patchValue({
  //        id: dato.id,
  //        nombre: dato.nombre,
  //        cantidad: dato.cantidad,
  //        tipo: dato.tipo,
  //      });
  //    });
  //  }
  ngOnInit(): void {
  }


  campoEsValido(campo: string) {
    return this.Formulario.controls[campo].errors && this.Formulario.controls[campo].touched;
  }

  // guardar(){
  //   this.conexion.Post('articulo','Update',this.Formulario.value).subscribe((dato:any)=> {
  //     console.log(dato);
  //     if(dato['estatus']){
  //       this.router.navigate(['/gestor/lista']);
  //       Swal.fire({
  //         position:'center',
  //         icon:'success',
  //         title: 'Se agrego el producto correctamente',
  //         showConfirmButton: false,
  //         timer: 1500
  //       })
  //     }
      
  //   });
  // };

  // eliminar(id:any) {  
  //   Swal.fire({
  //     title: '¿Quieres eliminar este articulo?',
  //     text: "Una vez eliminado no hay vuelta atras",
  //     icon: 'warning',
  //     showCancelButton: true,
  //     confirmButtonColor: '#3085d6',
  //     cancelButtonColor: '#d33',
  //     confirmButtonText: 'Eliminar'
  //   }).then((result) => {
  //     if (result.isConfirmed) {this.conexion.Post('articulo', 'Delete', { id: id }).subscribe((dato: any) => {
  //       console.log(dato);
  //       if (dato['estatus']) {
  //         this.router.navigate(['/gestor/lista']);
  //       Swal.fire(
  //         '!Eliminado¡',
  //         'El articulo ha sido Eliminado',
  //         'success'
  //       )
  //       };
  //       });
  //     };
  //   });
  // }
}
