import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

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
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }

  login(){
    if (this.form.valid) {
      this.form.reset();
    }
  }
}
