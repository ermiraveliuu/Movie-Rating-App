import {Component} from "@angular/core";
import {TuiInputModule} from "@taiga-ui/kit";
import {TuiTextfieldControllerModule} from "@taiga-ui/core";

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

}
