import { Component, OnInit } from '@angular/core';
import { SearchComponent } from '../search/search.component';
import { TableComponent } from '../table/table.component';
import { VehicleService } from 'src/app/core/vehicle/vehicle.service';

@Component({
  selector: 'app-overview',
  standalone: true,
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss'],
  imports: [SearchComponent, TableComponent]
})
export class OverviewComponent {
  columns: Array<Object> = [
    {name: "Name", accessor: 'name'},
    {name: "Manufacturer", accessor: 'manufacturer'},
    {name: "Model", accessor: 'model'},
    {name: "Year", accessor: 'year'},
    {name: "Type", accessor: 'type'},
    {name: "Fuel Type", accessor: 'fuelType'},
    {name: "License Plate", accessor: 'licensePlate'},
    {name: "Active", accessor: 'active'}];

  vehicles: Array<Object> = [];

  constructor(private vehicleService: VehicleService){

  const vehicles$ = vehicleService.getVehicles();

  vehicles$.subscribe(
      vehicles => {
        this.vehicles = vehicles.map(({mileage, price, color, ...relevantAttributes }) => relevantAttributes);}
    )
  }

  get(): void {

  }

  ngOnInit(): void {
    this.get();
    console.log(this.vehicles);
  }
}
