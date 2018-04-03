import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { MatGridListModule } from '@angular/material';
import { AutoSizeDirective } from './autosize.directive';
import { TopicsComponent } from './topics/topics.component';
import { ChatComponent } from './chat/chat.component';

@NgModule({
  declarations: [
    AppComponent,
    AutoSizeDirective,
    TopicsComponent,
    ChatComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    MatGridListModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
