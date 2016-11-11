import { Component, OnInit } from '@angular/core';
import { AngularFire, AuthProviders, AuthMethods, FirebaseListObservable } from 'angularfire2';

import { MarkdownStorageService } from './markdown-storage.service';
import { Chapter } from './markdown';
import { SanitiseHtmlPipe } from './sanitise-html.pipe';
    
const chapterOne: Chapter = {
    title: '# Introduction',
    paragraphs: [
        {
            title: 'What is HTML?',
            content: 'Something here',
        }
    ]
};

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [MarkdownStorageService],
})
export class AppComponent implements OnInit {
//  private chapters: FirebaseListObservable<Chapter[]>;
  private chapters: Chapter[] = [chapterOne, chapterOne];

  constructor(private markdownStorage: MarkdownStorageService, 
              private toolbarTitle: ToolbarTitleService, 
              private angularFire: AngularFire) {} 
    // Lazily re-define the firebaseAuthConfig object. I can't seem to import it from the module. 
//    angularFire.auth.login({provider: AuthProviders.Anonymous, method: AuthMethods.Anonymous});

//    this.chapters = angularFire.database.list('/chapterOne');               
  
  ngOnInit(): void {
    this.toolbarTitle 
  }
}
