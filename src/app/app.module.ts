import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { AuthInterceptor } from './helpers/auth.interceptor';
import { ErrorInterceptor } from './helpers/error.interceptor';


import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatTabsModule} from '@angular/material/tabs';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatRippleModule} from '@angular/material/core';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatBadgeModule} from '@angular/material/badge';
import {MatSelectModule} from '@angular/material/select';
import {MatChipsModule} from '@angular/material/chips';


import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { InscritEtudiantComponent } from './pages/Authentification/authentification_etudiant/inscrit-etudiant/inscrit-etudiant.component';
import { HomeEtudiantComponent } from './pages/etudiant/home-etudiant/home-etudiant.component';
import { HomeRecruteurComponent } from './pages/recruteur/home-recruteur/home-recruteur.component';
import { DashboardComponent } from './pages/admin/dashboard/dashboard.component';
import { InscritRecruteurComponent } from './pages/Authentification/authentification_recruteur/inscrit-recruteur/inscrit-recruteur.component';
import { LoginRecruteurComponent } from './pages/Authentification/authentification_recruteur/login-recruteur/login-recruteur.component';
import { LoginEtudiantComponent } from './pages/Authentification/authentification_etudiant/login-etudiant/login-etudiant.component';
import { LoginAdminComponent } from './pages/admin/login-admin/login-admin.component';
import { LoginComponent } from './pages/Authentification/login/login.component';
import { AjoutBoulotComponent } from './pages/recruteur/ajout-boulot/ajout-boulot.component';
import { DemandeBoulotComponent } from './pages/etudiant/demande-boulot/demande-boulot.component';
import { ConsulterRecruteurComponent } from './pages/etudiant/consulter-recruteur/consulter-recruteur.component';
import { ProfileEtudiantComponent } from './pages/etudiant/profile-etudiant/profile-etudiant.component';
import { RecruteurComponent } from './pages/recruteur/recruteur.component';
import { EtudiantComponent } from './pages/etudiant/etudiant.component';
import { DemandesComponent } from './pages/recruteur/demandes/demandes.component';





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
    AjoutBoulotComponent,
    DemandeBoulotComponent,
    ConsulterRecruteurComponent,
    ProfileEtudiantComponent,
    RecruteurComponent,
    EtudiantComponent,
    DemandesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    
    MatIconModule,
    MatSnackBarModule,
    MatSlideToggleModule,
    MatTabsModule,
    MatButtonModule,
    MatRippleModule,
    MatSidenavModule,
    MatBadgeModule,
    MatSelectModule,
    MatChipsModule,
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
