import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { AlertService } from '../_services';
import { FlightService } from '../_services/flight.service';
import { FlightDetailsAddComponent } from './flight-details-add/flight-details-add.component';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';


@Component({
  selector: 'app-flight-details',
  templateUrl: './flight-details.component.html',
  styleUrls: ['./flight-details.component.scss']
})
export class FlightDetailsComponent implements OnInit {

  public name: string = 'Flight Details';
  displayedColumns = ['number', 'place_from', 'place_to', 'time_from'];
  dataSource = new MatTableDataSource<Element>();

  constructor(
    private flightService: FlightService,
    private alertService: AlertService,
    public dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.getAllFlight();
  }

  getAllFlight() {
    this.flightService.getAll()
      //.pipe(first())
      .subscribe(
        data => {
          console.log('data ',data);
          this.dataSource.data = data;
        },
        error => {
          this.alertService.error(error);
          //this.loading = false;
        });
  }

  flightAdd() {
    const dialogRef = this.dialog.open(FlightDetailsAddComponent, {
      width: '60%',
      //data: {name: this.name, animal: this.animal}
    });

    dialogRef.afterClosed().subscribe(result => {
      this.getAllFlight();
    });
  }

}
