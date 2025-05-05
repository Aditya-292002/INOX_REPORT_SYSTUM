import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LayoutPageComponent } from './common/layout-page/layout-page.component';
import { GateEntryComponent } from './forms/gate-entry/gate-entry.component';
import { GoodsReceiptComponent } from './forms/goods-receipt/goods-receipt.component';
import { authGuard } from './services/auth.guard';


export const routes: Routes = [
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    {path:'login', component:LoginComponent},
    {
        path:'',
        canActivate:[authGuard],
        component: LayoutPageComponent,
        children:[
        //   { path: 'Dashboard', component: DashboardComponent },
          { path: 'Gateentry', component: GateEntryComponent },
          { path: 'Goodsreceipt', component: GoodsReceiptComponent },
       ]},
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }