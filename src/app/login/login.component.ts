import { Component ,NgModule } from '@angular/core';
import { SharedService } from '../services/shared.service';
import { AuthService } from '../services/auth.service';
import { Router, ActivatedRoute } from "@angular/router";
import { HttpService } from '../services/http.service';
import { HttpHeaders } from '@angular/common/http';
import { API_URLService } from '../services/api-url.service';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';

@Component({
  selector: 'app-login',
  imports: [CommonModule,FormsModule,InputTextModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  
  USERNAME:any;
  PASSWORD:any = "";
  USER_ID:any = "";
  EMPLOYEENAME:any;
  labelShow:any;
  labelText:any;
  
  constructor(
    private http: HttpService,
    private router: Router,
    private AuthService: AuthService,
    private sharedService: SharedService,
    private activeRoute: ActivatedRoute,
    private url: API_URLService){ }

    ngOnInit(): void {
      localStorage.removeItem("EMPLOYEENAME")
      localStorage.removeItem("EMPLOYEEID")
      localStorage.removeItem("IDLE_TIME")
    }

  onSomeAction(e:any){
    if(e.code=="Enter"){
      this.logIn()
    }
  }

  
  logIn(){
    var token = 'pw6I/rVenXms+4SJczSH1292XyK6Im7emqzGxsp4KPE='
    let headers = new HttpHeaders()
    .set('SecretKey', token)
   let data = {
    "USER_NAME": this.USERNAME,
    "PASSWORD": this.PASSWORD
   }
    this.http.postnew(this.url.getLoginUser,data,headers).then(
    (res:any)=>{
      if(res.FLAG == true){
        this.AuthService.setUserID(res.USERID);
        localStorage.setItem("EMPLOYEENAME",res.EMPLOYEENAME)
        localStorage.setItem("EMPLOYEEID",res.USERID)
        localStorage.setItem("IDLE_TIME",res.IDLE_TIME)
        this.USER_ID =localStorage.getItem("EMPLOYEEID");
        this.EMPLOYEENAME =localStorage.getItem("EMPLOYEENAME");
        // this.router.navigate(['/Dashboard']);
        this.router.navigate(['/Gateentry']);
      }
    }
  );
  }

}
