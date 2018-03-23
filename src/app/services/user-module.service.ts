import {EventEmitter, Injectable} from '@angular/core';
import {BaseService} from "./base.service";
import {Module} from "../modules/module-metadata";

@Injectable()
export class ModuleService extends BaseService {

    private _updateTableEventEmitter = new EventEmitter<void>();

    get updateTableEventEmitter(): EventEmitter<void> {
        return this._updateTableEventEmitter;
    }

    getModule(id: string) {
        return this.get('module/get?id=' + id)
            .map((response) => {
                return response;
            });
    }

    getModuleList() {
        return this.get('module/get/list')
            .map((response) => {
                return response;
            })
    }

    saveModule(module: Module) {
        return this.post('module', module)
            .map((response) => {
                return response;
            });
    }

    updateModule(module: Module) {
        return this.put('module', module)
            .map((response) => {
                return response;
            });
    }

    disableModule(module: Module) {
        return this.put('module/update/disable', module)
            .map((response) => {
                return response;
            });
    }

    enableModule(module: Module) {
        return this.put('module/update/enable', module)
            .map((response) => {
                return response;
            });
    }

    deleteModule(module: Module) {
        return this.delete('module?id=' + module.id)
            .map((response) => {
                return response;
            });
    }

}
