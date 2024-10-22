import { Component, OnInit } from '@angular/core';
import { DataService } from './services/data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'Weather';
  cityName:string = '';
  location: any;
  forecastDays: any[] = [];
  current: any;
  ngOnInit(): void {
    this.getWeather();
  }
  constructor(private _DataService: DataService) {}
  getWeather() {
    this._DataService.getWeatherInfo(this.cityName?this.cityName:'cairo').subscribe({
      next: (data) => {
        console.log(data);
        this.location = data.location;
        this.forecastDays = data.forecast.forecastday;
        this.current = data.current;
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
}
