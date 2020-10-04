import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IUsers } from './users'

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  //private _url: string = "/users.json"

  constructor(private http: HttpClient) { }

  getUsers(): Observable<IUsers[]>{
    return this.http.get<IUsers[]>("https://jsonplaceholder.typicode.com/users")
  }

}
