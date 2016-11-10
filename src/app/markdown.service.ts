import { Injectable } from '@angular/core';
import * as marked from 'marked';

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
}
