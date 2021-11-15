import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
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
