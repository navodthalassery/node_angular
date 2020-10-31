import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from 'src/app/_models';

let apiUrl = "http://localhost:5000";

@Injectable({ providedIn: 'root' })
export class UserService {
    constructor(private http: HttpClient) { }

    getAll() {
        return this.http.get<User[]>(`${apiUrl}/user/details`);
    }

    register(user: User) {
        return this.http.post(`${apiUrl}/user/register`, user);
    }

    login(user: User) {
        return this.http.post(`${apiUrl}/user/login`, user);
    }

    delete(id: number) {
        return this.http.delete(`${apiUrl}/user/${id}`);
    }
}