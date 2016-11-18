import { Component, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { AngularFire, AuthProviders, AuthMethods, FirebaseListObservable } from 'angularfire2';

import { MarkdownService } from './markdown.service';
import { ToolbarTitleService } from './toolbar-title.service';
import { Chapter } from './markdown';
    
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
  providers: [ToolbarTitleService, MarkdownService],
})
export class AppComponent implements OnDestroy {
//  private chapters: FirebaseListObservable<Chapter[]>;
  private chapters: Chapter[] = [chapterOne, chapterOne];
  private titleSubscription: Subscription;
  private title: string;

  constructor(private toolbarTitle: ToolbarTitleService, private markdown: MarkdownService, private angularFire: AngularFire) { 
    toolbarTitle.changeTitle();
    
    this.titleSubscription = toolbarTitle.titleChange.subscribe(title => this.title = title);

    console.log(this.title);
  } 
    // Lazily re-define the firebaseAuthConfig object. I can't seem to import it from the module. 
//    angularFire.auth.login({provider: AuthProviders.Anonymous, method: AuthMethods.Anonymous});

//    this.chapters = angularFire.database.list('/chapterOne');               

    ngOnDestroy(): void {
      this.toolbarTitle.titleChange.unsubscribe();
    }
}
