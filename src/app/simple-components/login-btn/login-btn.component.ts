import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-login-btn',
  templateUrl: './login-btn.component.html',
  styleUrls: ['./login-btn.component.scss'],
})
export class LoginBtnComponent implements OnInit {
  public redirectUrl = decodeURI(environment.app_url);

  constructor() {}

  ngOnInit(): void {}
}
