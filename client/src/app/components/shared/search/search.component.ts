import { Component, Output } from '@angular/core'
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms'
import { TuiTextfieldControllerModule } from '@taiga-ui/core'
import { tuiIconSearch } from '@taiga-ui/icons'
import { TuiInputModule } from '@taiga-ui/kit'
import { Subject } from 'rxjs'

@Component({
  selector: 'app-search',
  templateUrl: 'search.component.html',
  styleUrls: ['search.component.scss'],
  standalone: true,
  imports: [TuiInputModule, TuiTextfieldControllerModule, FormsModule, ReactiveFormsModule],
})
export class SearchComponent {
  protected readonly tuiIconSearch = tuiIconSearch
  protected searchValue = new FormControl(null)
  
  @Output() searched = new Subject<string>()

  constructor() {
    this.searchValue.valueChanges.subscribe(value => {
      this.searched.next(value ?? '')
    })
  }
}
