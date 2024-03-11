import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { TableModule } from 'primeng/table';
import { FormatPipe } from './filter.pipe';

@Component({
  selector: 'app-table',
  standalone: true,
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
  imports: [TableModule, CommonModule, FormatPipe]
})
export class TableComponent {

  @Input() columns: Array<any> = [];
  @Input() rows: Array<any> = [];
}
