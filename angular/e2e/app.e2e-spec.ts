import { MARKTemplatePage } from './app.po';

describe('MARK App', function() {
  let page: MARKTemplatePage;

  beforeEach(() => {
    page = new MARKTemplatePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
