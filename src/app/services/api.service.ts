import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(
    private _http: HttpClient
  ) { }

  apiUrl = 'https://jsonplaceholder.typicode.com/users';

  searchUsers(): Observable<any>{
    return this._http.get(this.apiUrl);
  }

  getUsers(id): Observable<any> {
    return this._http.get(this.apiUrl+`/${id}`).
    pipe(delay(3000))
  }
}
