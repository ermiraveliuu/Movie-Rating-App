import { Routes } from '@angular/router'
import { MovieLayoutComponent } from './components/layouts/movie-layout/movie-layout.component'
import { LoginPageComponent } from './components/pages/login-page/login-page.component'
import { MoviePageComponent } from './components/pages/movie-page/movie-page.component'
import { SignupPageComponent } from './components/pages/signup-page/signup-page.component'

export const routes: Routes = [
  {
    path: '',
    component: MovieLayoutComponent,
    data: { allowSearch: true, allowFiltering: true },
  },
  { path: 'movies/:id', component: MoviePageComponent },
  { path: 'login', component: LoginPageComponent },
  { path: 'signup', component: SignupPageComponent },
]
