import { AngularECommercePage } from './app.po';

describe('angular-e-commerce App', () => {
  let page: AngularECommercePage;

  beforeEach(() => {
    page = new AngularECommercePage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
