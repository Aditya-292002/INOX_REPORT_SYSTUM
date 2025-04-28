import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { SharedService } from './shared.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  previousURL:any = "";

  constructor(private router: Router,private sharedService: SharedService) { } 
     
   logout() :void {    
    sessionStorage.setItem('isLoggedIn','false');    
    sessionStorage.removeItem('companyDetail');        
    sessionStorage.removeItem('user_detail');        
    sessionStorage.removeItem('access_token');   
    sessionStorage.clear();     
    this.router.navigate(['/login']); 
   }   

  isLoggedIn() {
    let userid 
    userid =  localStorage.getItem("USERID")
     if(userid === null || this.previousURL==""){
      
       return false;
     }    
     if(userid === ''){
      
       return false;
     }
     if(userid == undefined ||this.previousURL==undefined){
    
       return false;
     }
     else{
  
       return true; 
     }
  } 

  username(name: any) {
    localStorage.setItem("LoginUser", name)
  }

  UserId(val:any){
    localStorage.setItem("UserId", val)
  }

  callerror = (error : any) => {
    if (error.status == "401") { 
      this.sessionexpired();
    }
  }

  setUserID(val:any) {
    return localStorage.setItem("USERID", val); //key : isOBEM, val : True
  }
  
  sessionexpired() { // Add log out function here
    localStorage.clear();
    this.sharedService.isHeaderBar.next(false);
    this.sharedService.isSideBar.next(false);
    this.mainmenu("login");
    this.router.navigate([`/login`]);
  }

  mainmenu(val: string) {
    localStorage.setItem("Menu", val)
    this.sharedService.isToggleMenu = val;
  }

}
