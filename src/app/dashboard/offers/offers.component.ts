import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatTableDataSource } from '@angular/material/table';
import { DashboardService } from '../dashboard.service';

@Component({
  selector: 'offers',
  templateUrl: './offers.component.html',
  styleUrls: ['./offers.component.scss']
})


export class OffersComponent implements OnInit {
  displayedColumns: string[] = ['id', 'name', 'contractStartDate', 'contractEndDate'];
  dataSource = new MatTableDataSource<OfferItem>([]);
  offers: OfferItem[] = [];
  isLoading = true;
  constructor(private dashbaordService: DashboardService, private snackBar: MatSnackBar) { }

  ngOnInit() {
    let message = this.snackBar.open('Loading...')
    this.dashbaordService.getOffers().subscribe(({ offers }: any) => {
      this.dataSource = new MatTableDataSource<OfferItem>(offers);
      this.offers = offers.map((offer: OfferItem) => { offer.loading = false; return offer });
      this.isLoading = false;
      message.dismiss();
    });
  }

  fetchSubscription(item: OfferItem) {
    if(!item['subscription']?.length){
      item.loading = true;
      this.dashbaordService.getSubscription(item.id).subscribe(({ subscriptions }: any) => {
        item['subscription'] = subscriptions
        item.loading = false;
      });
    }
  }
}
export interface OfferItem {
  id: number;
  name: string;
  contractStartDate: string;
  contractEndDate: string;
  subscription?: SubscriptionItem[];
  loading: boolean;
}

export interface SubscriptionItem {
  id: number;
  name: string;
  type: string;
}
