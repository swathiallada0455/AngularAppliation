export class Userinfo {
    constructor (public id: number,public employee_name:string,
        public employee_salary: number,public employee_age:number,public profile_image:string){}
    // id:number;
    // employee_name:string;
    // employee_salary:number;
    // employee_age:number;
    // profile_image:string;
}


export class ResultData
{
    constructor()
    {
        this.data=[];
    }
    status:string;
    data:Userinfo[];
    message:string;
}