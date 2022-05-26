import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { 
    path: 'home', 
    loadChildren: () => import('./home/home.module').then(m => m.HomeModule) 
  },
  { 
    path: 'users', 
    loadChildren: () => import('./users/users.module').then(m => m.UsersModule) 
  },
  { 
    path: 'user/:id', 
    loadChildren: () => import('./users/user/user.module').then(m => m.UserModule) 
  },
  { 
    path: 'cities', 
    loadChildren: () => import('./cities/cities.module').then(m => m.CitiesModule) 
  },
  { 
    path: 'city/:id', 
    loadChildren: () => import('./cities/city/city.module').then(m => m.CityModule) 
  },
  { 
    path: 'profile', 
    loadChildren: () => import('./profile/profile.module').then(m => m.ProfileModule) 
  },
  { 
    path: 'notifications', 
    loadChildren: () => import('./notifications/notifications.module').then(m => m.NotificationsModule) 
  },
  { 
    path: 'settings', 
    loadChildren: () => import('./settings/settings.module').then(m => m.SettingsModule) 
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
