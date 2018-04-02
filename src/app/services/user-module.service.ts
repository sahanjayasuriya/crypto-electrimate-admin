import {EventEmitter, Injectable} from '@angular/core';
import {BaseService} from "./base.service";
import {UserModule} from "../users/user-module.metadata";

@Injectable()
export class ModuleService extends BaseService {

    private _updateTableEventEmitter = new EventEmitter<void>();

    get updateTableEventEmitter(): EventEmitter<void> {
        return this._updateTableEventEmitter;
    }

    //Get Module for the relevant user
    getModule(id: string) {
        return this.get('module/get?id=' + id)
            .map((response) => {
                return response;
            });
    }

    //Save Modules
    saveModule(module: UserModule) {
        return this.post('module', module)
            .map((response) => {
                return response;
            });
    }

    //Update Module
    updateModule(module: UserModule) {
        return this.put('module', module)
            .map((response) => {
                return response;
            });
    }

    //Delete Module
    deleteModule(module: UserModule) {
        return this.delete('module?id=' + module.id)
            .map((response) => {
                return response;
            });
    }

}
