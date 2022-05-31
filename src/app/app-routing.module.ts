import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './pods/auth/auth.component';
import { MainComponent } from './pods/main/main.component';
import { IsLoggedInGuard } from './shared/guards/is-logged-in.guard';

const routes: Routes = [
  { 
    path: 'auth', 
    component: AuthComponent,
    loadChildren: () => import('./pods/auth/auth.module').then(m => m.AuthModule) 
  },
  { 
    path: '', 
    canActivate: [IsLoggedInGuard],
    component: MainComponent,
    loadChildren: () => import('./pods/main/main.module').then(m => m.MainModule) 
  },
  { 
    path: '**', 
    redirectTo: ''
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
