import { Component, Input } from '@angular/core';

import { MarkdownService } from '../markdown.service';
import { SanitiseHtmlPipe } from '../sanitise-html.pipe';

@Component({
  selector: 'content-paragraph',
  templateUrl: './paragraph.component.html',
  styleUrls: ['./paragraph.component.css'],
  providers: [MarkdownService],
})
export class ParagraphComponent {
  @Input() public title: string;
  @Input() public content: string;

  constructor(private markdown:MarkdownService) { }
}
