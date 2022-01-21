import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavItem } from '../models/nav-item';

import { MenuService } from '../services/menu.service';

@Component({
  selector: 'app-admin-side-nav',
  templateUrl: './admin-side-nav.component.html',
  styleUrls: ['./admin-side-nav.component.scss'],
})
export class AdminSideNavComponent implements OnInit {
  public activeRoute: string | undefined;

  constructor(public menuService: MenuService, private router: Router) {}

  ngOnInit(): void {}

  public onItemSelected(item: NavItem) {
    if (!item.children || !item.children.length) {
      this.activeRoute = item.route;
      this.router.navigate([`dashboard/${item.route}`]);
    }
  }
}
