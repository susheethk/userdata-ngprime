import { Component, OnInit } from '@angular/core';
import { ChartModule } from 'primeng/chart';
import { PanelModule } from 'primeng/panel';
import { TableModule } from 'primeng/table';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { DropdownModule } from 'primeng/dropdown';
import { FormsModule } from '@angular/forms';
import { CheckboxModule } from 'primeng/checkbox';
import { Chart } from 'chart.js';

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

  clickedLabel: string = 'Events';

  options = [
    { label: 'Today', value: 'to' },
    { label: 'Tomorrow', value: 'tm' },
    { label: 'Yesterday', value: 'ye' }
  ];

  selectedValue: string = 'to';

  doughnutChartData: any;
  barChartData: any;
  doughnutChartOptions: any;
  barChartOptions: any;

  products: Product[] = [];

  ngOnInit() {
 
    this.doughnutChartData = {
      labels: ['Referral', 'Campaign', 'Sales', 'Events', 'Website'],
      datasets: [
        {
          data: [422, 369, 244, 413, 234],
          backgroundColor: ['#9d886d', '#f6da48', '#202224', '#bdcffc', '#5850ec'],

          hoverOffset: 10,
          cutout: '57%'
        }
      ]
    };

    
    this.barChartData = {
      labels: ['In Progress', 'Won', 'Disqualified'],
      datasets: [
        {
          data: [60, 95, 70],
          backgroundColor: ['#f6da48', '#9d886d', '#bdcffc'],
          barPercentage: 4, // Width of each bar (smaller value makes bars thinner)
          categoryPercentage: 0.1, // Space between bars (smaller value increases space)
          borderRadius: 10,
          innerWidth: 20,
        }
      ]
    };

 
    this.doughnutChartOptions = {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          position: 'right',
          labels: {
            boxWidth: 10,
            padding: 30,
            usePointStyle: true,
          }
        }
      },
      layout: {
        padding: {
          left: 0,
          right: 10,
          top: 0,
          bottom: 0
        }
      },
      onClick: (event: any, elements: any, chart: any) => {
        if (elements.length > 0) {
          const index = elements[0].index;
          this.clickedLabel = this.doughnutChartData.labels[index];
          chart.update();
        }
      }
    };

  
    this.barChartOptions = {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          display: false // Hide legend
        }
      },
      scales: {
        x: {
          display: true,
  
        },
        y: {
          beginAtZero: true,
          display: true ,
          ticks: {
            stepSize: 50, // Adjust steps based on your data
            color: '#4B5563' // Text color for y-axis labels
          }
        }
      }
    };

    Chart.register({
      id: 'centerLabelPlugin',
      beforeDraw: (chart: any) => {
        if (chart.config.type === 'doughnut') {
          const width = chart.width;
          const height = chart.height;
          const ctx = chart.ctx;

          ctx.restore();
          const fontSize = (height / 200).toFixed(2);
          ctx.font = fontSize + "em sans-serif";
          ctx.textBaseline = "middle";

          const text = this.clickedLabel;
          const textX = Math.round((width - ctx.measureText(text).width) / 2.8);
          const textY = height / 2.0;

          ctx.fillText(text, textX, textY);
          ctx.save();
        }
      }
    });


    this.products = [
      { code: '#5000', name: 'Henry Cavil', category: 'Person', company: 'Like Corporation', email: '123clooab@email.com', owner: 'Jane Smith', source: 'instagram.com/', status: 'Completed', action: 'Done' },
      { code: '#5000', name: 'Henry Cavil', category: 'Person', company: 'Like Corporation', email: '123clooab@email.com', owner: 'Jane Smith', source: 'instagram.com/', status: 'Completed', action: 'Done' },
      { code: '#5000', name: 'Henry Cavil', category: 'Person', company: 'Like Corporation', email: '123clooab@email.com', owner: 'Jane Smith', source: 'instagram.com/', status: 'Completed', action: 'Done' },
      { code: '#5000', name: 'Henry Cavil', category: 'Person', company: 'Like Corporation', email: '123clooab@email.com', owner: 'Jane Smith', source: 'instagram.com/', status: 'Completed', action: 'Done' },
      { code: '#5000', name: 'Henry Cavil', category: 'Person', company: 'Like Corporation', email: '123clooab@email.com', owner: 'Jane Smith', source: 'instagram.com/', status: 'Completed', action: 'Done' },
      { code: '#5000', name: 'Henry Cavil', category: 'Person', company: 'Like Corporation', email: '123clooab@email.com', owner: 'Jane Smith', source: 'instagram.com/', status: 'Completed', action: 'Done' },
      { code: '#5000', name: 'Henry Cavil', category: 'Person', company: 'Like Corporation', email: '123clooab@email.com', owner: 'Jane Smith', source: 'instagram.com/', status: 'Completed', action: 'Done' },
      { code: '#5000', name: 'Henry Cavil', category: 'Person', company: 'Like Corporation', email: '123clooab@email.com', owner: 'Jane Smith', source: 'instagram.com/', status: 'Completed', action: 'Done' },
      { code: '#5000', name: 'Henry Cavil', category: 'Person', company: 'Like Corporation', email: '123clooab@email.com', owner: 'Jane Smith', source: 'instagram.com/', status: 'Completed', action: 'Done' },
    
    ]
  }
}
