import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Observable';

import { MarkdownService } from '../markdown.service';
import { ToolbarTitleService } from '../toolbar-title.service';
import { ParagraphComponent } from '../paragraph/paragraph.component';
import { Chapter } from '../markdown';

@Component({
  selector: 'content-chapter',
  templateUrl: './chapter.component.html',
  styleUrls: ['./chapter.component.css'],
  providers: [MarkdownService, ToolbarTitleService]
})
export class ChapterComponent implements OnInit {
  private chapter: Chapter; 
  
  constructor(private markdown: MarkdownService, private route: ActivatedRoute) {}
  
  ngOnInit() {
    this.route.params.subscribe(p => {
      this.chapter = this.markdown.findChapterById(p['id']);
    });
  }
}
