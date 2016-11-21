import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { MarkdownService } from '../markdown.service';
import { SanitiseHtmlPipe } from '../sanitise-html.pipe';
import { ToolbarTitleService } from '../toolbar-title.service';

@Component({
  selector: 'content-paragraph',
  templateUrl: './paragraph.component.html',
  styleUrls: ['./paragraph.component.css'],
  providers: [MarkdownService, ToolbarTitleService],
})
export class ParagraphComponent implements OnInit {
  @Input() private title: string;
  @Input() private content: string;

  constructor(private markdown: MarkdownService, private toolbarTitle: ToolbarTitleService) { }

  public ngOnInit(): void {
    this.toolbarTitle.setTitle(`${this.title}`);

  }
}
