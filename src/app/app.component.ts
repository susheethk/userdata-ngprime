import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from "./navbar/navbar.component";
import { SidenavComponent } from './sidenav/sidenav.component';
import { MainpageComponent } from './mainpage/mainpage.component';
import { PagetwoComponent } from "./pagetwo/pagetwo.component";
import { PagethreeComponent } from "./pagethree/pagethree.component";


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [NavbarComponent, SidenavComponent, RouterOutlet, MainpageComponent, PagetwoComponent, PagethreeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'userdata2';
}
