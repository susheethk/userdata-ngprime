import { Component, OnInit } from '@angular/core';
import { ChartModule } from 'primeng/chart';
import { PanelModule } from 'primeng/panel';
import { TableModule } from 'primeng/table';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { DropdownModule } from 'primeng/dropdown';
import { FormsModule } from '@angular/forms';
import { CheckboxModule } from 'primeng/checkbox';


interface Product {
  code: string;
  name: string;
  category: string;
  company: string;
  email: string;
  owner: string;
  source: string;
  status: string;
  action: string;
}

@Component({
  selector: 'app-mainpage',
  standalone: true,
  imports: [
    ChartModule,
    PanelModule,
    TableModule,
    CommonModule,
    ButtonModule,
    DropdownModule,
    FormsModule,
    CheckboxModule
  ],
  templateUrl: './mainpage.component.html',
  styleUrls: ['./mainpage.component.css'] 
})
export class MainpageComponent implements OnInit {

  options = [
    { label: 'Today', value: 'to' },
    { label: 'Tomorrow', value: 'tm' },
    { label: 'Yesterday', value: 'ye' }
  ];

  selectedValue: string = 'to';

  taskStatusData: any;
  statisticsData: any;
  chartOptions: any;

  products: Product[] = []; 

  ngOnInit() {
    this.taskStatusData = {
      labels: ['In Progress', 'Won', 'Disqualified'],
      datasets: [
        {
          label: 'Tasks',
          backgroundColor: ['#f6da48', '#9d886d', '#bdcffc'],
          data: [100, 25, 30]
        }
      ]
    };

    this.statisticsData = {
      labels: ['Referral', 'Campaign', 'Sales', 'Events', 'Website'],
      datasets: [
        {
          data: [422, 369, 244, 413, 234],
          backgroundColor: ['#9d886d', '#f6da48', '#202224', '#bdcffc', '#5850ec']
        }
      ]
    };

    this.chartOptions = {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          position: 'right',
          align: 'center',
          labels: {
            boxWidth: 10, 
            padding: 15,
            usePointStyle: true, 
          }
        }
      },
      layout: {
        padding: {
          left: 0, 
          right: 0, 
          top: 0, 
          bottom: 0 
        }
      }
    };
    

    // this.chartOptions = {
    //   responsive: true,
    //   maintainAspectRatio: false,
    // };

    this.products = [
      { code: '#5000', name: 'Henry Cavil', category: 'Person', company: 'Like Coperation', email: '123clooab@email.com', owner: 'Jane smith', source: 'instagram.com/', status: 'Completed', action: 'Done' },
      { code: '#5000', name: 'Henry Cavil', category: 'Person', company: 'Like Coperation', email: '123clooab@email.com', owner: 'Jane smith', source: 'instagram.com/', status: 'Completed', action: 'Done' },
      { code: '#5000', name: 'Henry Cavil', category: 'Person', company: 'Like Coperation', email: '123clooab@email.com', owner: 'Jane smith', source: 'instagram.com/', status: 'Completed', action: 'Done' },
      { code: '#5000', name: 'Henry Cavil', category: 'Person', company: 'Like Coperation', email: '123clooab@email.com', owner: 'Jane smith', source: 'instagram.com/', status: 'Completed', action: 'Done' },
      { code: '#5000', name: 'Henry Cavil', category: 'Person', company: 'Like Coperation', email: '123clooab@email.com', owner: 'Jane smith', source: 'instagram.com/', status: 'Completed', action: 'Done' },
      { code: '#5000', name: 'Henry Cavil', category: 'Person', company: 'Like Coperation', email: '123clooab@email.com', owner: 'Jane smith', source: 'instagram.com/', status: 'Completed', action: 'Done' },
      { code: '#5000', name: 'Henry Cavil', category: 'Person', company: 'Like Coperation', email: '123clooab@email.com', owner: 'Jane smith', source: 'instagram.com/', status: 'Completed', action: 'Done' },
      { code: '#5000', name: 'Henry Cavil', category: 'Person', company: 'Like Coperation', email: '123clooab@email.com', owner: 'Jane smith', source: 'instagram.com/', status: 'Completed', action: 'Done' },
      { code: '#5000', name: 'Henry Cavil', category: 'Person', company: 'Like Coperation', email: '123clooab@email.com', owner: 'Jane smith', source: 'instagram.com/', status: 'Completed', action: 'Done' },
    ]
}
}