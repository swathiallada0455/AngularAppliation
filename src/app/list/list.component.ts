import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { of } from 'rxjs';
import { Userinfo } from '../models/userinfo';
import { UserInfoService } from '../services/list-service.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  users:Userinfo[];
  error:"";

  constructor(private userInfoService: UserInfoService,private router:Router) { }

  ngOnInit() {
    this.getAllUsers();
  }

  getAllUsers()
  {
    this.userInfoService.getAllUsers()
    .subscribe((usr)=>{
      this.users=usr.data;
      console.log(this.users);
    },
    (err)=>
    {
    this.error=err
    });    
  }

  getUserDetails(id:number)
  {
    this.router.navigate(['viewuser/',id]);
  }


}
