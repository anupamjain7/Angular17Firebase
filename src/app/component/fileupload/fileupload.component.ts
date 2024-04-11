import { Component, OnInit } from '@angular/core';
import { FileService } from '../../shared/file.service';
import { FileMetaData } from '../../model/file-meta-data';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { finalize } from 'rxjs';
import { Student } from '../../model/student';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-fileupload',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './fileupload.component.html',
  styleUrl: './fileupload.component.scss'
})
export class FileuploadComponent implements OnInit{

  selectedFiles !: FileList;
  currentFileUpload !: FileMetaData;
  percentage : number = 0;
  listOfFiles : FileMetaData[] = [];

constructor(private fileService: FileService, private fireStorage: AngularFireStorage){ }

ngOnInit(): void {
  this.getAllFiles();
}
selectFile(event : any){
   this.selectedFiles = event.target.files;
   console.log(this.selectedFiles);
}

uploadFile() {
this.currentFileUpload = new FileMetaData(this.selectedFiles[0]);
const path = 'Uploads/'+this.currentFileUpload.file.name;
const storageRef = this.fireStorage.ref(path);
const uploadTask = storageRef.put(this.selectedFiles[0]);
uploadTask.snapshotChanges().pipe(finalize(() => {
storageRef.getDownloadURL().subscribe(downloadLink => {
  this.currentFileUpload.url = downloadLink,
  this.currentFileUpload.size = this.currentFileUpload.file.size,
  this.currentFileUpload.name = this.currentFileUpload.file.name;
  console.log(this.currentFileUpload)
  this.fileService.saveMetaDataOfFile(this.currentFileUpload);
  this.ngOnInit();
})
})
).subscribe((res: any) => {
  console.log(res);
this.percentage = (res.bytesTransferred * 100 / res.totalBytes);
}, err => {
    console.log('Error occured');
});
}

getAllFiles(){
return this.fileService.getAllFiles().subscribe((res: any)=>{
console.log(res);  

this.listOfFiles = res.map((e : any) => {
const data = e.payload.doc.data();
data.id = e.payload.doc.id;
return data;
});
}, (err:any) => {
   console.log('Error occured while fetching file meta data');
})
}
deleteFile(file: FileMetaData){
  if(window.confirm('Are you sure you want to delete'+file.name+'?')){
    this.fileService.deleteFile(file);
    this.ngOnInit();
  }
 
}

}
