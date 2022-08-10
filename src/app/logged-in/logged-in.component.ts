import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

interface access_token {
  access_token?: string;
  refresh_token?: string;
  expires_in?: string;
}

@Component({
  selector: 'app-logged-in',
  templateUrl: './logged-in.component.html',
  styleUrls: ['./logged-in.component.scss'],
})
export class LoggedInComponent implements OnInit {
  private token?: access_token;
  public token_received = false;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe((params) =>
      params['pinterest'] ? (this.token = JSON.parse(params['pinterest'])) : ''
    );
    if (this.token) {
      localStorage.setItem('access_token', JSON.stringify(this.token));
      this.token_received = true;
    }
  }
}
