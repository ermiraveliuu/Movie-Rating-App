import { Pipe, PipeTransform } from '@angular/core';
import * as CryptoJS from 'crypto-js';

@Pipe({
  name: 'avatarColor',
  standalone: true,
})
export class AvatarColorPipe implements PipeTransform {
  transform(user): string {
    const hash = CryptoJS.MD5(user.firstName + user.lastName).toString(CryptoJS.enc.Hex);
    return `#${hash.substring(0, 6)}`;
  }
}
