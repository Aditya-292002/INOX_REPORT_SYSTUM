import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  public URL: string = "";
  isToggleMenu: string = "";
  isHeaderBar = new BehaviorSubject(false);
  isSideBar = new BehaviorSubject(false);
  FUNCTION_CODE = new BehaviorSubject<any>(null);
  data$ = this.FUNCTION_CODE.asObservable();

  constructor( private http: HttpClient) {
  }

  updateData(data: any) {
    this.FUNCTION_CODE.next(data);
  }

  isValid(inputValue:any){
    if(inputValue == '' || inputValue == null || inputValue == undefined || inputValue == 'undefined'){
      return false
    }else {
      return true
    }
  }
}
