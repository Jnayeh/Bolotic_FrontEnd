import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { InscritEtudiantComponent } from './pages/Authentification/authentification_etudiant/inscrit-etudiant/inscrit-etudiant.component';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    InscritEtudiantComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
