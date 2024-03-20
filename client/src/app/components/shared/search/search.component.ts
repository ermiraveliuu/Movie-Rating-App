import {Component} from "@angular/core";
import {TuiInputModule} from "@taiga-ui/kit";
import {TuiTextfieldControllerModule} from "@taiga-ui/core";
import {tuiIconSearch} from "@taiga-ui/icons";

@Component({
  selector: 'search',
  templateUrl: 'search.component.html',
  styleUrls: ['search.component.scss'],
  standalone: true,
  imports: [
    TuiInputModule,
    TuiTextfieldControllerModule
  ]
})
export class SearchComponent {

  protected readonly tuiIconSearch = tuiIconSearch;
}
