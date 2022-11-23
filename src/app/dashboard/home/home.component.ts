import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatTableDataSource } from '@angular/material/table';
import { DashboardService } from '../dashboard.service';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})


export class HomeComponent implements OnInit  {
    displayedColumns: string[] = ['id', 'name', 'contractStartDate', 'contractEndDate'];
    dataSource = new MatTableDataSource<OfferItem>([]);
    isLoading = true;
    constructor(private dashbaordService : DashboardService, private snackBar : MatSnackBar){}
    ngOnInit() {
      let message = this.snackBar.open('Loading...')
      this.dashbaordService.getOffers().subscribe(({offers}:any)=>{
          this.dataSource = new MatTableDataSource<OfferItem>(offers);
          this.isLoading = false;
          message.dismiss();
      });
    }
  }
  export interface OfferItem {
    id: number;
    name: string;
    contractStartDate: string;
    contractEndDate: string;

  }
  
  const OFFER_DATA: OfferItem[] = [
    {
      "id": 100,
      "name": "Internet Bundle",
      "contractEndDate": "2016-05-01",
      "contractStartDate": "2014-05-01"
  },
  {
      "id": 101,
      "name": "Cool Offer 2019",
      "contractEndDate": "2021-01-01",
      "contractStartDate": "2017-01-01"
  }
  ];
