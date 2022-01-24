import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Device } from '../shared/device.model';
import { DeviceService } from '../shared/device.service';
@Component({
  selector: 'app-device-list',
  templateUrl: './device-list.component.html',
  styleUrls: ['./device-list.component.scss'],
})
export class DeviceListComponent implements OnInit {
  public devices: Device[] = [];

  constructor(
    private deviceService: DeviceService,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    this.loadAll();
  }

  public delete(categoryId: number) {
    const mustDelete = confirm(
      'Are you sure you want to delete this category?'
    );

    if (mustDelete) {
      this.deviceService.delete(categoryId).subscribe(
        () => {
          this.toastr.success('Device deleted successfully!');
          this.devices = this.devices.filter(
            (element) => element.id !== categoryId
          );
        },

        () => this.toastr.error('Error to delete')
      );
    }
  }

  private loadAll() {
    this.deviceService.getAll().subscribe(
      (devices) => (this.devices = devices),
      (error) => this.toastr.error('Error to load data')
    );
  }
}
