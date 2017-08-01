import { RestauranteFrontEndPage } from './app.po';

describe('restaurante-front-end App', () => {
  let page: RestauranteFrontEndPage;

  beforeEach(() => {
    page = new RestauranteFrontEndPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
