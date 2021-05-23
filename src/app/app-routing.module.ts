import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// import { UserCreateComponent } from './components/user-create/user-create.component';
// import { UserDetailsComponent } from './components/user-details/user-details.component';
import { UserListComponent } from './components/user-list/user-list.component';

const routes: Routes = [
  { path: '', redirectTo: 'users', pathMatch: 'full' },
  { path: 'users', component: UserListComponent },
  // { path: 'users/:id', component: UserDetailsComponent },
  // { path: 'create', component: UserCreateComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
