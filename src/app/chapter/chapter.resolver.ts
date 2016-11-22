import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';

import { MarkdownService } from '../markdown.service';
import { Chapter } from '../chapter';

import 'rxjs/add/observable/fromPromise';
import 'rxjs/add/operator/map';

@Injectable()
export class ChapterResolver implements Resolve<Chapter> {
    constructor (private router: Router, private markdown: MarkdownService) {}

    public resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Chapter> {
      const id: number = route.params['id'];

      return Observable.fromPromise(this.markdown.findChapterById(id))
        .map(data => {
          if (data) {
            return data;
          } else {
            this.router.navigate(['/']);

            return false;
          }
        })
        .first();
    }
}
