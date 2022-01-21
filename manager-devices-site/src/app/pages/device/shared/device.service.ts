import { Injectable } from '@angular/core';
import { Device } from './device.model';

import { HttpClient } from '@angular/common/http';
import { map, catchError, Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DeviceService {
  private apiPath = 'api/devices';

  constructor(private http: HttpClient) {}

  public getAll(): Observable<Device[]> {
    return this.http
      .get(this.apiPath)
      .pipe(catchError(this.handleError), map(this.jsonDataToDevices));
  }

  public getById(id: number): Observable<Device> {
    const url = `${this.apiPath}/${id}`;

    return this.http
      .get(url)
      .pipe(map(this.jsonDataToDevice), catchError(this.handleError));
  }

  public save(device: Device): Observable<Device> {
    return this.http
      .post(this.apiPath, device)
      .pipe(map(this.jsonDataToDevice), catchError(this.handleError));
  }

  public update(device: Device): Observable<Device> {
    const url = `${this.apiPath}/${device.id}`;

    return this.http.put(url, device).pipe(
      catchError(this.handleError),
      map(() => device)
    );
  }

  public delete(id: number): Observable<boolean> {
    const url = `${this.apiPath}/${id}`;

    return this.http.delete(url).pipe(
      catchError(this.handleError),
      map(() => true)
    );
  }

  private jsonDataToDevice(jsonData: any): Device {
    return jsonData as Device;
  }

  private jsonDataToDevices(jsonData: any[]): Device[] {
    const devices: Device[] = [];
    jsonData.forEach((element) => devices.push(element as Device));

    return devices;
  }

  private handleError(error: any): Observable<any> {
    console.error(`Error request --> ${JSON.stringify(error)}`);
    return throwError(error);
  }
}
