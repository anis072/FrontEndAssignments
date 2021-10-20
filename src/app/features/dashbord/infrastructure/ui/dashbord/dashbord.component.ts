import { Component, OnInit, ViewChild } from '@angular/core';

import { Menu } from '../../../domains/models/menu.model';
import {
  ChartComponent,
  ApexAxisChartSeries,
  ApexChart,
  ApexXAxis,
  ApexTitleSubtitle,
  ApexNonAxisChartSeries,
  ApexResponsive,
  ApexStroke,
  ApexTooltip,
  ApexDataLabels,
} from 'ng-apexcharts';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { lineOptions } from '../../../domains/models/lineOptions.model';
import { pieOptions } from '../../../domains/models/pieOptions.model';
import { lineDoubleOptions } from '../../../domains/models/lineDoubleOptions.model';

import { MessageService } from '../../repositories/message.service';
export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA = [
  { name: 'Hydrogen', weight: 1.0079, symbol: 'H' },
  { name: 'Helium', weight: 4.0026, symbol: 'He' },
  { name: 'Lithium', weight: 6.941, symbol: 'Li' },
  { name: 'Beryllium', weight: 9.0122, symbol: 'Be' },
  { name: 'Boron', weight: 10.811, symbol: 'B' },
  { name: 'Carbon', weight: 12.0107, symbol: 'C' },
  { name: 'Nitrogen', weight: 14.0067, symbol: 'N' },
  { name: 'Oxygen', weight: 15.9994, symbol: 'O' },
  { name: 'Fluorine', weight: 18.9984, symbol: 'F' },
  { name: 'Neon', weight: 20.1797, symbol: 'Ne' },
];

@Component({
  selector: 'app-dashbord',
  templateUrl: './dashbord.component.html',
  styleUrls: ['./dashbord.component.scss'],
})
export class DashbordComponent implements OnInit {
  @ViewChild('chart') chart!: ChartComponent;
  @ViewChild('chartPie') chartPie!: ChartComponent;
  public chartOptions: Partial<lineOptions> | any;
  public chartOptionsPie: Partial<pieOptions> | any;
  public chartOptionsLab: Partial<lineDoubleOptions> | any;
  displayedColumns: string[] = ['Sender name', 'Message', 'Date'];
  @ViewChild(MatSort) sort!: MatSort;
  messages$!: any;
  dataSource !: any;
  lineData !: number[];
  lineCategory !: string[];
  pieData !: number[];
  pieCategory !: string[];
  doubleChartsData !: number[];
  doubleChartsData1 !: number[];
  doublechartsCategorie !: number[];
  constructor(private messageService: MessageService) {
   //
  }

  ngOnInit(): void {
    this.getMessages();
    this.getLineStats()
    this.getPieStats();
    this.getDoubleStats();
   // this.getPieStats();
  }
  getMessages(): void {
    this.messageService.getMessages().subscribe({
      next: (data) => {
        this.messages$ = data;
        this.dataSource = new MatTableDataSource(this.messages$);
        this.dataSource.sort = this.sort;
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
  getLineStats():void{
    this.messageService.getLineStats().subscribe({
      next:data=>{
        this.chartOptions = {
          series: [
            {
              name: 'Messages',
              data: [...data[0].data]
            },
          ],
          chart: {
            height: 350,
            type: 'bar',
          },
          title: {
            text: '',
          },
          xaxis: {
            categories:[...data[0].categories]
          },
        };
        this.lineData = data;
        this.lineCategory = data.categories;
      },
      error:err=>{
        console.log(err);
      }
    })
  };
  getPieStats():void{
    this.messageService.getPieStats().subscribe({
      next:data=>{
        this.chartOptionsPie = {
          series: [...data[0].data],
          chart: {
            type: 'donut',
          },
          labels: [...data[0].lables],
          responsive: [
            {
              breakpoint: 480,
              options: {
                chart: {
                  width: 200,
                },
                legend: {
                  position: 'bottom',
                },
              },
            },
          ],
        };
        this.pieData = data;
      }
    })
  }
  getDoubleStats():void{
    this.messageService.getDoubleStats().subscribe({
      next:data=>{
        this.chartOptionsLab = {
          series: [
            {
              name: 'series1',
              data:[...data[0]?.data],
            },
            {
              name: 'series2',
              data: [...data[0]?.data2],
            },
          ],
          chart: {
            height: 350,
            type: 'area',
          },
          dataLabels: {
            enabled: false,
          },
          stroke: {
            curve: 'smooth',
          },
          xaxis: {
            type: 'datetime',
            categories:[...data[0]?.categories]
          },
          tooltip: {
            x: {
              format: 'dd/MM/yy HH:mm',
            },
          },
        };
        this.doubleChartsData = data;
      }
    })
  }
}
