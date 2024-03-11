import { Pipe, PipeTransform } from "@angular/core";

@Pipe({ 
  name: 'vehicleNameFormatter',
  standalone: true })
export class FormatPipe implements PipeTransform {
  transform(vehicleName: string) {
    return vehicleName.replace(/^Car[ ][0-9]+[ ]##[ ]/, "");
  }
}