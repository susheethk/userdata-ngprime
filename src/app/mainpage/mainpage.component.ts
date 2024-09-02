import { Component, OnInit } from '@angular/core';
import { ChartModule } from 'primeng/chart';
import { PanelModule } from 'primeng/panel';
import { TableModule } from 'primeng/table';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { DropdownModule } from 'primeng/dropdown';
import { FormsModule } from '@angular/forms';

// Define the Product interface
interface Product {
  code: string;
  name: string;
  category: string;
  quantity: number;
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
    FormsModule
  ],
  templateUrl: './mainpage.component.html',
  styleUrls: ['./mainpage.component.css'] // Corrected property name
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

  products: Product[] = []; // Array to hold product data

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
      responsive: false,
      maintainAspectRatio: false,
    };

    // Initialize products data
    this.products = [
      { code: 'P1001', name: 'Product 1', category: 'Category 1', quantity: 50 },
      { code: 'P1002', name: 'Product 2', category: 'Category 2', quantity: 30 },
      { code: 'P1003', name: 'Product 3', category: 'Category 3', quantity: 20 },
      // Add more products as needed
    ];
  }

}
