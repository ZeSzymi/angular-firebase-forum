import { ForumItemComponent } from './forum-item/forum-item.component';
import { NgModule } from '@angular/core';
import { ForumComponent } from './forum.component';
import { Routes, RouterModule } from '@angular/router';


const forumRoutes: Routes = [
    { path: 'forum', component: ForumComponent },
    { path: 'forum-item/:id', component: ForumItemComponent }
];

@NgModule({
    imports: [RouterModule.forChild(forumRoutes)],
    exports: [RouterModule]
})

export class ForumRoutingModule {}
