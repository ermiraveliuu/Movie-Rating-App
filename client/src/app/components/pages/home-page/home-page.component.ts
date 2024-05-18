import { Component } from '@angular/core'
import { BaseLayoutComponent } from '../../layouts/base-layout/base-layout.component'
import { MovieLayoutComponent } from '../../layouts/movie-layout/movie-layout.component'
import { MovieCardComponent } from '../../shared/movie-card/movie-card.component'

@Component({
  selector: 'home-page',
  templateUrl: 'home-page.component.html',
  styleUrls: ['home-page.component.scss'],
  standalone: true,
  imports: [MovieCardComponent, BaseLayoutComponent, MovieLayoutComponent],
})
export class HomePageComponent {}
