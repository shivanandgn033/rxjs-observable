import { Routes } from '@angular/router';
import { HttprequestretryComponent } from './httprequestretry/httprequestretry.component';
import { CreationOperatorsComponent } from './creation-operators/creation-operators.component';

export const routes: Routes = [
    {
        path:'',
        component:HttprequestretryComponent
    },

    {
        path:'CreationalOperators',
        component:CreationOperatorsComponent
    }
];
