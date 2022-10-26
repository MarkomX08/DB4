import { Component, OnInit } from '@angular/core';
import { ConexionService } from 'src/app/services/conexion.service';

@Component({
  selector: 'app-arbitros',
  templateUrl: './arbitros.component.html',
  styleUrls: ['./arbitros.component.scss']
})
export class ArbitrosComponent implements OnInit {

  Lista: any= [];
  constructor(private conexion: ConexionService) { 
    this.arbitros();
  }

  ngOnInit(): void {
  }
arbitros(){
  this.conexion.Get('futbolistas','GetArbitros').subscribe((dato: any) =>{
    this.Lista = dato.reverse();
  });
}
}
