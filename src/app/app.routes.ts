import { Routes } from '@angular/router';
import { MainpageComponent } from './mainpage/mainpage.component';
import { PagetwoComponent } from './pagetwo/pagetwo.component';
import { PagethreeComponent } from './pagethree/pagethree.component';
import { NavbarComponent } from './navbar/navbar.component';

export const routes: Routes = [
    {path:'mainpage', component: MainpageComponent},
    {path: 'pagetwo', component: PagetwoComponent},
    {path: 'pagethree', component: PagethreeComponent},
    {path: 'navbar', component: NavbarComponent},
    { path: '', redirectTo: '/navbar', pathMatch: 'full' }, 
];
