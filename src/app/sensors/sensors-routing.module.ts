import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {SensorFormComponent} from "./sensor-form/sensor-form.component";
import {SensorListComponent} from "./sensor-list/sensor-list.component";
import {SensorsComponent} from "./sensors.component";

const routes: Routes = [
    {
        path: '',
        component: SensorsComponent,
        data: {
            title: 'Sensors'
        },
        children: [
            {
                path: 'new',
                component: SensorFormComponent,
                data: {
                    title: 'Add New Sensor'
                },
            },
            {
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