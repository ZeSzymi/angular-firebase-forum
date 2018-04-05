import { SharedModule } from './../shared/shared.module';
import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './login/login.component';
import { SigninComponent } from './signin/signin.component';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

@NgModule({
    declarations: [SigninComponent, LoginComponent],
    imports: [
        AuthRoutingModule,
        FormsModule,
        SharedModule
    ]
})
export class AuthModule {}
