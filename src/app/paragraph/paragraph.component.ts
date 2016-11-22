import { Component, OnInit, Input } from '@angular/core';

import { MarkdownService } from '../markdown.service';
import { ToolbarTitleService } from '../toolbar-title.service';

import { Chapter } from '../chapter';

@Component({
  selector: 'app-paragraph',
  templateUrl: './paragraph.component.html',
  styleUrls: ['./paragraph.component.css'],
  providers: [MarkdownService, ToolbarTitleService],
})
export class ParagraphComponent implements OnInit {
  @Input() private title: string;
  @Input() private content: Chapter;

  constructor(private markdown: MarkdownService, private toolbarTitle: ToolbarTitleService) { }

  public ngOnInit(): void {
    this.toolbarTitle.setTitle(`${this.title}`);
  }
}
