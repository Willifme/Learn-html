import { Component, Input } from '@angular/core';

import { ParagraphComponent } from '../paragraph/paragraph.component';
import { MarkdownService } from '../markdown.service';
import { Chapter } from '../markdown';

@Component({
  selector: 'content-chapter',
  templateUrl: './chapter.component.html',
  styleUrls: ['./chapter.component.css'],
  providers: [MarkdownService]
})
export class ChapterComponent {
  @Input() private chapter: Chapter; 
  
  constructor(private markdown: MarkdownService) {}
}
