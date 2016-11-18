import { Injectable, Inject, Optional } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ToolbarTitleService {
  public titleChange: Subject<string> = new Subject<string>();
  public title$: Observable<string> = this.titleChange.asObservable(); 

  private name: string = "Learn HTML";
  
  constructor(public title: string) { 
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
