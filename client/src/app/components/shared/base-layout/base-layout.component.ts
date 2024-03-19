import {Component} from "@angular/core";
import {HeaderComponent} from "../header/header.component";
import {SidebarComponent} from "../sidebar/sidebar.component";

@Component({
  selector: 'base-layout',
  templateUrl: 'base-layout.component.html',
  styleUrls: ['base-layout.component.scss'],
  standalone: true,
  imports: [HeaderComponent, SidebarComponent]
})
export class BaseLayoutComponent {

}
