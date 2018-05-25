import { Routes } from "@angular/router";
import { WhatsnewComponent } from "./modules/whatsnew/whatsnew.component";
import { AccountActivationComponent } from "./modules/account-activation/account-activation.component";
import { WelcomePage } from './app.welcomepage';
export const routes: Routes = [
    {
        component:WelcomePage,
        path: '',
    },
    {
        path: 'accntactivate',
        loadChildren: './modules/account-activation/account-activation.module#AccountActivationModule'
    },
    {
        path:'whatsNew',
        loadChildren:'./modules/whatsnew/whatsnew.module#WhatsNewModule'
    }
];
