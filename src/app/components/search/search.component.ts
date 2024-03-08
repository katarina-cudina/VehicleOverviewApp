import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { noop } from 'rxjs';


@Component({
  selector: 'app-search',
  standalone: true,
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
  imports: [InputTextModule, FormsModule]
})
export class SearchComponent {
  @Output() search = new EventEmitter();
  @Input() searchText:string = '';

  onSearch() {
    console.log(this.searchText);
    this.search.emit(this.searchText);
  }
}
