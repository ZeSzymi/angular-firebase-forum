import { FormsModule } from '@angular/forms';
import { UserComponent } from './user/user.component';
import { CoreRoutingModule } from './core-routing.module';
import { MessengerComponent } from './messenger/messenger.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';

@NgModule({
    declarations: [
        HeaderComponent,
        HomeComponent,
        UserComponent,
        MessengerComponent
    ],
    exports: [
        HeaderComponent
    ],
    imports: [
        CoreRoutingModule,
        FormsModule,
        SharedModule
    ]
})
export class CoreModule {}
