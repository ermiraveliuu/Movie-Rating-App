import { NgIf } from '@angular/common'
import { Component, inject } from '@angular/core'
import { ActivatedRoute, RouterLink } from '@angular/router'
import { TuiButtonModule, TuiHintModule, TuiSvgModule } from '@taiga-ui/core'
import { tuiIconBookmark, tuiIconFilm, tuiIconFilter, tuiIconLogIn, tuiIconMoon, tuiIconSun, tuiIconUser } from '@taiga-ui/icons'
import { AuthService } from '../../../services/auth.service'
import { DarkModeService } from '../../../services/dark-mode.service'
import { DialogService } from '../../../services/dialog.service'
import { FilterDialogComponent } from '../filter-dialog/filter-dialog.component.dialog'
import { SearchComponent } from '../search/search.component'

@Component({
  selector: 'app-header',
  templateUrl: 'header.component.html',
  styleUrls: ['header.component.scss'],
  standalone: true,
  imports: [TuiSvgModule, TuiButtonModule, SearchComponent, NgIf, RouterLink, TuiHintModule],
})
export class HeaderComponent {
  protected readonly tuiIconUser = tuiIconUser
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
    this.dialogService.open(FilterDialogComponent, { label: 'Filter' }).subscribe()
  }

  protected readonly tuiIconSun = tuiIconSun
  protected readonly tuiIconMoon = tuiIconMoon
  protected readonly tuiIconFilter = tuiIconFilter
  protected readonly tuiIconFilm = tuiIconFilm
  protected readonly tuiIconBookmark = tuiIconBookmark
  protected readonly tuiIconLogIn = tuiIconLogIn
}
