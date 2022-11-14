import { Component, OnInit,Input } from '@angular/core';
import { FormGroup,FormControl,NgForm } from '@angular/forms'
import { Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss']
})
export class AddUserComponent implements OnInit {

  constructor(private dataServices:DataService, protected router: Router) { }

  ngOnInit(): void {
  }
  confirmUser(addUserForm:NgForm){

    this.dataServices.userList.subscribe((resp: any) => {
      resp.push(addUserForm.value);

    })
    this.router.navigate(['/users'])
  }

}
