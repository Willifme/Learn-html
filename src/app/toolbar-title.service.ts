import { Injectable } from '@angular/core';

@Injectable()
export class ToolbarTitleService {
  constructor(private name: string, public title: string) { 
  }
  
  /*
  get title(): string {
    // Only append the title if the title is set (e.g. not at root)
    if (title) {
      return `${this.name} - ${this.title}`
    } else {
      return this.name;
    }
  }
  
  set title(newString: string) {
    // Only append the title if the title is set (e.g. not at root)
    if (newString) {
      this.title = `${this.name} - ${newString}`;
    } else {
      this.title = this.name;
    }
  }
  */
}
