import { Component } from '@angular/core';
import { HttpService } from '../../services/http.service';
import { API_URLService } from '../../services/api-url.service';
import { SharedService } from '../../services/shared.service';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { GateEntryComponent } from '../../forms/gate-entry/gate-entry.component';
import { FormsModule } from '@angular/forms';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';

@Component({
  selector: 'app-layout-page',
  imports: [CommonModule,RouterModule,FormsModule,IconFieldModule,InputIconModule],
  templateUrl: './layout-page.component.html',
  styleUrl: './layout-page.component.css'
})
export class LayoutPageComponent {
  subMenu: any;
  menuTitle: any;
  menuItemList: any = [];
//   menuItemList: any = [
//     {
//       "FUNCTION_CODE": "FIRQ",
//       "FUNCTION_NAME": "Standard Reports",
//       "FORM_NAME": "",
//       "ACTIVE": false,
//       "MAIN_FUNCTION_CODE": "FIR",
//       "DEFAULTMODE": null,
//       "ICON": "pi pi-book",
//       "IS_SUBSELECTED": false,
//       "items": [
//           {
//               "FUNCTION_CODE": "ERCHK",
//               "FUNCTION_NAME": "Error Check",
//               "FORM_NAME": "frmFIReports",
//               "ACTIVE": false,
//               "MAIN_FUNCTION_CODE": "FIRQ",
//               "DEFAULTMODE": null,
//               "ICON": "pi pi-circle",
//               "IS_SUBSELECTED": false,
//               "items": null
//           },
//           {
//               "FUNCTION_CODE": "FIRQ01",
//               "FUNCTION_NAME": "Trial Balance",
//               "FORM_NAME": "frmFIReports",
//               "ACTIVE": false,
//               "MAIN_FUNCTION_CODE": "FIRQ",
//               "DEFAULTMODE": null,
//               "ICON": "pi pi-circle",
//               "IS_SUBSELECTED": false,
//               "items": null
//           },
//           {
//               "FUNCTION_CODE": "FIRQ02",
//               "FUNCTION_NAME": "Profit & Loss Statement",
//               "FORM_NAME": "frmFIReports",
//               "ACTIVE": false,
//               "MAIN_FUNCTION_CODE": "FIRQ",
//               "DEFAULTMODE": null,
//               "ICON": "pi pi-circle",
//               "IS_SUBSELECTED": false,
//               "items": null
//           },
//           {
//               "FUNCTION_CODE": "FIRQ03",
//               "FUNCTION_NAME": "Balance Sheet",
//               "FORM_NAME": "frmFIReports",
//               "ACTIVE": false,
//               "MAIN_FUNCTION_CODE": "FIRQ",
//               "DEFAULTMODE": null,
//               "ICON": "pi pi-circle",
//               "IS_SUBSELECTED": false,
//               "items": null
//           },
//           {
//               "FUNCTION_CODE": "FIRQ04",
//               "FUNCTION_NAME": "Customer Ledger",
//               "FORM_NAME": "frmFIReports",
//               "ACTIVE": false,
//               "MAIN_FUNCTION_CODE": "FIRQ",
//               "DEFAULTMODE": null,
//               "ICON": "pi pi-circle",
//               "IS_SUBSELECTED": false,
//               "items": null
//           },
//           {
//               "FUNCTION_CODE": "FIRQ05",
//               "FUNCTION_NAME": "Vendor Ledger",
//               "FORM_NAME": "frmFIReports",
//               "ACTIVE": false,
//               "MAIN_FUNCTION_CODE": "FIRQ",
//               "DEFAULTMODE": null,
//               "ICON": "pi pi-circle",
//               "IS_SUBSELECTED": false,
//               "items": null
//           },
//           {
//               "FUNCTION_CODE": "FIRQ06",
//               "FUNCTION_NAME": "General Ledger",
//               "FORM_NAME": "frmFIReports",
//               "ACTIVE": false,
//               "MAIN_FUNCTION_CODE": "FIRQ",
//               "DEFAULTMODE": null,
//               "ICON": "pi pi-circle",
//               "IS_SUBSELECTED": false,
//               "items": null
//           },
//           {
//               "FUNCTION_CODE": "FIRQ07",
//               "FUNCTION_NAME": "Customer Ageing",
//               "FORM_NAME": "frmFIReports",
//               "ACTIVE": false,
//               "MAIN_FUNCTION_CODE": "FIRQ",
//               "DEFAULTMODE": null,
//               "ICON": "pi pi-circle",
//               "IS_SUBSELECTED": false,
//               "items": null
//           },
//           {
//               "FUNCTION_CODE": "FIRQ08",
//               "FUNCTION_NAME": "Cash / Bank Book",
//               "FORM_NAME": "frmFIReports",
//               "ACTIVE": false,
//               "MAIN_FUNCTION_CODE": "FIRQ",
//               "DEFAULTMODE": null,
//               "ICON": "pi pi-circle",
//               "IS_SUBSELECTED": false,
//               "items": null
//           },
//           {
//               "FUNCTION_CODE": "FIRQ09",
//               "FUNCTION_NAME": "Trial Balance (BA-CC Wise)",
//               "FORM_NAME": "frmFIReports",
//               "ACTIVE": false,
//               "MAIN_FUNCTION_CODE": "FIRQ",
//               "DEFAULTMODE": null,
//               "ICON": "pi pi-circle",
//               "IS_SUBSELECTED": false,
//               "items": null
//           },
//           {
//               "FUNCTION_CODE": "FIRQ10",
//               "FUNCTION_NAME": "Customer Balance",
//               "FORM_NAME": "frmFIReports",
//               "ACTIVE": false,
//               "MAIN_FUNCTION_CODE": "FIRQ",
//               "DEFAULTMODE": null,
//               "ICON": "pi pi-circle",
//               "IS_SUBSELECTED": false,
//               "items": null
//           },
//           {
//               "FUNCTION_CODE": "FIRQ101",
//               "FUNCTION_NAME": "Bank Details",
//               "FORM_NAME": "frmFIReports",
//               "ACTIVE": false,
//               "MAIN_FUNCTION_CODE": "FIRQ",
//               "DEFAULTMODE": null,
//               "ICON": "pi pi-circle",
//               "IS_SUBSELECTED": false,
//               "items": null
//           },
//           {
//               "FUNCTION_CODE": "FIRQ102",
//               "FUNCTION_NAME": "FD Investments Details",
//               "FORM_NAME": "frmFIReports",
//               "ACTIVE": false,
//               "MAIN_FUNCTION_CODE": "FIRQ",
//               "DEFAULTMODE": null,
//               "ICON": "pi pi-circle",
//               "IS_SUBSELECTED": false,
//               "items": null
//           },
//           {
//               "FUNCTION_CODE": "FIRQ11",
//               "FUNCTION_NAME": "TDS Summary",
//               "FORM_NAME": "frmFIReports",
//               "ACTIVE": false,
//               "MAIN_FUNCTION_CODE": "FIRQ",
//               "DEFAULTMODE": null,
//               "ICON": "pi pi-circle",
//               "IS_SUBSELECTED": false,
//               "items": null
//           },
//           {
//               "FUNCTION_CODE": "FIRQ12",
//               "FUNCTION_NAME": "General Ledger ClassCode wise",
//               "FORM_NAME": "frmFIReports",
//               "ACTIVE": false,
//               "MAIN_FUNCTION_CODE": "FIRQ",
//               "DEFAULTMODE": null,
//               "ICON": "pi pi-circle",
//               "IS_SUBSELECTED": false,
//               "items": null
//           },
//           {
//               "FUNCTION_CODE": "FIRQ13",
//               "FUNCTION_NAME": "Customer Open Items",
//               "FORM_NAME": "frmFIReports",
//               "ACTIVE": false,
//               "MAIN_FUNCTION_CODE": "FIRQ",
//               "DEFAULTMODE": null,
//               "ICON": "pi pi-circle",
//               "IS_SUBSELECTED": false,
//               "items": null
//           },
//           {
//               "FUNCTION_CODE": "FIRQ14",
//               "FUNCTION_NAME": "Customer Cheque Bounce Register",
//               "FORM_NAME": "frmFIReports",
//               "ACTIVE": false,
//               "MAIN_FUNCTION_CODE": "FIRQ",
//               "DEFAULTMODE": null,
//               "ICON": "pi pi-circle",
//               "IS_SUBSELECTED": false,
//               "items": null
//           },
//           {
//               "FUNCTION_CODE": "FIRQ15",
//               "FUNCTION_NAME": "Misceleneous Purchase Register",
//               "FORM_NAME": "frmFIReports",
//               "ACTIVE": false,
//               "MAIN_FUNCTION_CODE": "FIRQ",
//               "DEFAULTMODE": null,
//               "ICON": "pi pi-circle",
//               "IS_SUBSELECTED": false,
//               "items": null
//           },
//           {
//               "FUNCTION_CODE": "FIRQ16",
//               "FUNCTION_NAME": "Vendor Open Items",
//               "FORM_NAME": "frmFIReports",
//               "ACTIVE": false,
//               "MAIN_FUNCTION_CODE": "FIRQ",
//               "DEFAULTMODE": null,
//               "ICON": "pi pi-circle",
//               "IS_SUBSELECTED": false,
//               "items": null
//           },
//           {
//               "FUNCTION_CODE": "FIRQ17",
//               "FUNCTION_NAME": "Vendor Ageing",
//               "FORM_NAME": "frmFIReports",
//               "ACTIVE": false,
//               "MAIN_FUNCTION_CODE": "FIRQ",
//               "DEFAULTMODE": null,
//               "ICON": "pi pi-circle",
//               "IS_SUBSELECTED": false,
//               "items": null
//           },
//           {
//               "FUNCTION_CODE": "FIRQ18",
//               "FUNCTION_NAME": "Customer Debit/Credit Note",
//               "FORM_NAME": "frmFIReports",
//               "ACTIVE": false,
//               "MAIN_FUNCTION_CODE": "FIRQ",
//               "DEFAULTMODE": null,
//               "ICON": "pi pi-circle",
//               "IS_SUBSELECTED": false,
//               "items": null
//           },
//           {
//               "FUNCTION_CODE": "FIRQ19",
//               "FUNCTION_NAME": "Vendor Debit/Credit Note",
//               "FORM_NAME": "frmFIReports",
//               "ACTIVE": false,
//               "MAIN_FUNCTION_CODE": "FIRQ",
//               "DEFAULTMODE": null,
//               "ICON": "pi pi-circle",
//               "IS_SUBSELECTED": false,
//               "items": null
//           },
//           {
//               "FUNCTION_CODE": "FIRQ20",
//               "FUNCTION_NAME": "Control Account Reconciliation",
//               "FORM_NAME": "frmFIReports",
//               "ACTIVE": false,
//               "MAIN_FUNCTION_CODE": "FIRQ",
//               "DEFAULTMODE": null,
//               "ICON": "pi pi-circle",
//               "IS_SUBSELECTED": false,
//               "items": null
//           },
//           {
//               "FUNCTION_CODE": "FIRQ21",
//               "FUNCTION_NAME": "Bank Letter",
//               "FORM_NAME": "frmFICustData",
//               "ACTIVE": false,
//               "MAIN_FUNCTION_CODE": "FIRQ",
//               "DEFAULTMODE": null,
//               "ICON": "pi pi-circle",
//               "IS_SUBSELECTED": false,
//               "items": null
//           },
//           {
//               "FUNCTION_CODE": "FIRQ22",
//               "FUNCTION_NAME": "TDS Certificate",
//               "FORM_NAME": "frmFITDSCertificate",
//               "ACTIVE": false,
//               "MAIN_FUNCTION_CODE": "FIRQ",
//               "DEFAULTMODE": null,
//               "ICON": "pi pi-circle",
//               "IS_SUBSELECTED": false,
//               "items": null
//           },
//           {
//               "FUNCTION_CODE": "FIRQ23",
//               "FUNCTION_NAME": "Vendor Ageing Detailed",
//               "FORM_NAME": "frmFIReports",
//               "ACTIVE": false,
//               "MAIN_FUNCTION_CODE": "FIRQ",
//               "DEFAULTMODE": null,
//               "ICON": "pi pi-circle",
//               "IS_SUBSELECTED": false,
//               "items": null
//           },
//           {
//               "FUNCTION_CODE": "FIRQ25",
//               "FUNCTION_NAME": "Vendor Balance",
//               "FORM_NAME": "frmFIReports",
//               "ACTIVE": false,
//               "MAIN_FUNCTION_CODE": "FIRQ",
//               "DEFAULTMODE": null,
//               "ICON": "pi pi-circle",
//               "IS_SUBSELECTED": false,
//               "items": null
//           },
//           {
//               "FUNCTION_CODE": "FIRQ31",
//               "FUNCTION_NAME": "Customer - Trial Balance",
//               "FORM_NAME": "frmFIReports",
//               "ACTIVE": false,
//               "MAIN_FUNCTION_CODE": "FIRQ",
//               "DEFAULTMODE": null,
//               "ICON": "pi pi-circle",
//               "IS_SUBSELECTED": false,
//               "items": null
//           },
//           {
//               "FUNCTION_CODE": "FIRQ32",
//               "FUNCTION_NAME": "Vendor - Trial Balance",
//               "FORM_NAME": "frmFIReports",
//               "ACTIVE": false,
//               "MAIN_FUNCTION_CODE": "FIRQ",
//               "DEFAULTMODE": null,
//               "ICON": "pi pi-circle",
//               "IS_SUBSELECTED": false,
//               "items": null
//           },
//           {
//               "FUNCTION_CODE": "FIRQ33",
//               "FUNCTION_NAME": "Vendor BalanceMonthWise",
//               "FORM_NAME": "frmFIReports",
//               "ACTIVE": false,
//               "MAIN_FUNCTION_CODE": "FIRQ",
//               "DEFAULTMODE": null,
//               "ICON": "pi pi-circle",
//               "IS_SUBSELECTED": false,
//               "items": null
//           },
//           {
//               "FUNCTION_CODE": "FIRQ34",
//               "FUNCTION_NAME": "Customer BalanceMonthWise",
//               "FORM_NAME": "frmFIReports",
//               "ACTIVE": false,
//               "MAIN_FUNCTION_CODE": "FIRQ",
//               "DEFAULTMODE": null,
//               "ICON": "pi pi-circle",
//               "IS_SUBSELECTED": false,
//               "items": null
//           },
//           {
//               "FUNCTION_CODE": "FIRQ35",
//               "FUNCTION_NAME": "Customer Bill Wise Details",
//               "FORM_NAME": "frmFIReports",
//               "ACTIVE": false,
//               "MAIN_FUNCTION_CODE": "FIRQ",
//               "DEFAULTMODE": null,
//               "ICON": "pi pi-circle",
//               "IS_SUBSELECTED": false,
//               "items": null
//           },
//           {
//               "FUNCTION_CODE": "FIRQ36",
//               "FUNCTION_NAME": "Vendor Bill Wise Details",
//               "FORM_NAME": "frmFIReports",
//               "ACTIVE": false,
//               "MAIN_FUNCTION_CODE": "FIRQ",
//               "DEFAULTMODE": null,
//               "ICON": "pi pi-circle",
//               "IS_SUBSELECTED": false,
//               "items": null
//           },
//           {
//               "FUNCTION_CODE": "FIRQ40",
//               "FUNCTION_NAME": "GL GRP Wise Ledger",
//               "FORM_NAME": "frmFIReports",
//               "ACTIVE": false,
//               "MAIN_FUNCTION_CODE": "FIRQ",
//               "DEFAULTMODE": null,
//               "ICON": "pi pi-circle",
//               "IS_SUBSELECTED": false,
//               "items": null
//           },
//           {
//               "FUNCTION_CODE": "FIRQ41",
//               "FUNCTION_NAME": "GST Misceleneous Purchase Register",
//               "FORM_NAME": "frmFIReports",
//               "ACTIVE": false,
//               "MAIN_FUNCTION_CODE": "FIRQ",
//               "DEFAULTMODE": null,
//               "ICON": "pi pi-circle",
//               "IS_SUBSELECTED": false,
//               "items": null
//           },
//           {
//               "FUNCTION_CODE": "FIRQCNR",
//               "FUNCTION_NAME": "Credit Note Request",
//               "FORM_NAME": "frmFIReports",
//               "ACTIVE": false,
//               "MAIN_FUNCTION_CODE": "FIRQ",
//               "DEFAULTMODE": null,
//               "ICON": "pi pi-circle",
//               "IS_SUBSELECTED": false,
//               "items": null
//           },
//           {
//               "FUNCTION_CODE": "FIRQTBD",
//               "FUNCTION_NAME": "Trial Balance - Detailed",
//               "FORM_NAME": "frmFIReports",
//               "ACTIVE": false,
//               "MAIN_FUNCTION_CODE": "FIRQ",
//               "DEFAULTMODE": null,
//               "ICON": "pi pi-circle",
//               "IS_SUBSELECTED": false,
//               "items": null
//           },
//           {
//               "FUNCTION_CODE": "MMRQ01",
//               "FUNCTION_NAME": "Transfer Price Summary",
//               "FORM_NAME": "frmFIReports",
//               "ACTIVE": false,
//               "MAIN_FUNCTION_CODE": "FIRQ",
//               "DEFAULTMODE": null,
//               "ICON": "pi pi-circle",
//               "IS_SUBSELECTED": false,
//               "items": null
//           }
//       ]
//   }
// ];
 
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
    let data = { "USER_ID": this.USER_ID };
    this.http.postnew(`${this.url.getMenuRights}`, data).then(
      (res: any) => {
        this.menuItemList = res[0].MenuList;
        this.FilteredMenuItemList =  this.menuItemList[0].items
      }
    );
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
