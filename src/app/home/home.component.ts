import { Component } from '@angular/core';
import { AuthGoogleService } from '../auth-google.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  constructor(
    private authGoogleService: AuthGoogleService,
    private router: Router
  ) {}

  logout() {
    this.authGoogleService.logout();
    this.router.navigate(['/']);
  }
  data: any;
  showData() {
    this.data = this.authGoogleService.getProfile();
    console.log(this.data);
  }
}
