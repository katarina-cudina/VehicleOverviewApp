import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { TableModule } from 'primeng/table';

@Component({
  selector: 'app-table',
  standalone: true,
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
  imports: [TableModule, CommonModule,]
})
export class TableComponent {

  @Input() columns: Array<any> = [];
  @Input() rows: Array<any> = [];
}
