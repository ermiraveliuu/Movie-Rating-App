import { JsonPipe, NgForOf } from '@angular/common'
import { Component, inject, OnInit, signal } from '@angular/core'
import { ActivatedRoute, Router } from '@angular/router'
import { TuiLoaderModule, TuiScrollbarModule } from '@taiga-ui/core'
import { TuiPaginationModule } from '@taiga-ui/kit'
import { Movie } from '../../../models/movie.model'
import { MoviesService } from '../../../services/movies.service'
import { Filters } from '../../shared/filter-dialog/filter-dialog.component.dialog'
import { HeaderComponent } from '../../shared/header/header.component'
import { MovieCardComponent } from '../../shared/movie-card/movie-card.component'

@Component({
  selector: 'movie-layout',
  templateUrl: 'movie-layout.component.html',
  styleUrls: ['movie-layout.component.scss'],
  standalone: true,
  imports: [MovieCardComponent, NgForOf, JsonPipe, TuiScrollbarModule, HeaderComponent, TuiPaginationModule, TuiLoaderModule],
})
export class MovieLayoutComponent implements OnInit {
  public router = inject(Router)
  public route = inject(ActivatedRoute)
  public moviesService = inject(MoviesService)

  protected readonly showLoader = signal<boolean>(true);
  protected movies: Movie[] = []
  index = 0;

  protected goToMovieDetails(movie: any) {
    this.router.navigate(['movies', movie._id], { relativeTo: this.route })
  }

  ngOnInit() {
    this.moviesService.getMovies(this.index + 1).subscribe({
      next: movies => {
        this.showLoader.set(false);
        this.movies = movies.data
      },
    })
  }

  onFilter(filters: Filters) {
    this.index = 0
    this.showLoader.set(true);
    this.moviesService.getMovies(this.index + 1, filters.genreIds, filters.languageIds).subscribe({
      next: movies => {
        this.showLoader.set(false);
        this.movies = movies.data
      },
    })
  }


  goToPage(index: number): void {
    this.showLoader.set(true);
    this.index = index
    this.moviesService.getMovies(this.index + 1).subscribe({
      next: movies => {
        this.showLoader.set(false);
        this.movies = movies.data
        window.scroll({
          top: 0,
          left: 0,
        })
        },
    })
  }
}
