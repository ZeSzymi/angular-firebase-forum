import { AdminTopicComponent } from './admin-topic/admin-topic.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule, CanActivate } from '@angular/router';

const appRoutes: Routes = [
    {path: 'admin-topics', component: AdminTopicComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}
