import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { AvatarModule } from 'primeng/avatar';
import { AvatarGroupModule } from 'primeng/avatargroup';
import { PanelModule } from 'primeng/panel';
import { InputTextModule } from 'primeng/inputtext';
@Component({
  selector: 'app-pagethree',
  standalone: true,
  imports: [ButtonModule, AvatarModule,AvatarGroupModule,PanelModule,InputTextModule],
  templateUrl: './pagethree.component.html',
  styleUrl: './pagethree.component.css'
})
export class PagethreeComponent {

}
