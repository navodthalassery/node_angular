import { Injectable, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

// used to create fake backend
import { fakeBackendProvider } from './_helpers';
import { appRoutingModule } from './app.routing';
import { JwtInterceptor, ErrorInterceptor } from './_helpers';
import { AppComponent } from './app.component';
import { HomeComponent } from './home';
import { LoginComponent } from './login';
import { RegisterComponent } from './register';
import { AlertComponent } from './_components';
import { MaterialModule } from './material.module';;
import { FlightDetailsComponent } from './flight-details/flight-details.component';
import { FlightDetailsAddComponent } from './flight-details/flight-details-add/flight-details-add.component';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxMatDatetimePickerModule, NgxMatTimepickerModule } from '@angular-material-components/datetime-picker';
import { MAT_DATE_LOCALE, NativeDateAdapter } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { NgxMatDateAdapter } from '@angular-material-components/datetime-picker';;
import { LayoutPageComponent } from './layout-page/layout-page.component'


@NgModule({
    imports: [
        BrowserModule,
        //CommonModule,
        BrowserAnimationsModule,
        ReactiveFormsModule,
        HttpClientModule,
        appRoutingModule,
        MaterialModule
    ],
    declarations: [
        AppComponent,
        HomeComponent,
        LoginComponent,
        RegisterComponent,
        AlertComponent,
        FlightDetailsComponent,
        FlightDetailsAddComponent,
        LayoutPageComponent
    ],
    providers: [
        { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
        { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
        // {
        //     provide: NgxMatDateAdapter,
        //     useClass: CustomDateAdapter,
        //     //deps: [MAT_DATE_LOCALE, NGX_MAT_MOMENT_DATE_ADAPTER_OPTIONS]
        // },
        // provider used to create fake backend
        fakeBackendProvider
    ],
    bootstrap: [AppComponent]
})
export class AppModule { };