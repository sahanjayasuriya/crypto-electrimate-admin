import {Routes} from '@angular/router';

//Route for content layout with sidebar, navbar and footer.

export const Full_ROUTES: Routes = [
    {
        path: 'dashboard',
        loadChildren: './dashboard/dashboard.module#DashboardModule'
    },
    {
        path: 'users',
        loadChildren: './users/users.module#UsersModule'
    },
    {
        path: 'modules',
        loadChildren: './modules/modules.module#ModulesModule'
    },
    {
        path: 'sensors',
        loadChildren: './sensors/sensors.module#SensorsModule'
    }
];
