import { Component } from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule} from "@angular/forms";
import {NgxTranslateModule} from "../../../translate/translate.module";
import {RouterLink} from "@angular/router";

@Component({
  standalone: true,
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  imports: [
    NgxTranslateModule,
    ReactiveFormsModule,
    RouterLink
  ],
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {

  regForm: FormGroup = new FormGroup({
    email: new FormControl(''),
    username: new FormControl(''),
    password1: new FormControl(''),
    password2: new FormControl('')
  })

  ngOnInit(): void {

  }
}
