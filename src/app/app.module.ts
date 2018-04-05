import { AdminTopicService } from './services/admin-topic.service';
import { AuthService } from './services/auth.service';
import { Http, HttpModule } from '@angular/http';
import { HeaderComponent } from './core/header/header.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { ForumModule } from './forum/forum.module';
import { SharedModule } from './shared/shared.module';
import { AuthModule } from './auth/auth.module';
import { TopicStorageService } from './services/topic-storage.service';
import { FormsModule } from '@angular/forms';
import { MessangerComponent } from './messanger/messanger.component';
import { AdminTopicComponent } from './admin-topic/admin-topic.component';


@NgModule({
  declarations: [
    AppComponent,
    MessangerComponent,
    AdminTopicComponent
  ],
  imports: [
    BrowserModule,
    CoreModule,
    ForumModule,
    HttpModule,
    AuthModule,
    AppRoutingModule,
  ],
  providers: [TopicStorageService, AuthService, AdminTopicService],
  bootstrap: [AppComponent]
})
export class AppModule {}
