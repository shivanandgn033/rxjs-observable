import { Routes } from '@angular/router';
import { HttprequestretryComponent } from './httprequestretry/httprequestretry.component';
import { CreationOperatorsComponent } from './creation-operators/creation-operators.component';
import { TransformationOperatorsComponent } from './transformation-operators/transformation-operators.component';
import { FilteringOperatorsComponent } from './filtering-operators/filtering-operators.component';
import { ErrorHandlingOperatorsComponent } from './error-handling-operators/error-handling-operators.component';

export const routes: Routes = [
    {
        path:'',
        component:HttprequestretryComponent
    },

    {
        path:'CreationalOperators',
        component:CreationOperatorsComponent
    },
    {
        path:'TransformationOperators',
        component:TransformationOperatorsComponent

    },
    {
        path:'FilteringOperators',
        component:FilteringOperatorsComponent
    },
    {
        path:'ErrorHandlingOperators',
        component:ErrorHandlingOperatorsComponent
    }
];
