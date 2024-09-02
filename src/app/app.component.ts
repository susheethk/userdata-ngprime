import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from "./navbar/navbar.component";
import { SidenavComponent } from './sidenav/sidenav.component';
import { MainpageComponent } from './mainpage/mainpage.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [NavbarComponent, SidenavComponent,RouterOutlet,MainpageComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'userdata2';
}
