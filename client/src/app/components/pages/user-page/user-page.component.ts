import { Component, OnInit, inject, signal } from '@angular/core'
import { TuiSvgModule } from '@taiga-ui/core'
import { tuiIconBookmarkLarge } from '@taiga-ui/icons'
import { TuiAvatarModule, TuiIslandModule } from '@taiga-ui/kit'
import { Wishlist } from '../../../models/wishlist.model'
import { AvatarColorPipe } from '../../../pipes/avatar-color.pipe'
import { AuthService } from '../../../services/auth.service'
import { WishlistService } from '../../../services/wishlist.service'
import { HeaderComponent } from '../../shared/header/header.component'

@Component({
  templateUrl: 'user-page.component.html',
  styleUrls: ['user-page.component.scss'],
  standalone: true,
  imports: [HeaderComponent, TuiAvatarModule, AvatarColorPipe, TuiIslandModule, TuiSvgModule],
})
export class UserPageComponent implements OnInit {
  protected readonly authService = inject(AuthService)
  protected readonly wishlistService = inject(WishlistService)
  protected readonly tuiIconBookmarkLarge = tuiIconBookmarkLarge

  protected readonly user = this.authService.user
  protected readonly wishlist = signal<any>(null)

  ngOnInit() {
    this.wishlistService.getUserWishlist().subscribe({
      next: (wishlist) => {
        this.wishlist.set(wishlist);
        console.log(this.wishlist());
      }
    })
  }
}
