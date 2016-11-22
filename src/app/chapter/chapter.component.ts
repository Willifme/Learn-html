import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { MarkdownService } from '../markdown.service';
import { ToolbarTitleService } from '../toolbar-title.service';

import { Chapter } from '../chapter';

@Component({
  selector: 'app-chapter',
  templateUrl: './chapter.component.html',
  styleUrls: ['./chapter.component.css'],
  providers: []
})
export class ChapterComponent implements OnInit {
  private chapter: Chapter;

  constructor(private markdown: MarkdownService, private toolbarTitle: ToolbarTitleService, private route: ActivatedRoute) {}

  public ngOnInit(): void {
    this.route.data.subscribe(data => this.chapter = data['chapter']);
  }
}
