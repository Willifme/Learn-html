import { Component, Input } from '@angular/core';

import { ParagraphComponent } from '../paragraph/paragraph.component';
import { Chapter } from '../markdown';

@Component({
  selector: 'content-chapter',
  templateUrl: './chapter.component.html',
  styleUrls: ['./chapter.component.css']
})
export class ChapterComponent {
  @Input() private chapter: Chapter; 
}
