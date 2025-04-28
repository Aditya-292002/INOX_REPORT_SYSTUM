import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class API_URLService {

  ApiUrl="http://localhost:45232/"; //local debug

  constructor() { }

  public userLogin =  this.ApiUrl + '/api/Auth/login';
  public getMatCode =  this.ApiUrl + '/api/Dashboard/GETMATCODELIST';
  public getPlantCode =  this.ApiUrl + '/api/Dashboard/GETPLANTCODELIST';
  public getCustomerType =  this.ApiUrl + '/api/Dashboard/GETCUSTOMERTYPE';
  public getStampingReq =  this.ApiUrl + '/api/Dashboard/GETSTAMPINGREQ';
  public getVesselTemp =  this.ApiUrl + '/api/Dashboard/GETOUTERVESSELDESIGNTEMP';
  public getService =  this.ApiUrl + '/api/Dashboard/GETSDSERVICE';
  public getValveType =  this.ApiUrl + '/api/Dashboard/GETVALVELIST';
  public saveJobMaster =  this.ApiUrl + '/api/Dashboard/SAVEJOBMASTER';
  // public getMenuRights =  this.ApiUrl + '/api/Dashboard/GETJOBMENURIGHTS'; //Commint by ADITYA
  public getMenuRights =  this.ApiUrl + '/api/Dashboard/GETJOBMENURIGHT'; 
  public getSavedList = this.ApiUrl + '/api/Dashboard/GETJOBSAVEDLIST';
  public cancelDocNo = this.ApiUrl + '/api/Dashboard/CANCELDOCNO';
  public checkDocNo = this.ApiUrl + '/api/Dashboard/CHECKDOCNO';
  public checkCalcledocview = this.ApiUrl + '/api/Dashboard/CHECKCANCLEDOCVIEW';
  public verifyUser =  this.ApiUrl + '/api/Login/verify';
  public validUserInfo =  this.ApiUrl + '/api/User/getuser';
  public getLoginUser = this.ApiUrl + '/api/Authetication/Login';
  public getMenuList = this.ApiUrl + '/api/Authetication/GETMENULIST';
  public getDashBoardList = this.ApiUrl + '/api/Dashboard/GETDASHBOARDLIST';
  public updateServiceStatus = this.ApiUrl + '/api/Dashboard/UPDATESERVICESTATUS';
  public getServerList = this.ApiUrl + '/api/Server/GETSERVERMASTERLIST';
  public saveServerList = this.ApiUrl + '/api/Server/SAVESERVERMASTER';
  public getServiceList = this.ApiUrl + '/api/Service/GETSERVICEMASTERLIST';
  public saveServiceList = this.ApiUrl + '/api/Service/SAVESERVICEMASTER';
  public getAssignList = this.ApiUrl + '/api/AssignServiceToServer/GETASSIGNSERVICESERVERLIST';
  public saveAssignMaster = this.ApiUrl + '/api/AssignServiceToServer/SAVEASSIGNMASTER';
  public GetMenuRights = this.ApiUrl + '/api/Authetication/GetMenuRights';
  public SAVEUSERTRACKERDETAILS = this.ApiUrl + '/api/Server/SAVEUSERTRACKERDETAILS';
  public getUserName = this.ApiUrl + '/api/Server/GETUSERNAME';
  public getUserRights = this.ApiUrl + '/api/Server/GETUSERRIGHTS';
  public saveUserRights = this.ApiUrl + '/api/Server/SAVEUSERROLERIGHTS';
  public project=this.ApiUrl+'/api/Dashboard/PROJECTLIST';
  public saveSchedule=this.ApiUrl+'/api/Dashboard/SAVESCHEDULE';
  public viewSchedule=this.ApiUrl+'/api/Dashboard/VIEWSCHEDULE';
  public projectScheduleList1=this.ApiUrl+'/api/Dashboard/PROJECTSCHDULELIST'
  public remarks=this.ApiUrl + '/api/Dashboard/REMARKS';
  public GETREPORTLIST=this.ApiUrl + '/api/Report/GETREPORTLIST';
  public GETREPORTCONTROLS=this.ApiUrl + '/api/Report/GETREPORTCONTROLS';
  
  
}
