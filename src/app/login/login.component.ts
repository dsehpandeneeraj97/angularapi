import { Component, OnInit } from '@angular/core';
import { FormGroup, FormGroupDirective, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginform:FormGroup;
  loginUser:string;
  formGroupDirective:FormGroupDirective;
  constructor(private formBuilder:FormBuilder ) {
  this.loginform = this.formBuilder.group({  
    username:['',Validators.compose([Validators.required, Validators.minLength(5)])],
    password:['',Validators.compose([Validators.required, Validators.minLength(6)])]
   })
  }

  ngOnInit(): void {
  }

}
