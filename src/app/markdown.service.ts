import { Injectable } from '@angular/core';
import * as marked from 'marked';

import { Chapter } from './chapter';

@Injectable()
export class MarkdownService {
  private markdown: MarkedStatic;
  public chapters: Chapter[];

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
    return Promise.resolve(this.chapters[id]);
  }
}
