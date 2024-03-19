import { NgDompurifySanitizer } from "@tinkoff/ng-dompurify";
import {
  TuiRootModule,
  TuiDialogModule,
  TuiAlertModule,
  TUI_SANITIZER,
  TuiSvgModule,
  TuiThemeNightModule, TuiModeModule
} from "@taiga-ui/core";
import {Component, inject, OnInit} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {Title} from "@angular/platform-browser";
import {TuiAccordionModule} from "@taiga-ui/kit";
import {HeaderComponent} from "./components/shared/header/header.component";
import {tuiIconHeartLarge} from "@taiga-ui/icons";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TuiRootModule, TuiDialogModule, TuiAlertModule, TuiAccordionModule, HeaderComponent, TuiSvgModule, TuiThemeNightModule,
    TuiModeModule,],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
    providers: [{provide: TUI_SANITIZER, useClass: NgDompurifySanitizer}]
})
export class AppComponent implements OnInit {
  private readonly title = inject(Title);

  ngOnInit(): void {
    this.title.setTitle('Reel Review')
  }

  protected readonly tuiIconHeartLarge = tuiIconHeartLarge;
}
