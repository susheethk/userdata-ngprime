import { Component } from '@angular/core';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { CheckboxModule } from 'primeng/checkbox';
import { CommonModule } from '@angular/common';

interface Product {
  code: string;
  name: string;
  category: string;
  company: string;
  email: string;
  owner: string;
}

@Component({
  selector: 'app-pagetwo',
  standalone: true,
  imports: [TableModule,ButtonModule,CheckboxModule, CommonModule ],
  templateUrl: './pagetwo.component.html',
  styleUrls: ['./pagetwo.component.css']
})
export class PagetwoComponent {
  products: Product[] = [
    { code: '#596059', name: 'Call', category: 'Assigned a task by Henry Stark', company: '23rd June 2024', email: 'Follow Up', owner: 'Disqualified' },
    { code: '#596059', name: 'Email', category: 'Assigned a task by Henry Stark', company: '23rd June 2024', email: 'Follow Up', owner: 'Completed' },
    { code: '#596059', name: 'Call', category: 'Assigned a task by Henry Stark', company: '23rd June 2024', email: 'Follow Up', owner: 'Disqualified' },
    { code: '#596059', name: 'Email', category: 'Assigned a task by Henry Stark', company: '23rd June 2024', email: 'Follow Up', owner: 'Completed' },
    { code: '#596059', name: 'Call', category: 'Assigned a task by Henry Stark', company: '23rd June 2024', email: 'Follow Up', owner: 'Disqualified' },
    { code: '#596059', name: 'Email', category: 'Assigned a task by Henry Stark', company: '23rd June 2024', email: 'Follow Up', owner: 'Completed' },

  ];
}
