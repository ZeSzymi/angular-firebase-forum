import { UserComponent } from './user/user.component';
import { AuthGuard } from './../services/auth-guard.service';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const coreRoutes: Routes = [
    { path: '', redirectTo: '/forum', pathMatch: 'full'},
    { path: 'home', component: HomeComponent },
    { path: 'user', component: UserComponent, canActivate: [AuthGuard]}
];

@NgModule({
    imports: [RouterModule.forChild(coreRoutes)],
    exports: [RouterModule],
    providers: [AuthGuard]
})
export class CoreRoutingModule {}
