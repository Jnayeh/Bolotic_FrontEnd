import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TokenService } from '../api/token.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  constructor(private router: Router, private tokenService: TokenService) { }

  ngOnInit(): void {
    var t = this.tokenService.decodedToken()
    if(t){
      if(t.role=="administrateur"){
      this.router.navigate(['/admin/dashboard'])
      }
      else if(t.role=="recruteur"){
        this.router.navigate(['/recruteur/home'])
        }
        else if(t.role=="etudiant"){
          this.router.navigate(['/etudiant/home'])
          }
    }
  }

  showSignUpDialog(){
    var modal = document.getElementById("signUp");
    
    if (modal) {
      modal.style.display = "block";
    }
  }

  cancel() {
    var signUpModal = document.getElementById("signUp");
    if (signUpModal) {
      signUpModal.style.display = "none";
    }
  }
}
