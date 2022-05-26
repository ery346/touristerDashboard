import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CitiesService } from '../../services/cities.service';
import { timezoneService } from '../../services/timezones.service';

@Component({
  selector: 'app-dialog-body-component',
  templateUrl: './dialog-body-component.component.html',
  styleUrls: ['./dialog-body-component.component.scss']
})
export class DialogBodyComponentComponent implements OnInit {
  myForm: FormGroup = this.fb.group({
    name : [this.data.name],
    timezone: [this.data.timezone],
    created_at: [this.data.createdAt],
    updated_at: [this.data.updatedAt],
  })
  date = new FormControl(new Date());
  updateNow:any = Date.now();
  timezones:any[] = []

  constructor(private fb: FormBuilder, private timezoneService: timezoneService, @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {
    this.timezones = this.timezoneService.timezones
    
  }

  create(){
    this.myForm.value.id = Date.now();
    console.log(this.myForm.value);
    // this.cityService.postAdminCities(this.myForm.value)

    
  }
}
