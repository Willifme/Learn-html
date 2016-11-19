import { Injectable, Inject, Optional } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ToolbarTitleService {
  private title: string;
  private titleSubject: Subject<string> = new Subject<string>();

  private name: string = "Learn HTML";

  public setTitle(newTitle?: string): void {
    // Clear the string...
    this.title = '';

    // Only append the title if the title is set (e.g. not at root)
    if (newTitle != null) {
      this.title = `${this.name} - ${newTitle}`;  

    } else {
      this.title = this.name;
    }

    this.titleSubject.next(this.title);
  }

  public getTitle(): Observable<string> {
    return this.titleSubject.asObservable();
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
    if (newTitle) {
      this.titleChange.next(`${this.name} - ${newTitle}`);
    } else {
      this.titleChange.next(this.name);
    } 
  }
      this.title = this.name;
    }
  }
  */
}
