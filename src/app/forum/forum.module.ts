import { SharedModule } from './../shared/shared.module';
import { ForumRoutingModule } from './forum-routing.module';
import { NgModule } from '@angular/core';
import { ForumComponent } from './forum.component';
import { ForumItemComponent } from './forum-item/forum-item.component';
import { CommentComponent } from './forum-item/comment/comment.component';
import { CommentStorageService } from '../services/comment-storage.service';

@NgModule({
    declarations: [ForumComponent, ForumItemComponent, CommentComponent],
    imports: [
        ForumRoutingModule,
        SharedModule
    ],
    providers: [CommentStorageService]
})

export class ForumModule {}
