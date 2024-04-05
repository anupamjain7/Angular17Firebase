import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth'
import { Router } from '@angular/router';
// import { AngularFirestore } from '@angular/fire/firestore';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private fireauth: AngularFireAuth, private router: Router) { }

  //login method

  login(email: string, password: string) {
    this.fireauth.signInWithEmailAndPassword(email, password).then(() => {
      localStorage.setItem('token', 'true');
      this.router.navigate(['dashboard'])
    }, err => {
      alert('Somthing went wronge');
      this.router.navigate(['/login']);
    })
  }

  //register method
  register(email: string, password: string) {
    this.fireauth.createUserWithEmailAndPassword(email, password).then(() => {
      alert('Registration Successful')
      this.router.navigate(['/login'])
    }, err => {
      alert('Somthing went wronge');
      this.router.navigate(['/register']);
    })
  }

  //logout
  logout() {
    // this.fireauth.signOut().then(() => {
    //    localStorage.removeItem('token');
    //    this.router.navigate(['/login']);
    // }, err => {
    //   alert(err.message)
    // })
    this.fireauth.signOut();
    localStorage.removeItem('token');
    this.router.navigate(['/login']);

  }


}
