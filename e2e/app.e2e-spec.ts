import { MyAngular4NgPage } from './app.po';

describe('my-angular4-ng App', () => {
  let page: MyAngular4NgPage;

  beforeEach(() => {
    page = new MyAngular4NgPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
