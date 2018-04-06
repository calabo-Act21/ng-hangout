import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { MatListModule, MatCardModule, MatIconModule, MatToolbarModule } from '@angular/material';
import { AutoSizeDirective } from './autosize.directive';
import { TopicsComponent } from './topics/topics.component';
import { ChatComponent } from './chat/chat.component';
import { ChatRoomComponent } from './chat-room/chat-room.component';
import { ChatRoomService } from './chat-room/chat-room.service';

@NgModule({
  declarations: [
    AppComponent,
    AutoSizeDirective,
    TopicsComponent,
    ChatComponent,
    ChatRoomComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    MatIconModule,
    MatToolbarModule,
    MatCardModule,
    MatListModule,
    BrowserAnimationsModule
  ],
  providers: [ChatRoomService],
  bootstrap: [AppComponent]
})
export class AppModule { }
