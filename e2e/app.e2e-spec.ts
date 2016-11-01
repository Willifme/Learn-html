import { NgLearnHtmlPage } from './app.po';

describe('ng-learn-html App', function() {
  let page: NgLearnHtmlPage;

  beforeEach(() => {
    page = new NgLearnHtmlPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
