import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  myform : FormGroup = new FormGroup(
    {
    uname: new FormControl('',Validators.required),
    pwd: new FormControl('', [Validators.required, Validators.minLength(5), Validators.maxLength(6)])
  }
  );

  constructor() { }

  ngOnInit(): void {
  }
  getValues() {
    console.log(this.myform);
}

}
