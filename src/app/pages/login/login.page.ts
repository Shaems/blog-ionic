import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth-service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  loginForm: FormGroup

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router,
  ) {
    this.loginForm = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    })
   }

  ngOnInit() {
  }

  iniciarSesion() {
    this.authService.login(this.loginForm.value.email, this.loginForm.value.password)
      .subscribe( login => {
        localStorage.setItem('token', login.token);
        this.router.navigate(['/tabs/tab1'])
      })
  }

}
