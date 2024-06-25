import { NgForOf } from '@angular/common'
import { ChangeDetectionStrategy, Component, Inject, OnInit } from '@angular/core'
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms'
import {
  TuiButtonModule,
  TuiDataListModule,
  TuiDialogContext,
  TuiLabelModule,
  TuiTextfieldControllerModule,
} from '@taiga-ui/core'
import {
  TuiDataListWrapperModule,
  TuiFilterByInputPipeModule,
  TuiMultiSelectModule,
  TuiStringifyContentPipeModule,
} from '@taiga-ui/kit'
import { POLYMORPHEUS_CONTEXT } from '@tinkoff/ng-polymorpheus'
import { forkJoin } from 'rxjs'
import { Genre } from '../../../models/genre.model'
import { Language } from '../../../models/language.model'
import { GenresService } from '../../../services/genres.service'
import { LanguageService } from '../../../services/language.service'

@Component({
  selector: 'filter-dialog',
  templateUrl: './filter-dialog.component.html',
  styleUrls: ['./filter-dialog.component.scss'],
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    TuiMultiSelectModule,
    TuiDataListWrapperModule,
    ReactiveFormsModule,
    TuiTextfieldControllerModule,
    TuiLabelModule,
    TuiButtonModule,
    TuiStringifyContentPipeModule,
    TuiFilterByInputPipeModule,
    TuiDataListModule,
    NgForOf,
  ],
})
export class FilterDialogComponent implements OnInit {
  protected readonly form = new FormGroup({
    genre: new FormControl(null),
    language: new FormControl(null),
  })
  protected genres: Genre[] = [];
  protected languages: Language[] = [];

  constructor(
    @Inject(POLYMORPHEUS_CONTEXT)
    private readonly context: TuiDialogContext<any, any>,
    private genresService: GenresService,
    private languageService: LanguageService
  ) {}

  ngOnInit() {
    forkJoin(
      {genres: this.genresService.getGenres(), languages: this.languageService.getLanguages()}
    ).subscribe({
      next: ({genres, languages}) => {
        this.genres = genres.data;
        this.languages = languages.data;
      }
    })
  }

  readonly stringify = (item: Genre): string => `${item.name}`

  save() {
    console.log(this.form.value)
    this.context.completeWith(null)
  }

  close() {
    this.context.completeWith(null)
  }
}
