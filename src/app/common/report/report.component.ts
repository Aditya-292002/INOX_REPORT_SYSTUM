import { Component } from '@angular/core';
import { API_URLService } from '../../services/api-url.service';
import { CommonModule, DatePipe } from '@angular/common';
import { SharedService } from '../../services/shared.service';
import { HttpService } from '../../services/http.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

@Component({
  selector: 'app-report',
  imports: [CommonModule,BrowserModule,FormsModule],
  templateUrl: './report.component.html',
  styleUrl: './report.component.css'
})
export class ReportComponent {

  FUNCTION_CODE:any;
  CHECK_1:any;
  CHECK_2:any;
  CHECK_3:any;
  CHECK_4:any;
  D1_FORMAT:any;
  D2_FORMAT:any;
  DATE_1:any;
  DATE_2:any;
  DESCRIPTION:any;
  FILTER:any;
  OPTION_1:any;
  OPTION_2:any;
  UC1_SEARCHID:any;
  UC2_SEARCHID:any;
  UC3_SEARCHID:any;
  UC4_SEARCHID:any;
  UCCONTROL_1:any;
  UCCONTROL_2:any;
  UCCONTROL_3:any;
  UCCONTROL_4:any;
  CLIENT_LIST:any = [];
  TO_DATE:any = new Date();
  FORM_DATE:any = new Date();
  G1_SEARCHID:any;
  GRID_1:any;
  CHECK_4_VALUE:any;
  CHECK_2_VALUE:any;
  CHECK_1_VALUE:any;
  CHECK_3_VALUE:any;
  OPTION: any;
  UCCONTROL_2_LIST:any = [];
  UCCONTROL_1_LIST:any = [];
  UCCONTROL_3_LIST:any = [];
  UCCONTROL_4_LIST:any = [];
  REPORT_DATA_LIST:any = [];
  isList:boolean = false;
  FYEAR:any = '2024';
  USER_ID:any;
  column:any = [];
  sortField: string = '';
  sortOrder: number = 1;
  globalFilter: any = undefined;
  employees:any = [];
  dynamicColumns:any = [];
  SEARCH:any;
  FILTERED_REPORT_DATA_LIST:any = [];
  HIDE_COLUMN:any = [];
  COLUMN_SIZE:any;

    constructor(public http: HttpService, private url: API_URLService,
      private router: Router,public SharedService:SharedService,private DatePipe:DatePipe) { }
  
    ngOnInit(): void {
      this.USER_ID = localStorage.getItem('EMPLOYEEID');
      this.SharedService.data$.subscribe(data => {
        this.FUNCTION_CODE = data;
        if(this.FUNCTION_CODE != null){
          this.GETREPORTCONTROLS(this.FUNCTION_CODE);
        }else {
          this.router.navigate(['/Dashboard'])
        }
      });
    }

    GETREPORTCONTROLS(code:any){
      let data = { "FUNCTION_CODE": code };
      this.http.postnew(`${this.url.GETREPORTCONTROLS}`, data).then(
        (res: any) => {
          // console.log('res ->' , res)
        this.REPORT_DATA_LIST = [];
        this.isList = false;
        this.CHECK_1 = res.REPORT_CONTROLS_LIST[0].CHECK_1;
        this.CHECK_2 = res.REPORT_CONTROLS_LIST[0].CHECK_2;
        this.CHECK_3 = res.REPORT_CONTROLS_LIST[0].CHECK_3;
        this.CHECK_4 = res.REPORT_CONTROLS_LIST[0].CHECK_4;
        this.D1_FORMAT = res.REPORT_CONTROLS_LIST[0].D1_FORMAT;
        this.D2_FORMAT = res.REPORT_CONTROLS_LIST[0].D2_FORMAT;
        this.DATE_1 = res.REPORT_CONTROLS_LIST[0].DATE_1;
        this.DATE_2 = res.REPORT_CONTROLS_LIST[0].DATE_2;
        this.DESCRIPTION = res.REPORT_CONTROLS_LIST[0].DESCRIPTION;
        this.FILTER = res.REPORT_CONTROLS_LIST[0].FILTER;
        this.OPTION_1 = res.REPORT_CONTROLS_LIST[0].OPTION_1;
        this.OPTION_2 = res.REPORT_CONTROLS_LIST[0].OPTION_2;
        this.UC1_SEARCHID = res.REPORT_CONTROLS_LIST[0].UC1_SEARCHID;
        this.UC2_SEARCHID = res.REPORT_CONTROLS_LIST[0].UC2_SEARCHID;
        this.UC3_SEARCHID = res.REPORT_CONTROLS_LIST[0].UC3_SEARCHID;
        this.UC4_SEARCHID = res.REPORT_CONTROLS_LIST[0].UC4_SEARCHID;
        this.UCCONTROL_1 = res.REPORT_CONTROLS_LIST[0].UCCONTROL_1;
        this.UCCONTROL_2 = res.REPORT_CONTROLS_LIST[0].UCCONTROL_2;
        this.UCCONTROL_3 = res.REPORT_CONTROLS_LIST[0].UCCONTROL_3;
        this.UCCONTROL_4 = res.REPORT_CONTROLS_LIST[0].UCCONTROL_4;
        this.G1_SEARCHID = res.REPORT_CONTROLS_LIST[0].G1_SEARCHID;
        this.GRID_1 = res.REPORT_CONTROLS_LIST[0].GRID_1;
        this.HIDE_COLUMN = res.REPORT_CONTROLS_LIST[0].HIDE_COLUMN;
        this.COLUMN_SIZE = res.REPORT_CONTROLS_LIST[0].COLUMN_SIZE + ',' + '50';
        this.UCCONTROL_1_LIST = [];
        this.UCCONTROL_2_LIST = [];
        this.UCCONTROL_3_LIST = [];
        this.UCCONTROL_4_LIST = [];
        this.UCCONTROL_1_LIST.push({"UC1_SEARCHID":this.UC1_SEARCHID})
        this.UCCONTROL_2_LIST.push({"UC2_SEARCHID":this.UC2_SEARCHID})
        this.UCCONTROL_3_LIST.push({"UC3_SEARCHID":this.UC3_SEARCHID})
        this.UCCONTROL_4_LIST.push({"UC4_SEARCHID":this.UC4_SEARCHID})
    })  
    }
    
