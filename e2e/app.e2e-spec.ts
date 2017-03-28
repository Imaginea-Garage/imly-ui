import { Im.LyPage } from './app.po';

describe('im.ly App', () => {
  let page: Im.LyPage;

  beforeEach(() => {
    page = new Im.LyPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
