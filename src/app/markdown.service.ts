import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import * as marked from 'marked';

import { Chapter } from './chapter';

const chapterOne: Chapter = {
    title: 'Introduction',
    paragraphs: [
        {
            title: 'What is HTML?',
            content: 'Something here',
        }
    ]
};

const chapters: Chapter[] = [chapterOne, chapterOne];

@Injectable()
export class MarkdownService {

  private markdown: MarkedStatic;

  constructor() { 
    this.markdown = marked;
    
    this.markdown.setOptions({
      gfm: true,
      breaks: true,
      sanitize: true
    });
  }
  
  public compile(text: string) {
    return this.markdown.parse(text);
  }
  
  // Why use a promise and later an observable? I do not know why...
  public findChapterById(id: number): Promise<Chapter> {
    return Promise.resolve(chapters[id]);
  }
}
