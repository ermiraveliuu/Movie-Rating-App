import {Routes} from '@angular/router';
import {BaseLayoutComponent} from "./components/layouts/base-layout/base-layout.component";
import {MovieLayoutComponent} from "./components/layouts/movie-layout/movie-layout.component";

export const routes: Routes = [
  {path: '', component: BaseLayoutComponent, children: [
      {path: '', component: MovieLayoutComponent}
    ]
  }
];
