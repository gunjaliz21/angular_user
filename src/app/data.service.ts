import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  userList = new BehaviorSubject([]);
  constructor(private http:HttpClient) { }
  getData(){
    this.http.get('https://reqres.in/api/users').subscribe((resp:any) => {
      this.userList.next(resp.data);
    });
  }
  
}
