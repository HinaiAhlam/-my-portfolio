import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-portfolio.';
}


// --- Angular Project Exploration Answers ---

// 1. What is the purpose of the src/app/ folder?
// It is the heart of the application. It contains the logic, components, 
// services, and modules that define how the app functions and looks.

// 2. What does app.component.ts contain?
// This is the main TypeScript file for the root component. It contains the 
// logic (class), the data (properties), and the metadata (@Component decorator) 
// that links it to its HTML and CSS.

// 3. What is the role of app.module.ts?
// It acts as the "root module" that organizes the app. It declares components, 
// imports necessary Angular modules, and bootstraps the main component to start the app.

// 4. Where would you add global CSS styles?
// Global styles are added in the 'src/styles.css' file. Any CSS written there 
// will apply to the entire application.

// 5. What does angular.json control?
// It is the workspace configuration file. It controls how the project is built, 
// defines paths for assets and styles, and manages environment settings for 
// development and production.