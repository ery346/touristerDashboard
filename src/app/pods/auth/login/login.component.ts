import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { AuthService } from '@auth0/auth0-angular';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  form: FormGroup = this.fb.group({
    email: ['',[Validators.required, Validators.email]],
    password: ['',[ Validators.required, Validators.minLength(8)]]
  })
  constructor(private fb: FormBuilder, public auth: AuthService) { }

  ngOnInit(): void {
  }

  login(){
    if (this.form.valid) {
      this.form.reset();
    }
  }
}
