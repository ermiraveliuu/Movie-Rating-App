import { HttpClientModule } from '@angular/common/http'
import { NgDompurifySanitizer } from '@tinkoff/ng-dompurify';

import {
  TUI_SANITIZER,
  TuiAlertModule,
  TuiDialogModule,
  TuiModeModule,
  TuiRootModule,
  TuiSvgModule,
  TuiThemeNightModule,
} from '@taiga-ui/core';
import { Component, inject, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { TuiAccordionModule } from '@taiga-ui/kit';
import { HeaderComponent } from './components/shared/header/header.component';
import { NgIf } from '@angular/common';
import { DarkModeService } from './services/dark-mode.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    TuiRootModule,
    TuiDialogModule,
    TuiAlertModule,
    TuiAccordionModule,
    HeaderComponent,
    TuiSvgModule,
    TuiThemeNightModule,
    TuiModeModule,
    NgIf,
    HttpClientModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  providers: [{ provide: TUI_SANITIZER, useClass: NgDompurifySanitizer }],
})
export class AppComponent implements OnInit {
  private readonly title = inject(Title);
  private readonly darkModeService = inject(DarkModeService);

  protected get darkMode(): boolean {
    return this.darkModeService.darkMode;
  }

  ngOnInit(): void {
    this.title.setTitle('Reel Review');
  }
}
