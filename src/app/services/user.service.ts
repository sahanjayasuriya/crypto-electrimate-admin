import {EventEmitter, Injectable} from '@angular/core';
import {BaseService} from "./base.service";
import {User} from "../users/user-metadata";

@Injectable()
export class UserService extends BaseService{

  private _updateTableEventEmitter = new EventEmitter<void>();

    //Get logged in user
    getUser(id: string) {
    return this.get('user/get?id=' + id)
      .map((response) => {
        return response;
      });
  }

  //Get user list
  getUserList() {
    return this.get('user/get/list')
      .map((response) => {
        return response;
      })
  }

  //Save user
  saveUser(user: User) {
    return this.post('user', user)
      .map((response) => {
        return response;
      });
  }

  //Update User
  updateUser(user: User) {
    return this.put('user', user)
      .map((response) => {
        return response;
      });
  }

  //Disable user
  disableUser(user: User) {
    return this.put('user/update/disable', user)
      .map((response) => {
        return response;
      });
  }

  //Enable User
  enableUser(user: User) {
    return this.put('user/update/enable', user)
      .map((response) => {
        return response;
      });
  }

  //Delete User
  deleteUser(user: User) {
    return this.delete('user?id=' + user.id)
      .map((response) => {
        return response;
      });
  }

  get updateTableEventEmitter(): EventEmitter<void> {
    return this._updateTableEventEmitter;
  }

}
