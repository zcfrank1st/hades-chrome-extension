import { DevopsPage } from './app.po';

describe('devops App', function() {
  let page: DevopsPage;

  beforeEach(() => {
    page = new DevopsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
