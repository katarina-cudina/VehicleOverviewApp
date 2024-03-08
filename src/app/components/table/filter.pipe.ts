import { Pipe, PipeTransform } from "@angular/core";

Pipe({ name: 'vehicleFilter' })
export class FilterPipe implements PipeTransform {
  transform(vehicles: any[], searchText: string): any[] {
    console.log('ovde se nesto dogadja');
    if (!vehicles) {
      return [];
    }
    if (!searchText) {
      return vehicles;
    }
    searchText = searchText.toLocaleLowerCase();

    return vehicles.filter(vehicle => {
      return vehicle.toLocaleLowerCase().includes(searchText);
    });
  }
}