import { Injectable } from '@angular/core';

@Injectable()
export class ToolbarTitleService {
  public title: string;
  
  get title(): string {
    // Only append the title if the title is set (e.g. not at root)
    if (title) {
      return `${this.name} - ${this.title}`
    } else {
      return this.name;
    }
  }
  
  set title(newString: string): void {
    // Only append the title if the title is set (e.g. not at root)
    if (newString) {
      this.title = `${this.name} - ${newString}`;
    } else {
      this.title = this.name;
    }
  }

  constructor(private name: string, private title: string) { 
    this.title = title;
  }
}
