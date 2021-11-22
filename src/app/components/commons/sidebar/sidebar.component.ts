// Core Imports
import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/base/types/user';


@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent{
  user: User;
  constructor() {
    this.user = new User();
    this.user.name = 'Javier Fernandez';
  }
}
