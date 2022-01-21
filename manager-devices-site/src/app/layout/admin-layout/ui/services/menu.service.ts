import { Injectable } from '@angular/core';
import { menu } from '../models/menu';
import { NavItem } from '../models/nav-item';

@Injectable({
  providedIn: 'root'
})
export class MenuService {
  public hideSideNav = false;
  public expandedSideNav = false;
  public sideMenu: NavItem[] = menu;
  public subMenuOpen = 1;

  constructor() {}

  public toggleSideNav() {
    this.hideSideNav = !this.hideSideNav;
  }

  public toggleExpandedSideNav() {
    this.expandedSideNav = !this.expandedSideNav;
  }

  get menuItem() {
    return this.sideMenu;
  }
}
