import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AngularFire, AuthProviders, AuthMethods, FirebaseListObservable } from 'angularfire2';

import { MarkdownService } from './markdown.service';
import { Chapter } from './markdown';
    
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [MarkdownService],
})
export class AppComponent {
//  private chapters: FirebaseListObservable<Chapter[]>;
    constructor() {}

//  constructor(private angularFire: AngularFire) {} 
    // Lazily re-define the firebaseAuthConfig object. I can't seem to import it from the module. 
//    angularFire.auth.login({provider: AuthProviders.Anonymous, method: AuthMethods.Anonymous});

//    this.chapters = angularFire.database.list('/chapterOne');               
}
