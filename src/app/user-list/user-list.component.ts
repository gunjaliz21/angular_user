import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {
  users:any;
  dataSubscription:any;
  constructor(private dataService: DataService, protected router: Router) { 
  }

  ngOnInit(): void {
    this.dataSubscription = this.dataService.userList.subscribe((data) => {
      
      if(data && data.length == 0){
        this.dataService.getData();
      }else{
        this.users = data;
      }
    });
  }

  deleteRow(userId: number): void {
    this.dataService.userList.next(this.users.filter((x:any)=>x.id !== userId));
  }


  ngOnDestroy(): void {
    this.dataSubscription.unsubscribe();
  }
}
