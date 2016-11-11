import { DomSanitizer, SafeHtml, BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';
import { RouterModule } from '@angular/router';
import { AngularFireModule, AuthProviders, AuthMethods } from 'angularfire2';

import { ToolbarTitleService } from './toolbar-title.service';

import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { SanitiseHtmlPipe } from './sanitise-html.pipe';
import { ParagraphComponent } from './paragraph/paragraph.component';
import { ChapterComponent } from './chapter/chapter.component';

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
    AboutComponent,
    HomeComponent,
    SanitiseHtmlPipe,
    ParagraphComponent,
    ChapterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule.forRoot(),
    AngularFireModule.initializeApp(firebaseConfig, firebaseAuthConfig),
    RouterModule.forRoot([
      { path: 'about', component: AboutComponent },
      { path: '', component: HomeComponent }
    ])
  ],
  providers: [ToolbarTitleService],
  bootstrap: [AppComponent]
})
export class AppModule { }
