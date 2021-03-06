import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LinkoneComponent } from './linkone/linkone.component';
import { LoginComponent } from './login/login.component';
import { MusicComponent } from './music/music.component';
import { LoadingComponent } from './loading/loading.component';

const routes: Routes = [
  {path: '', redirectTo: '/login', pathMatch: 'full'},
  {path: 'linkone', component: LinkoneComponent},
  {path: 'home', component: HomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'music', component: MusicComponent},
  {path: 'loading', component: LoadingComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
