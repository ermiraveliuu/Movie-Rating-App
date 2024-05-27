import { Component } from '@angular/core'
import { TuiAvatarModule } from '@taiga-ui/kit'
import { HeaderComponent } from '../../shared/header/header.component'

@Component({
  templateUrl: 'user-page.component.html',
  styleUrls: ['user-page.component.scss'],
  standalone: true,
  imports: [HeaderComponent, TuiAvatarModule],
})
export class UserPageComponent {}
