import {EventEmitter, Injectable} from '@angular/core';
import {BaseService} from "./base.service";
import {Module} from "../modules/module-metadata";

@Injectable()
export class InventoryService extends BaseService {

    private _updateTableEventEmitter = new EventEmitter<void>();

    get updateTableEventEmitter(): EventEmitter<void> {
        return this._updateTableEventEmitter;
    }

    getModule(id: string) {
        return this.get('inventory/module/get?id=' + id)
            .map((response) => {
                return response;
            });
    }

    getModuleList() {
        return this.get('inventory/module/get/list')
            .map((response) => {
                return response;
            })
    }

    saveModule(module: Module) {
        return this.post('inventory/module', module)
            .map((response) => {
                return response;
            });
    }

    deleteModule(module: Module) {
        return this.delete('inventory/module?id=' + module.id)
            .map((response) => {
                return response;
            });
    }

}
