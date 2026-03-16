import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  // Part A: Interpolation
  // ملاحظة: داخل الكلاس نكتب اسم المتغير مباشرة بدون let
  studentName: string = 'Ahlam'; 

  // Part B: Property Binding
  profileImage: string = 'https://th.bing.com/th/id/OIP.z3Qlr6i4lNVo60lyAGfPiAHaHa?w=215&h=214&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3';
  isDisabled: boolean = true;

  // Part C: Event Binding
  message: string = '';

  onButtonClick() {
    // هنا قمنا بتغيير قيمة الرسالة عند الضغط على الزر
    this.message = 'Button was clicked!';
  }
}