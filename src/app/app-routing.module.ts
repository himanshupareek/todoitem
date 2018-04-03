import { NgModule } from "@angular/core";
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { SigninComponent } from "./auth/signin/signin.component";
import { TodoComponent } from "./todo/todo.component";
import { NotfoundComponent } from "./notfound/notfound/notfound.component";
import { AuthGuard } from "./auth/auth-guard.service";

const appRoutes : Routes = [
    { path : 'signin', component : SigninComponent },
    { path : 'todoList', component : TodoComponent, canActivate : [AuthGuard] },
    { path : '', redirectTo : 'signin', pathMatch : 'full' },
    { path : '**', component : NotfoundComponent }
]

@NgModule({
    imports : [RouterModule.forRoot(appRoutes)],
    exports : [RouterModule]
})
export class AppRoutingModule{

}