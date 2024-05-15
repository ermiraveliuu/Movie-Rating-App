import {
  Directive,
  ElementRef,
  inject,
  Input,
  OnInit,
  Renderer2,
} from '@angular/core';

@Directive({
  selector: '[setBackgroundImage]',
  standalone: true,
})
export class SetBackgroundImageDirective implements OnInit {
  @Input() imageUrl?: string;

  private elementRef = inject(ElementRef);
  private renderer = inject(Renderer2);

  protected styles?: Map<string, string>;

  // 'backgroundImage': `url(${this.imageUrl})`,

  ngOnInit() {
    this.styles = new Map<string, string>([
      ['backgroundImage', `url(${this.imageUrl})`],
      ['background-repeat', 'no-repeat'],
      ['background-size', 'cover'],
    ]);
    this.styles.forEach((value, key) => {
      this.renderer.setStyle(this.elementRef.nativeElement, key, value);
    });
  }
}
