import {NgModule} from '@angular/core';
import {RouterModule, Routes, PreloadAllModules} from '@angular/router';

import {FullLayoutComponent} from "./layouts/full/full-layout.component";
import {ContentLayoutComponent} from "./layouts/content/content-layout.component";

import {Full_ROUTES} from "./shared/routes/full-layout.routes";
import {CONTENT_ROUTES} from "./shared/routes/content-layout.routes";
import {ErrorPageComponent} from "./error/error-page.component";

const appRoutes: Routes = [
    {
        //Set path for login
        path: '',
        redirectTo: 'login',
        pathMatch: 'full',
    },
    {path: '', component: FullLayoutComponent, data: {title: 'full Views'}, children: Full_ROUTES},
    {path: '', component: ContentLayoutComponent, data: {title: 'content Views'}, children: CONTENT_ROUTES},
    {
        //Set pat for 404
        path: '404',
        component: ErrorPageComponent
    },
    {
        //If path is incorrect, redirect to 404
        path: '**',
        redirectTo: '/404'
    }
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes, {preloadingStrategy: PreloadAllModules})],
    exports: [RouterModule]
})

export class AppRoutingModule {
}
