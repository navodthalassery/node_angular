﻿import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { User } from 'src/app/_models';

let apiUrl = "http://localhost:5000";

@Injectable({ providedIn: 'root' })
export class AuthenticationService {
    private currentUserSubject: BehaviorSubject<User>;
    public currentUser: Observable<User>;

    constructor(private http: HttpClient) {
        this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('auth-token')));
        this.currentUser = this.currentUserSubject.asObservable();
    }

    public get currentUserValue(): User {
        return this.currentUserSubject.value;
    }

    login(email, password):Observable<any> {
        // return this.http.post<any>(`${apiUrl}/user/authenticate`, { username, password })
        return this.http.post<any>(`${apiUrl}/user/login`, { email, password })
            .pipe(map(user => {
                console.log('JSON.stringify(user) ',JSON.stringify(user));
                // store user details and jwt token in local storage to keep user logged in between page refreshes
                localStorage.setItem('auth-token', JSON.stringify(user));
                this.currentUserSubject.next(user);
                return user;
            }));
    }

    logout() {
        // remove user from local storage and set current user to null
        localStorage.removeItem('auth-token');
        this.currentUserSubject.next(null);
    }
}