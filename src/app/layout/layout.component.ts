import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';

import { MarkdownService } from '../markdown.service';
import { ToolbarTitleService } from '../toolbar-title.service';

import { Chapter } from '../chapter';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css'],
  providers: []
})
export class LayoutComponent implements OnInit, OnDestroy {
  private title: string;
  private titleSubscription: Subscription;
  
  constructor(private markdown: MarkdownService, private toolbarTitle: ToolbarTitleService) { }

  public ngOnInit(): void {
    this.titleSubscription = this.toolbarTitle.getTitle().subscribe((title: string) => this.title = title); 

    this.toolbarTitle.setTitle();
  }

  public ngOnDestroy(): void {
    this.titleSubscription.unsubscribe();
  }
}
