import { Component,AfterViewInit  } from '@angular/core';
import { Chart } from 'chart.js/auto';


@Component({
  selector: 'app-home-empleado',
  templateUrl: './home-empleado.component.html',
  styleUrl: './home-empleado.component.css'
})
export class HomeEmpleadoComponent implements AfterViewInit{

  ngAfterViewInit() {
    this.createEarningsChart();
    this.createRevenueChart();
  }

  createEarningsChart() {
    new Chart('earningsChart', {  
      type: 'line',
      data: {
        labels: ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        datasets: [
          { 
            label: 'Solicitudes',
            data: [20000, 20000, 15000, 30000, 25000, 40000, 35000, 45000, 40000, 50000, 55000, 60000],
            borderColor: 'blue',
            fill: false
          }
        ]
      }
    });
  }

  createRevenueChart() {
    new Chart('revenueChart', {
      type: 'doughnut',
      data: {
        labels: ['Espera', 'Aceptada', 'Rechazada'],
        datasets: [
          {
            label: 'Solicitud',
            data: [50, 30, 20],
            backgroundColor: ['#007bff', '#28a745', '#dc3545']
          }
        ]
      }
    });
  }
}