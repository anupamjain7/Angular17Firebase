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
    this.fireauth.signInWithEmailAndPassword(email, password).then(res => {
      localStorage.setItem('token', 'true');
      if(res.user?.emailVerified == true){
        console.log("dashboard page")
        this.router.navigate(["/dashboard"]);
      }
      else
      this.router.navigate(['/verify-email']);

      
    }, err => {
      alert('Somthing went wronge');
      this.router.navigate(['/login']);
    })
  }

  //register method
  register(email: string, password: string) {
    this.fireauth.createUserWithEmailAndPassword(email, password).then(res => {
      alert('Registration Successful')
      this.router.navigate(['/login']);
      this.sendEmailForVerification(res.user);
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
//forgot password
forgotPassword(email : string){
  this.fireauth.sendPasswordResetEmail(email).then(() =>{
    this.router.navigate(['/verify-email']);
  }, err => {
    alert('Something went wrong');
  })
}

//email verification
sendEmailForVerification(user: any){
  user.sendEmailVerification().then((res:any) =>{
    this.router.navigate(['/verify-email']);
  }, (err: any) => {
    alert('Something went wrong, Not able to sent your email');
  
  })
}

}
