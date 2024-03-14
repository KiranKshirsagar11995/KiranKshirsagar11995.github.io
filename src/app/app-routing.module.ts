import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { FormComponent } from './form/form.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FooterComponent } from './footer/footer.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { RegistrationFormComponent } from './registration-form/registration-form.component';
import { TeachersDataComponent } from './teachers-data/teachers-data.component';

const routes: Routes = [
  { path: 'app-root', component: AppComponent },
  { path: '', component: FormComponent },
  { path: '', component: SidebarComponent },
  { path: 'about-us', component: AboutusComponent },
  { path: 'app-footer', component: FooterComponent },
  { path: 'app-registration-form', component: RegistrationFormComponent },
  { path: 'app-teachers-data', component: TeachersDataComponent },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
