import { Component } from '@angular/core';
import { SidebarModule } from 'primeng/sidebar';
import { ButtonModule } from 'primeng/button';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-sidenav',
  standalone: true,
  imports: [SidebarModule, ButtonModule,CommonModule],
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']  
})
export class SidenavComponent {
  sidebarVisible: boolean = true;

  activeButton: string = '';
   
  setActiveButton(buttonName: string) {
    this.activeButton = buttonName;
   
  }
}
