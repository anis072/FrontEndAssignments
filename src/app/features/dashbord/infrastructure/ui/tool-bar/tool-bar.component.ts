import { Component, OnInit } from '@angular/core';
import { Menu } from '../../../domains/models/menu.model';

@Component({
  selector: 'app-tool-bar',
  templateUrl: './tool-bar.component.html',
  styleUrls: ['./tool-bar.component.scss']
})
export class ToolBarComponent implements OnInit {
  menuItems: Menu[] = [
    {
      label: 'Messages',
      icon: 'messages',
      showOnMobile: true,
      showOnTablet: true,
      showOnDesktop: true
    },
    {
      label: 'Profile',
      icon: 'account_circle',
      showOnMobile: false,
      showOnTablet: true,
      showOnDesktop: true
    },
    {
      label:'logout',
      icon: 'arrow_right_alt',
      showOnMobile: false,
      showOnTablet: true,
      showOnDesktop: true
    }
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
