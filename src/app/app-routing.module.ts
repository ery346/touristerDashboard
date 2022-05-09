import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './pods/auth/auth.component';
import { MainComponent } from './pods/main/main.component';
import { IsLogedGuard } from './shared/guards/is-loged.guard';

const routes: Routes = [
  { 
    path: 'auth', 
    component: AuthComponent,
    loadChildren: () => import('./pods/auth/auth.module').then(m => m.AuthModule) 
  },
  { 
    path: '', 
    canActivate: [IsLogedGuard],
    component: MainComponent,
    loadChildren: () => import('./pods/main/main.module').then(m => m.MainModule) 
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
