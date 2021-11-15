import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { InscritEtudiantComponent } from './pages/Authentification/authentification_etudiant/inscrit-etudiant/inscrit-etudiant.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatTabsModule} from '@angular/material/tabs';

import { HomeEtudiantComponent } from './pages/etudiant/home-etudiant/home-etudiant.component';
import { HomeRecruteurComponent } from './pages/recruteur/home-recruteur/home-recruteur.component';
import { DashboardComponent } from './pages/admin/dashboard/dashboard.component';
import { InscritRecruteurComponent } from './pages/Authentification/authentification_recruteur/inscrit-recruteur/inscrit-recruteur.component';
import { LoginRecruteurComponent } from './pages/Authentification/authentification_recruteur/login-recruteur/login-recruteur.component';
import { LoginEtudiantComponent } from './pages/Authentification/authentification_etudiant/login-etudiant/login-etudiant.component';
import { LoginAdminComponent } from './pages/admin/login-admin/login-admin.component';
import { LoginComponent } from './pages/Authentification/login/login.component';


@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    InscritEtudiantComponent,
    HomeEtudiantComponent,
    HomeRecruteurComponent,
    DashboardComponent,
    InscritRecruteurComponent,
    LoginRecruteurComponent,
    LoginEtudiantComponent,
    LoginAdminComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,

    MatSnackBarModule,
    MatSlideToggleModule,
    MatTabsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
