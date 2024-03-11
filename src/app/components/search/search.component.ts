import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';

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

  onSearch = () =>{
    this.search.emit(this.searchText);
  }
}
