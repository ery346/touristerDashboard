import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  form: FormGroup = this.fb.group({
    name: ['', Validators.required],
    lastname: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(10)]],
    confirm: ['', Validators.required]
  })
  constructor(private fb : FormBuilder) { }

  ngOnInit(): void {
    console.log('sdfsdfsd');
    
  }

  validacion( campo: string){
    return this.form.get( campo )?.invalid && 
           this.form.get( campo )?.touched
  }
  submit(){

  }
}
