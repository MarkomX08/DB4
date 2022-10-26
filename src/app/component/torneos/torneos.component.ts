import { Component, OnInit } from '@angular/core';
import { ConexionService } from 'src/app/services/conexion.service';

@Component({
  selector: 'app-torneos',
  templateUrl: './torneos.component.html',
  styleUrls: ['./torneos.component.scss']
})
export class TorneosComponent implements OnInit {

  Lista: any= [];
  constructor(private conexion: ConexionService) {
    this.torneos();
   }

  ngOnInit(): void {
  }
  torneos(){
    this.conexion.Get('futbolistas','GetTorneos').subscribe((dato: any) =>{
      this.Lista = dato.reverse();
    });
  }
}
