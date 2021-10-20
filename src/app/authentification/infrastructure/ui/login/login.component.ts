import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthentificationService } from '../../repositories/authentification.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  LoginForm!: FormGroup;
  submitted!: boolean;
  errorLogin!: boolean;
  constructor(
    private fb: FormBuilder,
    private authService: AuthentificationService,
    private router: Router
  ) {}

  ngOnInit(): void {
    console.error('heree');
    this.init_login();
  }
  init_login() {
    this.LoginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });
  }
  login() {
    console.log('here');
    this.submitted = true;
    if (!this.LoginForm.valid) {
      return;
    } else {
      let users = [];
      this.errorLogin = false;
      this.authService.getUsers().subscribe({
        next: (data) => {
          console.log(data);
          users = data.filter(
            (data: any) =>
              this.LoginForm.controls.username.value === data.username
          );
          console.log(users);
          if (users.length > 0) {
            if (users[0].password === this.LoginForm.controls.password.value) {
              console.log('here');
              localStorage.setItem(
                'accesToken',
                'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ'
              );
              localStorage.setItem('users', JSON.stringify(users));
              this.router.navigate(['/dashbord']);
            } else {
              this.errorLogin = true;
            }
          } else {
            this.errorLogin = true;
          }
        },
        error: (err) => {
          console.log(err);
        },
      });
    }
  }
}
