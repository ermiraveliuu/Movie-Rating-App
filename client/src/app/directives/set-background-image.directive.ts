import {
  Directive,
  ElementRef,
  inject,
  Input, OnChanges,
  OnInit,
  Renderer2, SimpleChanges,
} from '@angular/core'

@Directive({
  selector: '[setBackgroundImage]',
  standalone: true,
})
export class SetBackgroundImageDirective implements OnChanges {
  @Input() imageUrl?: string;

  private elementRef = inject(ElementRef);
  private renderer = inject(Renderer2);

  protected styles?: Map<string, string>;

  ngOnChanges(_changes: SimpleChanges) {
    this.styles = new Map<string, string>([
      ['backgroundImage', `url(https://media.themoviedb.org/t/p/w1920_and_h800_multi_faces/${this.imageUrl})`],
      ['background-repeat', 'no-repeat'],
      ['background-size', 'cover'],
    ]);
    this.styles.forEach((value, key) => {
      this.renderer.setStyle(this.elementRef.nativeElement, key, value);
    });
  }
}
