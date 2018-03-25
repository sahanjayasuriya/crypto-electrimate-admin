import {EventEmitter, Injectable} from '@angular/core';
import {BaseService} from "./base.service";
import {Modules} from "../modules/module-metadata";

@Injectable()
export class InventoryService extends BaseService {

    private _updateTableEventEmitter = new EventEmitter<void>();

    get updateTableEventEmitter(): EventEmitter<void> {
        return this._updateTableEventEmitter;
    }

    getModulesList(batch: number) {
        return this.get('inventory/modules/get/list?batch=' + batch)
            .map((response) => {
                return response;
            })
    }

    saveModules(modules: Modules) {
        return this.post('inventory/modules', modules)
            .map((response) => {
                return response;
            });
    }

    getBatches() {
        return this.get('inventory/modules/get/batches')
            .map((response) => {
                return response;
            })
    }

}
