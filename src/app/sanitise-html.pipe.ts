import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Pipe({
  name: 'sanitiseHtml'
})
export class SanitiseHtmlPipe implements PipeTransform {
  constructor(private _sanitiser: DomSanitizer) {}

  transform(text: string): SafeHtml {
    return this._sanitiser.bypassSecurityTrustHtml(text);
  }
}
