import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthentificationService } from '../../repositories/authentification.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  RegisterForm!: FormGroup;
  submitted!: boolean;
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
    this.RegisterForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      username: ['', Validators.required],
      password: ['', Validators.required],
    });
  }
  register() {
    console.log('here');
    this.submitted = true;
    if (!this.RegisterForm.valid) {
      return;
    } else {
      console.log(this.RegisterForm.value);
      this.authService.register(this.RegisterForm.value).subscribe({
        next: (data) => {
          console.log(data);
          this.router.navigate(['/login']);
        },
        error: (err) => {
          console.log(err);
        },
      });
    }
  }
}
