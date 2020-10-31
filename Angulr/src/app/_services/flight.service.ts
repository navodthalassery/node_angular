import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

let apiUrl = "http://localhost:5000";

@Injectable({ providedIn: 'root' })
export class FlightService {
    constructor(private http: HttpClient) { }

    getAll() {
        return this.http.get<any[]>(`${apiUrl}/flight/details/`);
    }

    addFlight(flight: any) {
        return this.http.post(`${apiUrl}/flight/create`, flight);
    }

    // getOneFlight(id: any) {
    //     return this.http.post(`${apiUrl}/flight/details/${id}`);
    // }

    // login(user: any) {
    //     return this.http.post(`${apiUrl}/user/login`, user);
    // }

    // delete(id: number) {
    //     return this.http.delete(`${apiUrl}/user/${id}`);
    // }
}