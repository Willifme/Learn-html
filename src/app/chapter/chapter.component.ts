import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Observable';

import { ParagraphComponent } from '../paragraph/paragraph.component';
import { MarkdownService } from '../markdown.service';
import { Chapter } from '../markdown';

@Component({
  selector: 'content-chapter',
  templateUrl: './chapter.component.html',
  styleUrls: ['./chapter.component.css'],
  providers: [MarkdownService]
})
export class ChapterComponent implements OnInit {
  private chapter: Chapter; 
  private id: Observable<number>;
  
  constructor(private markdown: MarkdownService, private route: ActivatedRoute) {}
  
  ngOnInit() {
    this.route.params.subscribe(p => this.chapter = this.markdown.findChapterById(p['id']));
  }
}
