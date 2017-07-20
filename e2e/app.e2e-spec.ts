import { LoginAngularPage } from './app.po';

describe('login-angular App', () => {
  let page: LoginAngularPage;

  beforeEach(() => {
    page = new LoginAngularPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
