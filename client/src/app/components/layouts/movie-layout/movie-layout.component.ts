import { JsonPipe, NgForOf } from '@angular/common'
import { Component, inject, OnInit, signal } from '@angular/core'
import { ActivatedRoute, Router } from '@angular/router'
import { TuiLoaderModule, TuiScrollbarModule } from '@taiga-ui/core'
import { TuiPaginationModule } from '@taiga-ui/kit'
import { mergeMap, startWith, Subject, tap } from 'rxjs'
import { ApiResponse } from '../../../models/api-response'
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

  protected readonly showLoader = signal<boolean>(true)
  protected readonly movies = signal<Movie[]>([]);
  protected readonly index = signal<number>(0);
  protected readonly pages = signal<number>(null);
  protected readonly filters = signal<Filters>(null);
  protected readonly searchValue = signal<string>(null);

  protected readonly refreshPage$ = new Subject<void>();

  protected goToMovieDetails(movie: any) {
    this.router.navigate(['movies', movie._id], { relativeTo: this.route })
  }

  ngOnInit() {
    this.refreshPage$.pipe(
      startWith(null),
      tap(() => this.showLoader.set(true)),
      mergeMap(() => this.moviesService.getMovies({
        page: this.index() + 1,
        searchValue: this.searchValue(),
        genreIds: this.filters()?.genreIds,
        languageIds: this.filters()?.languageIds,
      }))
    ).subscribe({
      next: res => this.syncView(res)
    })
  }

  onFilter(filters: Filters) {
    if(!filters?.genreIds && !filters?.languageIds) return;
    this.index.set(0);
    this.filters.set(filters);
    this.refreshPage$.next();
  }

  onSearch(searchValue: string) {
    this.index.set(0);
    this.searchValue.set(searchValue);
    this.refreshPage$.next();
  }

  goToPage(index: number): void {
    this.index.set(index);
    this.refreshPage$.next();
  }

  syncView(res: ApiResponse<Movie>) {
    this.showLoader.set(false)
    this.movies.set(res.data);
    this.pages.set(res.pageCount);
    window.scroll({
      top: 0,
      left: 0,
    });
  }
}
