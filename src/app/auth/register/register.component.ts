import { Component } from '@angular/core';
import { AuthService } from '../../shared/auth.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {
  email : string = '';
  password : string = '';

  constructor(private auth : AuthService) {}

  ngOnInit(): void {

  }

  register() {
   if(this.email == ''){
   alert('Please enter email');
   return; 
   }


   if(this.password == ''){
     alert('Please enter email');
     return; 
     }
   
   this.auth.register(this.email, this.password);
   this.email = '';
   this.password = '';
}
}