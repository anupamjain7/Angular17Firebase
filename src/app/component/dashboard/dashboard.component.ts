import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../shared/auth.service';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { DataService } from '../../shared/data.service';
import { Student } from '../../model/student';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [FormsModule, RouterModule, CommonModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent implements OnInit{
  studentList: Student[] = [];
  studentObj : Student = {
    id: '',
    first_name: '',
    last_name: '',
    email: '',
    mobile: ''
  };
  id : string = '';
  first_name : string = '';
  last_name : string = '';
  email : string = '';
  mobile : string = '';
constructor(private auth : AuthService, private data: DataService){ }

ngOnInit(): void {
  this.getAllStudents();
}
logout(){
  console.log("Logout");
this.auth.logout();
}

resetForm(){
  this.id = '';
  this.first_name = '';
  this.last_name = '';
  this.email = '';
  this.mobile = '';
}
getAllStudents(){
  this.data.getAllStudents().subscribe(res => {
  this.studentList = res.map((e: any) => {
    const data = e.payload.doc.data();
    data.id = e.payload.doc.id;
    return data;
  })
  }, err => {
      alert('Error while fetching student data');
  })
}

addStudent(){
if(this.first_name == '' || this.last_name == '' || this.mobile == '' || this.email == ''){
  alert('Fill all input details')
return;
}

this.studentObj.id = '';
this.studentObj.email = this.email;
this.studentObj.first_name = this.first_name;
this.studentObj.last_name = this.last_name;
this.studentObj.mobile = this.mobile;

this.data.addStudent(this.studentObj);
this.resetForm();
}

updateStudent(){

}

deleteStudent(student : Student){
  if(window.confirm('Are you sure you want to delete'+student.first_name+' '+student.last_name+'?'))
  this.data.deleteStudent(student);
 }
}
