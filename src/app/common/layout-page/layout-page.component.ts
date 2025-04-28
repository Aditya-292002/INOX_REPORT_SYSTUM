import { Component } from '@angular/core';
import { HttpService } from '../../services/http.service';
import { API_URLService } from '../../services/api-url.service';
import { SharedService } from '../../services/shared.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-layout-page',
  imports: [],
  templateUrl: './layout-page.component.html',
  styleUrl: './layout-page.component.css'
})
export class LayoutPageComponent {
  subMenu: any;
  menuTitle: any;
  menuItemList: any = [];
  USER_ID: any;
  USER_NAME: any;
  isShowToggle: boolean = false;
  isShowSubmenu: boolean = false;
  headerName: string = "";
  project: any = [{ 'headerName': 'Project' }];
  sales: any = [{ 'headerName': 'Sales' }];
  v_data:any = [];
  FUNCTION_CODE:any;
  SEARCH:any;
  FilteredMenuItemList:any = [];

  constructor(public http: HttpService, private url: API_URLService, 
    private router: Router,public SharedService:SharedService) { }

  ngOnInit(): void {
    this.USER_NAME = localStorage.getItem("EMPLOYEENAME");
    this.USER_ID = localStorage.getItem("USERID");
    this.GetMenuRights();
    let Url = this.router.url;
    this.isShowToggle = true;
    if (Url == '/Dashboard') {
      this.headerName = 'Dashboard';
    } else {
      return;
    }
    // $("#menu_toggle")?.click(function (e: any) {
    //   e.preventDefault();
    //   $("#wrapper").toggleClass("toggled");
    // });
  }

  signOut() {
    localStorage.clear();
    this.router.navigate([`/login`]);
  }

  dashboardClick() {
    this.router.navigate([`/Dashboard`]);
    this.headerName = 'Dashboard';
  }

  ViewModeClick() {
    this.router.navigate([`/Viewmode`]);
  }

  GetMenuRights() {
    // console.log('GetMenuRights')
    let data = { "USER_ID": this.USER_ID };
    this.http.postnew(`${this.url.getMenuRights}`, data).then(
      (res: any) => {
        this.menuItemList = res[0].MenuList;
        this.FilteredMenuItemList =  this.menuItemList[0].items
        // for (let index = 0; index < this.menuItemList.length; index++) {
        //   const element = this.menuItemList[index];
        //   this.menuItemList[index].Functions  =JSON.parse(this.menuItemList[index].Functions)
        // }


        // for (let index = 0; index < this.menuItemList.length; index++) {
        //   const element = this.menuItemList[index];
        //   if(element.MAIN_FUNCTION_CODE=='JM0003'){
        //     this.project.push(element);
        //   }else{
        //     this.sales.push(element)
        //   }

        // }
        // this.menuItemList=[];
        // this.menuItemList.push(this.project)
        // this.menuItemList.push(this.sales)
        // console.log('this.menuItemList', this.menuItemList);
      }
    );
    // console.log('subMenu', this.menuItemList);
  }

  MainMenuClick(fun_code: any) {
    this.menuItemList.forEach((element: any) => {
      if (element.FUNCTION_CODE == fun_code && element.IS_SUBSELECTED == 1) {
        element.IS_SUBSELECTED = 0
      }
      else if (element.FUNCTION_CODE == fun_code) {
        element.IS_SUBSELECTED = true
      } else {
        element.IS_SUBSELECTED = false
      }
    });
  }

  showToggleFun() {
    this.isShowToggle = !this.isShowToggle;
  }

  highLightSubMenu(dataFunctionCode: any, dataSubFunctionCode: any, url: any) {
    this.menuItemList.forEach((element: any, index: number) => {
      // element.IS_SUBSELECTED = 0;
      if (element.MAIN_FUNCTION_CODE == dataFunctionCode) {
        this.v_data.push(element);
      }
    })
    this.menuItemList.forEach((element: any, idx: any) => {
      this.v_data.forEach((value: any, index: any) => {
        if (element.FUNCTION_CODE == value.FUNCTION_CODE) {
          //this.menuItemList.push(value);
        }
      })
    });
  }

  subMenuClick(data: any) {
    this.FUNCTION_CODE = data.FUNCTION_CODE;
    this.SharedService.updateData(this.FUNCTION_CODE);
    this.router.navigate(['/report'])
  }

  SearchFilter(val:any){
    this.menuItemList[0].items = this.FilteredMenuItemList.filter((item:any) =>
     Object.keys(item).some(key =>
       String(item[key]).toLowerCase().includes(val.toLowerCase())
     )
   );
   }  

}
