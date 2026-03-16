import { Component } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
  // --- الجزء الأول: ngIf ---
  isLoggedIn: boolean = false;
  studentName: string = 'Ahlam';

  // --- الجزء الثاني: ngFor (Step 7) ---
  skills: string[] = ['Angular', 'TypeScript', 'HTML', 'CSS'];

  // --- الجزء الثالث: ngSwitch (Step 11) ---
  // جربي تغيير القيمة هنا بين 'admin' أو 'editor' أو 'viewer' لرؤية التغيير
  userRole: string = 'editor';

  // دالة تبديل الدخول
  toggleLogin() {
    this.isLoggedIn = !this.isLoggedIn;
  }
}