import { Component, OnInit } from '@angular/core';
interface MenuItem {
  texto: string;
  ruta: string;
}

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  gestorMenu: MenuItem[] = [
    { texto: 'torneos', ruta: './component/torneos'},
    { texto: 'jugadores', ruta: './component/jugadores' },
    { texto: 'equipos', ruta: './component/equipos'},
    { texto: 'arbitros', ruta: './component/arbitros' },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
