import {EventEmitter, Injectable} from '@angular/core';
import {BaseService} from "./base.service";
import {Modules} from "../modules/module-metadata";
import {Sensors} from "../sensors/sensor-metadata";

@Injectable()
export class InventoryService extends BaseService {

    private _updateTableEventEmitter = new EventEmitter<void>();

    get updateTableEventEmitter(): EventEmitter<void> {
        return this._updateTableEventEmitter;
    }

    //Get Module list
    getModulesList(batch: number) {
        return this.get('inventory/modules/get/list?batch=' + batch)
            .map((response) => {
                return response;
            })
    }

    //Save Modules
    saveModules(modules: Modules) {
        return this.post('inventory/modules', modules)
            .map((response) => {
                return response;
            });
    }

    //Get Module Batches
    getModuleBatches() {
        return this.get('inventory/modules/get/batches')
            .map((response) => {
                return response;
            })
    }

    //Get Sensors list
    getSensorsList(batch: number) {
        return this.get('inventory/sensors/get/list?batch=' + batch)
            .map((response) => {
                return response;
            })
    }

    //Save Sensors
    saveSensors(sensors: Sensors) {
        return this.post('inventory/sensors', sensors)
            .map((response) => {
                return response;
            });
    }

    //Get Sensors batches
    getSensorBatches() {
        return this.get('inventory/sensors/get/batches')
            .map((response) => {
                return response;
            })
    }

}
