import { Component, OnInit,Input } from '@angular/core';
import { DataService } from '../data.service';
import { ActivatedRoute, Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.scss']
})
export class EditUserComponent implements OnInit {

  user:any={};
  id:any;
  constructor(private dataServices:DataService , private route : ActivatedRoute, protected router: Router) { 
    
  }
  ngOnInit(): void {
   this.route.params.subscribe((params:any) => {
    this.id = params["id"];
   });
   this.dataServices.userList.subscribe((resp:any) =>{
    console.log(this.id, resp)
    this.user=resp.filter((user:any) => user.id == this.id)[0];

  })
  }

  updateUser(form: NgForm){
    this.router.navigate(['/users']);
  }
}
