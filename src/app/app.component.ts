import { Component } from '@angular/core';
import { LocalStorageService, SessionStorageService } from 'ng2-webstorage';

import { MarkdownStorageService } from './markdown-storage.service';
import { SanitiseHtmlPipe } from './sanitise-html.pipe';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [MarkdownStorageService],
})
export class AppComponent {
  public markdownString: string;
  public content: string;
  
 constructor(private markdownStorage: MarkdownStorageService, 
             private localStorage: LocalStorageService) {}
}
