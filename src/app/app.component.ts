import { Component } from '@angular/core';
import { AngularFire, AuthProviders, AuthMethods, FirebaseListObservable } from 'angularfire2';

import { MarkdownStorageService } from './markdown-storage.service';
import { Chapter } from './markdown';
import { SanitiseHtmlPipe } from './sanitise-html.pipe';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [MarkdownStorageService],
})
export class AppComponent {
  private chapters: FirebaseListObservable<Chapter[]>;

  constructor(private markdownStorage: MarkdownStorageService, private angularFire: AngularFire) { 
    // Lazily re-define the firebaseAuthConfig object. I can't seem to import it from the module. 
    angularFire.auth.login({provider: AuthProviders.Anonymous, method: AuthMethods.Anonymous});

    this.chapters = angularFire.database.list('/chapterOne');               
  } 
}
