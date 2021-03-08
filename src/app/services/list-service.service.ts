import { Injectable, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders,HttpErrorResponse } from '@angular/common/http';
import { throwError, Observable, of} from 'rxjs';
import { retry,catchError } from 'rxjs/operators'
import { ResultData, Userinfo } from '../models/userinfo';

@Injectable({
  providedIn: 'root'
})
export class UserInfoService {

  constructor(private http: HttpClient) { 
    this.users=[];
    this.users.push(new Userinfo(1,'Tiger Nixon',320800,61,''));
    this.users.push(new Userinfo(2,'Garrett Winters',170750,63,''));
    this.users.push(new Userinfo(3,'Cedric Kelly',433060,45,''));
    this.users.push(new Userinfo(4,'Herrod Chandler',372000,58,''));
    this.users.push(new Userinfo(5,'Yuri Berry',342000,20,''));
  }
  users:Userinfo[];
  httpOptions={
    headers: new HttpHeaders({
     'Content-Type':'application/json',
     'Access-Control-Allow-Headers':'*'
   })
 };

  getAllUsers():Observable<ResultData>
  {   
    //console.log(this.users);
    let result:ResultData;
    result=new ResultData();
    result.data=this.users;
    result.message="Successfully! All records has been fetched.";
    result.status="success";
    return of(result);
    // let serviceUrl='http://dummy.restapiexample.com/api/v1/employees';
    //  return this.http.get<ResultData>(serviceUrl,this.httpOptions)
    //             .pipe(retry(3), catchError(this.handleError));
  }

  getUserDetails(id:number):Observable<Userinfo>
  {
    let result:Userinfo;
    result=this.users.find(itm=>itm.id==id);
    return of(result);
  }

  private handleError(error: HttpErrorResponse) { 
    return throwError( 'Something bad happened; please try again later.'); 
  };
}
