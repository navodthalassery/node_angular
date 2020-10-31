import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatTableModule } from '@angular/material/table';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { NgxMatDatetimePickerModule, NgxMatTimepickerModule } from '@angular-material-components/datetime-picker';

@NgModule({
    imports: [
        MatDialogModule,
        MatButtonModule,
        MatCheckboxModule,
        MatToolbarModule,
        MatIconModule,
        MatInputModule,
        MatButtonToggleModule,
        MatTableModule,
        MatSidenavModule,
        MatPaginatorModule,
        MatDatepickerModule,
        NgxMatTimepickerModule,
        NgxMatDatetimePickerModule,
    ],
    exports: [
        MatDialogModule,
        MatButtonModule,
        MatCheckboxModule,
        MatToolbarModule,
        MatIconModule,
        MatInputModule,
        MatButtonToggleModule,
        MatTableModule,
        MatSidenavModule,
        MatPaginatorModule,
        MatDatepickerModule,
        NgxMatTimepickerModule,
        NgxMatDatetimePickerModule,
    ]
})
export class MaterialModule { }
