import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AngularFire, AuthProviders, AuthMethods, FirebaseListObservable } from 'angularfire2';

import { MarkdownService } from './markdown.service';
import { Chapter } from './chapter';

const chapterOne: Chapter = {
    title: 'Introduction',
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
  providers: [],
})
export class AppComponent implements OnInit {
//  private chapters: FirebaseListObservable<Chapter[]>;
  private chapters: Chapter[];
  
  constructor(private markdown: MarkdownService) {}
  
  public ngOnInit(): void {
    this.markdown.chapters = [chapterOne, chapterOne];
  }

//  constructor(private angularFire: AngularFire) {} 
    // Lazily re-define the firebaseAuthConfig object. I can't seem to import it from the module. 
//    angularFire.auth.login({provider: AuthProviders.Anonymous, method: AuthMethods.Anonymous});

//    this.chapters = angularFire.database.list('/chapterOne');               
}
