import { Component, OnInit } from '@angular/core';
import { Menu } from '../../../domains/models/menu.model';

@Component({
  selector: 'app-dashbord',
  templateUrl: './dashbord.component.html',
  styleUrls: ['./dashbord.component.scss']
})
export class DashbordComponent implements OnInit {
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
