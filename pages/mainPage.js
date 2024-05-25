const { I } = inject();

module.exports = {
  // Locators
  mostReadSection: 'div.hp-featured-categories > div:nth-child(1) >h3',
  mostReadArticles: 'div.hp-featured-categories > div:nth-child(1) >ul >li',
  bypassMenu: '.bypass-block-menu',

  // Methods
  seeMostReadSection() {
    I.seeElement(this.mostReadSection);
  },

  seeMostReadPosts(expectedCount) {
    I.seeNumberOfElements(this.mostReadArticles, expectedCount);
  },

  clickBypassMenu() {
    I.click('body', { x: 10, y: 10 }); // click on white space near logo
    I.pressKey('Tab');
    I.pressKey('Enter');
  // I.waitForElement(this.bypassBlockMenu, 5);
  // I.click(this.bypassBlockMenu);
  },

  seeMostReadText(expectedText) {
    I.see(expectedText, this.mostReadSection);
  }
};
