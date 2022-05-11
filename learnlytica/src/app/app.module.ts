import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatSliderModule} from '@angular/material/slider';
import { MatDialogModule } from '@angular/material/dialog';
import { MatTabsModule} from '@angular/material/tabs';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { MainContainerComponent } from './components/main-container/main-container.component';
import { ListCourseComponent } from './components/list-course/list-course.component';
import { CourseComponent } from './components/course/course.component';
import { ServicesComponent } from './components/services/services.component';
import { ListContactComponent } from './components/list-contact/list-contact.component';
import { HomeComponent } from './components/home/home.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { AddressComponent } from './components/address/address.component';
import { ContactFormComponent } from './components/contact-form/contact-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './components/login/login.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { HttpClientModule } from '@angular/common/http';
import { ListProfilesComponent } from './list-profiles/list-profiles.component';
import { MaterialExampleModule } from './materials/materials.module';
import { DetailProfileComponent } from './detail-profile/detail-profile.component';
import { ReactiveComponent } from './components/reactive/reactive.component';
import { TitlePipe } from './pipes/title.pipe';
import { BracketPipe } from './pipes/bracket.pipe';
import { ThbsBackgroundDirective } from './directives/thbs-background.directive';
import { TemplateFormComponent } from './components/template-form/template-form.component';


@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    MainContainerComponent,
    ListCourseComponent,
    CourseComponent,
    ServicesComponent,
    ListContactComponent,
    HomeComponent,
    NotFoundComponent,
    AddressComponent,
    ContactFormComponent,
    LoginComponent,
    RegistrationComponent,
    ListProfilesComponent,
    DetailProfileComponent,
    ReactiveComponent,
    TitlePipe,
    BracketPipe,
    ThbsBackgroundDirective,
    TemplateFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    MatSliderModule,
    MatDialogModule,
    MatTabsModule,
    MaterialExampleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
