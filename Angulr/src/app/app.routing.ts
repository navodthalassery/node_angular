import { Routes, RouterModule } from '@angular/router';
import { FlightDetailsComponent } from './flight-details/flight-details.component';

import { HomeComponent } from './home';
import { LayoutPageComponent } from './layout-page/layout-page.component';
import { LoginComponent } from './login';
import { RegisterComponent } from './register';
import { AuthGuard } from './_helpers';

const routes: Routes = [
    {
        path: '', component: LayoutPageComponent, children: [
            { path: 'home', component: HomeComponent, canActivate: [AuthGuard] },
            { path: 'flight-details', component: FlightDetailsComponent, canActivate: [AuthGuard] },
            { path: 'register', component: RegisterComponent, canActivate: [AuthGuard] },
        ]
    },
    { path: 'login', component: LoginComponent },
    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

export const appRoutingModule = RouterModule.forRoot(routes);