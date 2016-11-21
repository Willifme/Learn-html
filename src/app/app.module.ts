import { DomSanitizer, SafeHtml, BrowserModule } from '@angular/platform-browser';
import { NgModule, ValueProvider } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';
import { RouterModule } from '@angular/router';
import { AngularFireModule, AuthProviders, AuthMethods } from 'angularfire2';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ParagraphComponent } from './paragraph/paragraph.component';
import { ChapterComponent } from './chapter/chapter.component';
import { LayoutComponent } from './layout/layout.component';

import { ChapterResolver } from './chapter/chapter.resolver';

import { SanitiseHtmlPipe } from './sanitise-html.pipe';

import { ToolbarTitleService } from './toolbar-title.service';
import { MarkdownService } from './markdown.service';

// TODO: Update this
export const firebaseConfig = {
  apiKey: 'AIzaSyAgTFxmRGFq7kTSLdAt4ajNvShDXPZbqYM',
  authDomain: 'learn-html-fa8e4.firebaseapp.com',
  databaseURL: 'https://learn-html-fa8e4.firebaseio.com',
  storageBucket: 'learn-html-fa8e4.appspot.com'
};

export const firebaseAuthConfig = {
  provider: AuthProviders.Anonymous,
  method: AuthMethods.Anonymous
};

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SanitiseHtmlPipe,
    ParagraphComponent,
    ChapterComponent,
    LayoutComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule.forRoot(),
    AngularFireModule.initializeApp(firebaseConfig, firebaseAuthConfig),
    RouterModule.forRoot([
      { path: '', component: HomeComponent },
      { path: 'chapter/:id', component: ChapterComponent, resolve: { chapter: ChapterResolver } }
    ])
  ],
  providers: [ToolbarTitleService, MarkdownService, ChapterResolver],
  bootstrap: [AppComponent]
})
export class AppModule { }
