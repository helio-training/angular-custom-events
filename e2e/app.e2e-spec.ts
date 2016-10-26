import { AngularCustomEventsPage } from './app.po';

describe('angular-custom-events App', function() {
  let page: AngularCustomEventsPage;

  beforeEach(() => {
    page = new AngularCustomEventsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
