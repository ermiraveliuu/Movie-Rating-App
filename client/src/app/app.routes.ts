import {Routes} from '@angular/router';
import {MovieLayoutComponent} from "./components/layouts/movie-layout/movie-layout.component";
import {LoginPageComponent} from "./components/pages/login-page/login-page.component";
import {HomePageComponent} from "./components/pages/home-page/home-page.component";

export const routes: Routes = [
  {path: '', component: HomePageComponent, children: [
      {path: '', component: MovieLayoutComponent}
    ]
  },
  {path: 'login', component: LoginPageComponent}
];
