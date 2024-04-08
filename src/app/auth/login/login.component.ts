import { Component } from '@angular/core';
import { AuthService } from '../../shared/auth.service';
import { AngularFireAuth } from '@angular/fire/compat/auth'
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
   email : string = '';
   password : string = '';

   constructor(private auth : AuthService) {}

   ngOnInit(): void {

   }

   login() {
    if(this.email == ''){
    alert('Please enter email');
    return; 
    }


    if(this.password == ''){
      alert('Please enter email');
      return; 
      }
    
    this.auth.login(this.email, this.password);
    this.email = '';
    this.password = '';

  }
}
