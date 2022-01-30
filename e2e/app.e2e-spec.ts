import { DeliveryPage } from './app.po';

describe('meat App', function() {
  let page: DeliveryPage;

  beforeEach(() => {
    page = new DeliveryPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('mt works!');
  });
});
