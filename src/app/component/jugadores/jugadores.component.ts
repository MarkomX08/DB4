import { Component, OnInit } from '@angular/core';
import { ConexionService } from 'src/app/services/conexion.service';

@Component({
  selector: 'app-jugadores',
  templateUrl: './jugadores.component.html',
  styleUrls: ['./jugadores.component.scss']
})
export class JugadoresComponent implements OnInit {

  Lista: any= [];
  constructor(private conexion: ConexionService) {
    this.jugadores();
   }

  ngOnInit(): void {
  }
  jugadores(){
    this.conexion.Get('futbolistas','GetJugadores').subscribe((dato: any) =>{
      this.Lista = dato.reverse();
    });
  }
}