    GETREPORTLIST(){
      if(this.DATE_1 != null && this.DATE_1 != ''){
        if(!this.SharedService.isValid(this.FORM_DATE)){
          //  this.ToastrService.error('Select a Form Date');
           return
        }
      }
      if(this.DATE_2 != null && this.DATE_2 != ''){
        if(!this.SharedService.isValid(this.TO_DATE)){
          //  this.ToastrService.error('Select a To Date');
           return
        }
      }
      
      let data = { 
        "USER_ID": +this.USER_ID,
        "FUNCTION_CODE": this.FUNCTION_CODE, 
        "FORM_DATE": this.DatePipe.transform(this.FORM_DATE,'dd-MMM-yyyy'), 
        "TO_DATE": this.DatePipe.transform(this.TO_DATE,'dd-MMM-yyyy'), 
        "CHECK_1": this.CHECK_1_VALUE, 
        "CHECK_2": this.CHECK_2_VALUE, 
        "CHECK_3": this.CHECK_3_VALUE, 
        "CHECK_4": this.CHECK_4_VALUE, 
        "OPTION_1": this.OPTION,  
        "OPTION_2": this.OPTION, 
        "UC1_SEARCHID": this.UC1_SEARCHID, 
        "UC2_SEARCHID": this.UC2_SEARCHID, 
        "UC3_SEARCHID": this.UC3_SEARCHID, 
        "UC4_SEARCHID": this.UC4_SEARCHID,  
        "G1_SEARCHID": this.G1_SEARCHID, 
        "FYEAR": this.FYEAR
      };
      // console.log('data ->' , JSON.stringify(data));
      // return
      this.http.postnew(`${this.url.GETREPORTLIST}`, data).then(
        (res: any) => {
        this.REPORT_DATA_LIST = res.REPORT_DATA_LIST;
        this.FILTERED_REPORT_DATA_LIST = this.REPORT_DATA_LIST;
        if(this.REPORT_DATA_LIST.length > 0){
          // console.log('REPORT_DATA_LIST ->' , JSON.stringify(this.REPORT_DATA_LIST))
          this.REPORT_DATA_LIST.forEach((element:any,index:any) => {
            element['ID'] = index + 1;
          });
          this.dynamicColumns = this.getDynamicColumns();
          this.removeColumn(this.HIDE_COLUMN);
          const widths =  this.COLUMN_SIZE.split(',');
          this.dynamicColumns.forEach((item:any, index:any) => {
            item.width = widths[index]; 
          });
          this.isList = true;
        }
    })
    }

    removeColumn(fieldName: any) {
      const filteredArray = this.dynamicColumns.filter((item:any) => !fieldName.includes(item.field));
      this.dynamicColumns = filteredArray
    }

