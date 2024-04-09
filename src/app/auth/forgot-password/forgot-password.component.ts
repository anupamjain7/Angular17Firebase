import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../shared/auth.service';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-forgot-password',
  standalone: true,
  imports: [FormsModule, RouterModule, CommonModule],
  
  templateUrl: './forgot-password.component.html',
  styleUrl: './forgot-password.component.scss'
})
export class ForgotPasswordComponent implements OnInit{

email : string = '';

constructor(private auth: AuthService){
}
  ngOnInit(): void {
    // throw new Error('Method not implemented.');
  }
  
  forgotPassword(){
      this.auth.forgotPassword(this.email);
      this.email = '';
  }

}

