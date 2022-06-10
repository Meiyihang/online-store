import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from 'src/pages/home/home.component';
import { KidsComponent } from 'src/pages/kids/kids.component';
import { MenComponent } from 'src/pages/men/men.component';
import { WomenComponent } from 'src/pages/women/women.component';
import { LoginComponent } from './login/login.component';

export const routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: '',
    redirectTo: '/home',
    pathMatch: 'full' },
    { path: 'men', component: MenComponent },
    { path: 'women', component: WomenComponent },
    { path: 'kids', component: KidsComponent },
    { path: 'login', component: LoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
