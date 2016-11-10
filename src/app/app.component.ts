import { Component } from '@angular/core';

import { MarkdownStorageService } from './markdown-storage.service';
import { SanitiseHtmlPipe } from './sanitise-html.pipe';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [MarkdownStorageService],
})
export class AppComponent {
 constructor(private markdownStorage: MarkdownStorageService) {} 
}
