import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { VideoListComponent } from './video-list/video-list.component';
import { InfiniteScrollDirective } from './video-list/infinite-scroll.directive';
import { HttpClientModule } from '@angular/common/http';
import { VideoItemComponent } from './video-list/video-item/video-item.component';

@NgModule({
  declarations: [
    AppComponent,
    InfiniteScrollDirective,
    VideoListComponent,
    VideoItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
