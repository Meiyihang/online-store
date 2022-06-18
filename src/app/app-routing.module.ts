import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactusComponent } from 'src/pages/contactus/contactus.component';
import { HomeComponent } from 'src/pages/home/home.component';
import { KidsComponent } from 'src/pages/kids/kids.component';
import { MenComponent } from 'src/pages/men/men.component';
import { OurpoliciesComponent } from 'src/pages/ourpolicies/ourpolicies.component';
import { WomenComponent } from 'src/pages/women/women.component';
import { FormComponentComponent } from './form-component/form-component/form-component.component';
import { LoginComponent } from './login/login.component';

export const routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'men', component: MenComponent },
    { path: 'women', component: WomenComponent },
    { path: 'kids', component: KidsComponent },
    { path: 'login', component: LoginComponent },
    { path: 'signup', component: FormComponentComponent},
    { path: 'contactus', component: ContactusComponent },
    { path: 'ourpolicies', component: OurpoliciesComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
