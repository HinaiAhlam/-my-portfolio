import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router'; // استيراد الـ Routing

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ProfileComponent } from './profile/profile.component';
import { HomeComponent } from './home/home.component';

// إعداد المسارات (Routes Configuration)
const routes: Routes = [
  { path: '', component: HomeComponent },         // الصفحة الرئيسية (المسار الفارغ)
  { path: 'profile', component: ProfileComponent } // صفحة الملف الشخصي
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ProfileComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes) // تفعيل نظام التوجيه
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }