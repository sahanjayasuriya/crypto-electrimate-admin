import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {ModulesComponent} from "./modules.component";
import {ModuleFormComponent} from "./module-form/module-form.component";
import {ModuleListComponent} from "./module-list/module-list.component";

const routes: Routes = [
    {
        //Add paths for the modules
        path: '',
        component: ModulesComponent,
        data: {
            title: 'Modules'
        },

        children: [
            //Add sub path to the Add New Module
            {
                path: 'new',
                component: ModuleFormComponent,
                data: {
                    title: 'Add New Module'
                },
            },
            //Add sub path to the Module List
            {
                path: 'list',
                component: ModuleListComponent,
                data: {
                    title: 'Modules List'
                },
                children: [
                    {
                        path: ':id',
                        component: ModuleFormComponent,
                        data: {
                            title: 'Edit Module'
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
export class ModulesRoutingModule {
}