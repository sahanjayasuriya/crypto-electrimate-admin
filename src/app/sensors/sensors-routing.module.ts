import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {SensorFormComponent} from "./sensor-form/sensor-form.component";
import {SensorListComponent} from "./sensor-list/sensor-list.component";
import {SensorsComponent} from "./sensors.component";

const routes: Routes = [
    {
        //Add paths to the Sensors
        path: '',
        component: SensorsComponent,
        data: {
            title: 'Sensors'
        },
        children: [
            {
                //Add sub path to the Add New Sensor
                path: 'new',
                component: SensorFormComponent,
                data: {
                    title: 'Add New Sensor'
                },
            },
            {
                //Add sub pathto the Sensors list
                path: 'list',
                component: SensorListComponent,
                data: {
                    title: 'Sensors List'
                },
                children: [
                    {
                        path: ':id',
                        component: SensorFormComponent,
                        data: {
                            title: 'Edit Sensor'
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
export class SensorsRoutingModule {
}