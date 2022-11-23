import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { OffersComponent } from './offers/offers.component';
import { DashboardComponent } from './dashboard.component';
import { MatToolbarModule } from '@angular/material/toolbar'
import { MatTableModule } from '@angular/material/table';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatChipsModule } from '@angular/material/chips'
import {MatButtonModule} from '@angular/material/button';



@NgModule({
  declarations: [
    DashboardComponent,
    OffersComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    MatToolbarModule,
    MatTableModule,
    MatSnackBarModule,
    MatExpansionModule,
    MatProgressSpinnerModule,
    MatChipsModule,
    MatButtonModule
  ]
})
export class DashboardModule { }
