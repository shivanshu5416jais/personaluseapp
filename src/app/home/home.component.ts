import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { loginSubject } from '../helpers/sharedSubjects';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
   constructor(private activatedRoute:ActivatedRoute){

   }
   ngOnInit(): void {
     this.activatedRoute.queryParams.subscribe(params=>{
      console.log(params);
      if(params['userID'])
      loginSubject.next('userID');
     })
   }
}
