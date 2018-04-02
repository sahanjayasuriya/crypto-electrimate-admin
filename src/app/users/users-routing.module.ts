import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {UserFormComponent} from './user-form/user-form.component';
import {UserListComponent} from './user-list/user-list.component';
import {UsersComponent} from "./users.component";

const routes: Routes = [
  {
    //Set paths for Users
    path: '',
    component: UsersComponent,
    data: {
      title: 'Users'
    },
    children: [
      {
        //Set sub path for the New User
        path: 'new',
        component: UserFormComponent,
        data: {
          title: 'Add New User'
        },
      },
      {
        //Set sub path for the User list
        path: 'list',
        component: UserListComponent,
        data: {
          title: 'Users List'
        },
        children: [
          {
            path: ':id',
            component: UserFormComponent,
            data: {
              title: 'Edit User'
            }
          }
        ]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UsersRoutingModule { }
