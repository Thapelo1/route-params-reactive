import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../../environments/environment";
import {User} from "./interfaces/user.interface";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  baseUrl = environment.baseUrl

  getUsers(): Observable<User[]>{
    return this.http.get<User[]>(`${this.baseUrl}/users`)
  }

  getUser(id: string | null): Observable<User>{
    return this.http.get<User>(`${this.baseUrl}/users/${id}`)
  }
}
