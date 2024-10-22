import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private _HttpClient:HttpClient) { };

  getWeatherInfo(city:string):Observable<any>
  {
    return this._HttpClient.get<any>(`https://api.weatherapi.com/v1/forecast.json?key=14774fd4817d4d24b73145958242210&q=${city}&days=5`)
  }
}
