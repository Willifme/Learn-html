import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import * as marked from 'marked';

import { Chapter } from './markdown';

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
  
  // TODO: Handle error
  public findChapterById(id: number): Observable<Chapter> {
    let chapterSubject: Subject<Chapter> = new Subject<Chapter>();

    return chapterSubject.asObservable();
  }
}
