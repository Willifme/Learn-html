import { Component, OnInit, OnDestroy, Input } from '@angular/core';

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
export class ChapterComponent implements OnDestroy, OnInit {
  @Input() private chapter: Chapter; 
  
  constructor(private markdown: MarkdownService, private toolbarTitle: ToolbarTitleService) {}

  ngOnInit(): void {
 //   this.toolbarTitle.title = this.markdown.compile(this.chapter.title);

//    this.toolbarTitle.titleChange.subscribe(title => this.toolbarTitle.title = title);
  }

  ngOnDestroy(): void {
    this.toolbarTitle.titleChange.unsubscribe();
  }
}
