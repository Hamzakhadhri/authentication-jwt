import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from './pages/login/login.component';
import {AuthGuard} from "./_guards/auth-guard";
import {Role} from "./enums/role.enum";

const routes: Routes = [
    
   
 
    {path: 'login', component: LoginComponent},
    {path: 'logout', component: LoginComponent},

    
   
    
    
];

@NgModule({
    declarations: [],
    imports: [
        RouterModule.forRoot(routes)//{onSameUrlNavigation: 'reload'}
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
