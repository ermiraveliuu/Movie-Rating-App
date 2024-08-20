import { JsonPipe, NgIf } from '@angular/common'
import { Component, EventEmitter, inject, Output } from '@angular/core'
import { ActivatedRoute, RouterLink } from '@angular/router'
import {
  TuiButtonModule,
  TuiDataListModule,
  TuiHintModule,
  TuiHostedDropdownModule,
  TuiSvgModule,
} from '@taiga-ui/core'
import { tuiIconBookmark, tuiIconFilm, tuiIconFilter, tuiIconLogIn, tuiIconMoon, tuiIconSun, tuiIconUser } from '@taiga-ui/icons'
import { TuiAvatarModule } from '@taiga-ui/kit'
import { Subject } from 'rxjs'
import { AvatarColorPipe } from '../../../pipes/avatar-color.pipe'
import { AuthService } from '../../../services/auth.service'
import { DarkModeService } from '../../../services/dark-mode.service'
import { DialogService } from '../../../services/dialog.service'
import { FilterDialogComponent, Filters } from '../filter-dialog/filter-dialog.component.dialog'
import { SearchComponent } from '../search/search.component';

@Component({
  selector: 'app-header',
  templateUrl: 'header.component.html',
  styleUrls: ['header.component.scss'],
  standalone: true,
  imports: [
    TuiSvgModule,
    TuiButtonModule,
    SearchComponent,
    NgIf,
    RouterLink,
    TuiHintModule,
    TuiAvatarModule,
    JsonPipe,
    TuiHostedDropdownModule,
    TuiDataListModule,
    AvatarColorPipe,
  ],
})
export class HeaderComponent {
  @Output() filtered = new EventEmitter<Filters>()
  @Output() searched = new Subject<string>()

  protected readonly allowSearch: boolean
  protected readonly allowFiltering: boolean

  protected readonly darkModeService = inject(DarkModeService)
  protected readonly authService = inject(AuthService)
  protected readonly dialogService = inject(DialogService)
  protected readonly route = inject(ActivatedRoute)

  constructor() {
    this.allowSearch = this.route.snapshot.data['allowSearch'] ?? false
    this.allowFiltering = this.route.snapshot.data['allowFiltering'] ?? false
  }

  protected get darkMode() {
    return this.darkModeService.darkMode
  }

  protected toggleDarkMode() {
    this.darkModeService.toggleDarkMode()
  }

  protected openFilterDialog(): void {
    this.dialogService.open(FilterDialogComponent, { label: 'Filter' }).subscribe({
      next: (filters: Filters) => {
        this.filtered.emit(filters)
      },
    })
  }

  protected readonly tuiIconSun = tuiIconSun
  protected readonly tuiIconMoon = tuiIconMoon
  protected readonly tuiIconFilter = tuiIconFilter
  protected readonly tuiIconFilm = tuiIconFilm
  protected readonly tuiIconBookmark = tuiIconBookmark
  protected readonly tuiIconLogIn = tuiIconLogIn
}
