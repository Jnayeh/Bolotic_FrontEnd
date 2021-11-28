import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthAdminGuard } from './helpers/auth-admin.guard';
import { AuthEtudiantGuard } from './helpers/auth-etudiant.guard';
import { AuthRecruteurGuard } from './helpers/auth-recruteur.guard';

import { DashboardComponent } from './pages/admin/dashboard/dashboard.component';
import { LoginAdminComponent } from './pages/admin/login-admin/login-admin.component';
import { InscritEtudiantComponent } from './pages/Authentification/authentification_etudiant/inscrit-etudiant/inscrit-etudiant.component';
import { LoginEtudiantComponent } from './pages/Authentification/authentification_etudiant/login-etudiant/login-etudiant.component';
import { InscritRecruteurComponent } from './pages/Authentification/authentification_recruteur/inscrit-recruteur/inscrit-recruteur.component';
import { LoginRecruteurComponent } from './pages/Authentification/authentification_recruteur/login-recruteur/login-recruteur.component';
import { LoginComponent } from './pages/Authentification/login/login.component';
import { ConsulterRecruteurComponent } from './pages/etudiant/consulter-recruteur/consulter-recruteur.component';
import { DemandeBoulotComponent } from './pages/etudiant/demande-boulot/demande-boulot.component';
import { HomeEtudiantComponent } from './pages/etudiant/home-etudiant/home-etudiant.component';
import { AjoutBoulotComponent } from './pages/recruteur/ajout-boulot/ajout-boulot.component';
import { HomeRecruteurComponent } from './pages/recruteur/home-recruteur/home-recruteur.component';
import { WelcomeComponent } from './welcome/welcome.component';

const routes: Routes = [
  { path: '', component: WelcomeComponent },
  { path: 'SignUpEtudiant', component: InscritEtudiantComponent },
  { path: 'SignUpRecruteur', component: InscritRecruteurComponent },
  { path: 'LoginAdmin', component: LoginAdminComponent },
  { path: 'LogIn', component: LoginComponent },

  {
    path: 'etudiant',
    children: [
      { path: 'home', component: HomeEtudiantComponent },
      { path: 'profil', component: WelcomeComponent },
      { path: 'avis', component: WelcomeComponent },
      { path: 'carte', component: WelcomeComponent },
      { path: 'demandeboulot/:id', component:DemandeBoulotComponent},
      { path: 'consulter/recruteurs', component:ConsulterRecruteurComponent}

    ],
  },
  {
    path: 'recruteur',canActivate: [AuthRecruteurGuard],
    children: [
      { path: 'home', component: HomeRecruteurComponent },
      { path: 'profil', component: WelcomeComponent },
      {
        path: 'bolos', component: AjoutBoulotComponent,
        children: [
          { path: 'ajout', component: AjoutBoulotComponent},
          { path: ':id', component: WelcomeComponent },
          { path: 'modifier/:id', component: WelcomeComponent }
        ],
      },
      { path: 'avis', component: WelcomeComponent },
      { path: 'carte', component: WelcomeComponent },

    ],
  },
  {
    path: 'admin', canActivate: [AuthAdminGuard],
    children: [
      { path: 'dashboard', component: DashboardComponent },
      { path: 'profil', component: WelcomeComponent },
      { path: 'bolos', component: WelcomeComponent },
      { path: 'avis', component: WelcomeComponent },
      { path: 'contrats', component: WelcomeComponent },
      { path: 'reports', component: WelcomeComponent },

    ],
  },
  { path: '**', redirectTo:'' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
