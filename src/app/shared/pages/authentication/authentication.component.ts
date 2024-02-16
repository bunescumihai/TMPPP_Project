import {Component, OnInit} from '@angular/core';
import { FormGroup, Validators } from "@angular/forms";
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import {NgxTranslateModule} from "../../../translate/translate.module";
import {RouterLink} from "@angular/router";

@Component({
  standalone: true,
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.css'],
  imports: [ReactiveFormsModule, NgxTranslateModule, RouterLink]
})
export class AuthenticationComponent implements OnInit{
  authForm: FormGroup = new FormGroup({
    username: new FormControl(),
    password: new FormControl()
  })

  ngOnInit(): void {

  }
}
