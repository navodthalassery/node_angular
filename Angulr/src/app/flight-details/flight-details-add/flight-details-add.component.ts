import { Component, Inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';

import { AlertService, UserService, AuthenticationService } from 'src/app/_services';
import { FlightService } from 'src/app/_services/flight.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-flight-details-add',
  templateUrl: './flight-details-add.component.html',
  styleUrls: ['./flight-details-add.component.scss']
})
export class FlightDetailsAddComponent implements OnInit {
  registerForm: FormGroup;
  loading = false;
  submitted = false;

  constructor(
    public dialogRef: MatDialogRef<FlightDetailsAddComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private formBuilder: FormBuilder,
    private router: Router,
    private authenticationService: AuthenticationService,
    private flightService: FlightService,
    private alertService: AlertService
  ) {
    // redirect to home if already logged in
    // if (this.authenticationService.currentUserValue) {
    //   this.router.navigate(['/']);
    // }
  }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      number: ['', Validators.required],
      //lastName: ['', Validators.required],
      place_from: ['', Validators.required],
      place_to: ['', [Validators.required]],
      time_from: ['', [Validators.required]],
      time_to: ['', [Validators.required]]
    });
  }

  // convenience getter for easy access to form fields
  get f() { return this.registerForm.controls; }

  onSubmit() {
    this.submitted = true;

    // reset alerts on submit
    this.alertService.clear();

    // stop here if form is invalid
    if (this.registerForm.invalid) {
      return;
    }

    this.loading = true;
    this.flightService.addFlight(this.registerForm.value)
      .pipe(first())
      .subscribe(
        data => {
          this.alertService.success('Registration successful', true);
          //this.router.navigate(['/login']);
          this.dialogRef.close();
        },
        error => {
          this.alertService.error(error);
          this.loading = false;
        });
  }

  cancelClick() {
    this.dialogRef.close();
  }
}
