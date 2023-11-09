import { Component } from '@angular/core';

import { NavbarItem } from '../../interfaces/shared.interfaces';

@Component({
  selector: 'shared-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  public navbarItems: NavbarItem[] = [
    {
      path: 'entry-point',
      name: 'Punto de Partida',
    },
    {
      path: 'goals-objectives',
      name: 'Metas y Objetivos',
    },
    {
      path: 'action-plan',
      name: 'Plan de Acción',
    },
    {
      path: 'conclusions',
      name: 'Reflexión de Cierre',
    },
  ];

}
