import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  LoginForm !: FormGroup;
  submitted !: boolean;
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  console.error('heree');
   this.init_login();
  }
  init_login(){
    this.LoginForm = this.fb.group({
      username:['',Validators.required],
      password:['',Validators.required],
    })
  }
  login(){
    console.log('here');
    this.submitted = true ;
   if(!this.LoginForm.valid){
     return;
   }else {
     console.log(this.LoginForm.value);

   }
  }

}
