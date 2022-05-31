import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserType } from '../../../user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  API_URL: string = 'http://localhost:3001/users';
  constructor(private http: HttpClient) { }

  signup(SignUp: any): Observable<UserType> {
    return this.http.post<UserType>(`${this.API_URL}`, SignUp)
  }
}
