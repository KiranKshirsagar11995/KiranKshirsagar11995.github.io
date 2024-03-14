import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';  // Import FormsModule

import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FooterComponent } from './footer/footer.component';
import { FormComponent } from './form/form.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RegistrationFormComponent } from './registration-form/registration-form.component';
import { TeachersDataComponent } from './teachers-data/teachers-data.component';
@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    SidebarComponent,
    FooterComponent,
    AboutusComponent,
    NavbarComponent,
    RegistrationFormComponent,
    TeachersDataComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
