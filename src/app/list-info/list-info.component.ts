import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Userinfo } from '../models/userinfo';
import { UserInfoService } from '../services/list-service.service';

@Component({
  selector: 'app-list-info',
  templateUrl: './list-info.component.html',
  styleUrls: ['./list-info.component.css']
})
export class ListInfoComponent implements OnInit {
  userinfo: Userinfo;
  constructor(private userInfoService: UserInfoService,private router:Router,
    private currentroute:ActivatedRoute) { }

  ngOnInit() {
    let id=this.currentroute.snapshot.paramMap.get("id");    
    this.userInfoService.getUserDetails(Number(id)).subscribe((usr)=>{
      console.log(usr);
      this.userinfo=usr; 
     },
     (err)=>{
       alert("Failed to fetch User Info");
     });    
   }

   back()
   {
     this.router.navigate(['lists']);
   }
  }