    getDynamicColumns() {
      const keys = Object.keys(this.REPORT_DATA_LIST[0]);
      return keys.map((key:any) => ({
        field: key,
        caption: key.replace(/_/g, ' ').toUpperCase() // Converts the field names to a more readable caption
      }));
    }

//     exportToExcel(){
//       // console.log('REPORT_DATA_LIST ->' , this.REPORT_DATA_LIST)
//       // import("xlsx").then(xlsx => {
//       //   // Convert data (REPORT_DATA_LIST) to a worksheet
//       //   const worksheet = xlsx.utils.json_to_sheet(this.REPORT_DATA_LIST);
//       //   const workbook = { Sheets: { 'data': worksheet }, SheetNames: ['data'] };
//       //   const excelBuffer: any = xlsx.write(workbook, { bookType: 'xlsx', type: 'array' });
//       //   this.saveAsExcelFile(excelBuffer, this.FUNCTION_CODE);
//       // }).catch(error => {
//       //   console.error("Error importing 'xlsx' module:", error);
//       // });
//       // console.log('this.REPORT_DATA_LIST ->' , this.REPORT_DATA_LIST)
//     const data = this.REPORT_DATA_LIST;
// let workbook = new ExcelProper.Workbook();
// let worksheet = workbook.addWorksheet(this.FUNCTION_CODE, {
//   views: [
//     { state: "frozen", xSplit: 1 },
//     { state: "frozen", xSplit: 2, ySplit: 2, activeCell: 'A3' },
//     { state: "frozen", xSplit: 3 },
//     { state: "frozen", xSplit: 4 },
//     { state: "frozen", xSplit: 5 },
//     { state: "frozen", xSplit: 6 },
//     { state: "frozen", xSplit: 7 },
//     { state: "frozen", xSplit: 8 }
//   ]
// });

// worksheet.getCell('A1').value = 'Report ID  : FIRQ09 - Trial Balance (BA-CC Wise)	Report ID  : FIRQ09 - Trial Balance (BA-CC Wise)';
// worksheet.getCell('A2').value = 'Company Name : DU Organics Pvt Ltd	Company Name : DU Organics Pvt Ltd	Company Name : DU Organics Pvt Ltd	Company Name : DU Organics Pvt Ltd';
// worksheet.getCell('A1').font = { bold: true , color: { argb: '000000' } };
// worksheet.getCell('A2').font = { bold: true , color: { argb: '000000' } };
// worksheet.getCell('A1').width = 500;
// worksheet.getCell('A2').width = 500;
// worksheet.getCell('A1').fill = {
//   type: 'pattern',
//   pattern: 'solid',
//   fgColor: { argb: 'CBC3E3' }
// };
// worksheet.getCell('A2').fill = {
//   type: 'pattern',
//   pattern: 'solid',
//   fgColor: { argb: 'CBC3E3' }
// };
// worksheet.mergeCells('C2:G4');
// worksheet.getCell('C2').alignment = { horizontal:'center' };
// worksheet.getCell('C2').font = { name: 'Roboto', family: 4, size: 16, underline: 'double', bold: true };
// worksheet.addRow([]);

// // Adding headers
// const header = Object.keys(data[0]);
// let headerRow = worksheet.addRow(header);
// headerRow.eachCell((cell, number) => {
//   cell.fill = {
//     type: 'pattern',
//     pattern: 'solid',
//     fgColor: { argb: 'c8ced3' },
//     bgColor: { argb: 'c8ced3' },
//   };
//   cell.font = { name: 'Roboto', bold: true };
//   cell.border = { top: { style: 'thin' }, left: { style: 'thin' }, bottom: { style: 'thin' }, right: { style: 'thin' } };
//   cell.alignment = { vertical: 'middle', horizontal: 'center', wrapText: true };
// });

// // Adding data rows
// data.forEach(rowData => {
//   let row = worksheet.addRow(Object.values(rowData));
//   row.eachCell((cell, number) => {
//     cell.border = { top: { style: 'thin' }, left: { style: 'thin' }, bottom: { style: 'thin' }, right: { style: 'thin' } };
//     cell.alignment = { vertical: 'middle', horizontal: 'center', wrapText: true };
//   });
// });

// // Setting column widths based on header length
// for (let i = 1; i <= header.length; i++) {
//   const col = worksheet.getColumn(i);
//   const width = 10;
//   if (width) {
//     col.width = width + 1;
//   }
// }

// // Writing to buffer and saving the file
// workbook.xlsx.writeBuffer().then((data) => {
//   let blob = new Blob([data], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
//   FileSaver.saveAs(blob, this.FUNCTION_CODE + '.xlsx');
// });
//     }

    // saveAsExcelFile(buffer: any, xl_file_name: string): void {
    //   try {
    //     const EXCEL_TYPE = "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8";
    //     const EXCEL_EXTENSION = ".xlsx";
    //     const data: Blob = new Blob([buffer], { type: EXCEL_TYPE });
    //     FileSaver.saveAs(data, `${xl_file_name}${EXCEL_EXTENSION}`);
    //   } catch (error) {
    //     console.error('Error saving Excel file:', error);
    //   }
    // } 

    getColumns(dataSource: any[]): string[] {
      if (dataSource && dataSource.length > 0) {
        return Object.keys(dataSource[0]);
      }
      return [];
    }

    onRowPrepared(e: any) {
      console.log('e ->' , e)
      if (e.rowType === "data") {
          if (e.data.COLOR_IND ==1) {
              e.rowElement.bgColor="#90EE90"
              e.rowElement.className = e.rowElement.className.replace("dx-row-alt", "");
          }
          else {
            e.rowElement.bgColor="#FFD580"
            e.rowElement.className = e.rowElement.className.replace("dx-row-alt", "");
          }
      }
    }

    SearchFilter(val:any){
     this.REPORT_DATA_LIST = this.FILTERED_REPORT_DATA_LIST.filter((item:any) =>
      Object.keys(item).some(key =>
        String(item[key]).toLowerCase().includes(val.toLowerCase())
      )
    );
    }
}
