import { Component } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
  isLoggedIn: boolean = false;
  studentName: string = 'Ahlam';

  skills: string[] = ['Angular', 'TypeScript', 'HTML', 'CSS'];


  userRole: string = 'editor';

  toggleLogin() {
    this.isLoggedIn = !this.isLoggedIn;
  }
}