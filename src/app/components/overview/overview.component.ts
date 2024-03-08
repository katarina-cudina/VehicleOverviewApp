import { Component, OnInit } from '@angular/core';
import { SearchComponent } from '../search/search.component';
import { TableComponent } from '../table/table.component';
import { VehicleService } from 'src/app/core/vehicle/vehicle.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-overview',
  standalone: true,
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss'],
  imports: [SearchComponent, TableComponent,FormsModule]
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

  vehicles: Array<any> = [];
  filteredVehicles: Array<any> = [];
  searchText: string = '';

  constructor(private vehicleService: VehicleService){

  const vehicles$ = vehicleService.getVehicles();

  vehicles$.subscribe(
      vehicles => {
        this.vehicles = vehicles.map(({mileage, price, color, ...relevantAttributes }) => relevantAttributes);
        this.filteredVehicles = this.vehicles;}
    )
  }

  filterVehicles(query: string) {
    if(!query)
      this.filteredVehicles = this.vehicles;
    else
      this.filteredVehicles = this.vehicles.filter(vehicle => {
      const searchQuery = query.toLocaleLowerCase();
      return Object.keys(vehicle).some(key => String(vehicle[key]).toLocaleLowerCase().includes(searchQuery))
    });
  } 

  }
