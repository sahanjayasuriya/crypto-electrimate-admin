import {EventEmitter, Injectable} from '@angular/core';
import {BaseService} from "./base.service";
import {User} from "../users/user-metadata";

@Injectable()
export class UserService extends BaseService{

  private _updateTableEventEmitter = new EventEmitter<void>();

  getUser(id: number) {
    return this.get('user/get?id=' + id)
      .map((response) => {
        return response;
      });
  }

  getUserList() {
    return this.get('user/get/list')
      .map((response) => {
        return response;
      })
  }

  saveUser(user: User) {
    return this.post('user', user)
      .map((response) => {
        return response;
      });
  }

  updateUser(user: User) {
    return this.put('user', user)
      .map((response) => {
        return response;
      });
  }

  disableUser(user: User) {
    return this.put('user/update/disable', user)
      .map((response) => {
        return response;
      });
  }

  enableUser(user: User) {
    return this.put('user/update/enable', user)
      .map((response) => {
        return response;
      });
  }

  resetPassword(user: User) {
    return this.post('user/password/reset', user)
      .map((response) => {
        return response;
      });
  }

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
