import { Component } from '@angular/core';
import { HeaderComponent } from '../../shared/header/header.component';
import { SidebarComponent } from '../../shared/sidebar/sidebar.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'base-layout',
  templateUrl: 'base-layout.component.html',
  styleUrls: ['base-layout.component.scss'],
  standalone: true,
  imports: [HeaderComponent, SidebarComponent, RouterOutlet],
})
export class BaseLayoutComponent {}
