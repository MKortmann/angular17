import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { ModeratorDashboardComponent } from './components/moderator-dashboard/moderator-dashboard.component';
import { UserDashboardComponent } from './components/user-dashboard/user-dashboard.component';
import { LazyloadingComponent } from './components/lazyloading/lazyloading.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, AdminDashboardComponent, ModeratorDashboardComponent, UserDashboardComponent, LazyloadingComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'angular 17';

  users = ["Matthias","Joe","Anna"];
  loggedIn = true;
  accessLevel: string = "admin"


}
