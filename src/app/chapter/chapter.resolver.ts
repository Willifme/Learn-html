import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';

import { MarkdownService } from '../markdown.service';
import { Chapter } from '../markdown';

@Injectable()
export class ChapterResolver implements Resolve<Chapter> {
    constructor (private markdown: MarkdownService) {}

    public resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Chapter> {
      return this.markdown.findChapterById(route.params['id']);
    }
}