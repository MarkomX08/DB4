import { Component, OnInit } from '@angular/core';
import { ConexionService } from 'src/app/services/conexion.service';

@Component({
  selector: 'app-equipos',
  templateUrl: './equipos.component.html',
  styleUrls: ['./equipos.component.scss']
})
export class EquiposComponent implements OnInit {
  Lista: any= [];
  constructor(private conexion: ConexionService) {
    this.torneos();
   }

  ngOnInit(): void {
  }
  torneos(){
    this.conexion.Get('futbolistas','GetEquipos').subscribe((dato: any) =>{
      this.Lista = dato.reverse();
    });
  }
}
