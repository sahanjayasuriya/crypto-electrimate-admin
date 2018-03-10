import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {UserFormComponent} from './user-form/user-form.component';
import {UserListComponent} from './user-list/user-list.component';
import {UsersComponent} from "./users.component";

const routes: Routes = [
  {
    path: '',
    component: UsersComponent,
    data: {
      title: 'Users'
    },
    children: [
      {
        path: 'new',
        component: UserFormComponent,
        data: {
          title: 'Add New User'
        },
      },
      {
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
