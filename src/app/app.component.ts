import { Component, OnInit } from '@angular/core';
import { loginSubject } from './helpers/sharedSubjects';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit  {
  title = 'jobManagement';
  showWelcome:boolean=true;
constructor(){

}
ngOnInit(): void {
  console.log("asd");
  
  this.checkLogin();
}
checkLogin(){
  loginSubject.subscribe(data=>{
    console.log("sadas");
    
  })
  loginSubject.subscribe({
    next:(data)=>{
      console.log(data);
      
      this.showWelcome=false
    }
  })
}
}
