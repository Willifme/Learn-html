import { Component, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { AngularFire, AuthProviders, AuthMethods, FirebaseListObservable } from 'angularfire2';

import { MarkdownService } from './markdown.service';
import { ToolbarTitleService } from './toolbar-title.service';
import { Chapter } from './markdown';
    
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [MarkdownService],
})
export class AppComponent {
//  private chapters: FirebaseListObservable<Chapter[]>;

  constructor(private angularFire: AngularFire) {} 
    // Lazily re-define the firebaseAuthConfig object. I can't seem to import it from the module. 
//    angularFire.auth.login({provider: AuthProviders.Anonymous, method: AuthMethods.Anonymous});

//    this.chapters = angularFire.database.list('/chapterOne');               

    ngOnDestroy(): void {
//      this.toolbarTitle.titleChange.unsubscribe();
    }
}
