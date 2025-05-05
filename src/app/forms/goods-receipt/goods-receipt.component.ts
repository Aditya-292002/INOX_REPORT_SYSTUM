import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardModule } from 'primeng/card';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';
import { RadioButton } from 'primeng/radiobutton';
@Component({
  selector: 'app-goods-receipt',
  imports: [CommonModule, FormsModule, CardModule, InputTextModule,RadioButton],
  templateUrl: './goods-receipt.component.html',
  styleUrl: './goods-receipt.component.css'
})
export class GoodsReceiptComponent {
  selectedCategory:any;
  categories: any[] = [
    { name: 'GRN for One Local PO only other than IAPL', key: '0' },
    { name: 'GRN for multiple Local PO-Purchase(More than one Local PO other than IAPL)', key: '1' },
    { name: 'PR for Free Receipt GRN or Below Rs. 10000 Bill without PO', key: '2' },
    { name: 'IMPORT/IAPL Store GRN without Valuation', key: '3' },
    { name: 'Direct Free GRN No need created PR', key: '4' }
];
}
