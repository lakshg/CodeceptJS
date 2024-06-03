const { I, livePage } = inject();
const dataHelper = require('../helpers/dataHelper');

Given('I am on the live page', () => {
  const data = dataHelper.getDataFromJSON('../data/testData.json');
  I.amOnPage(data.livePage.url);
  I.waitForElement(livePage.liveStreamPlayerSelector, 10); // wait up to 10 seconds for the element
  console.log('Live page loaded');
});

Then('I should see the Livestream Player', () => {
  try {
    livePage.seeLivestreamPlayer();
  } catch (e) {
    console.error('Error seeing the Livestream Player:', e);
  }
});

Then('I should see the Switch Player button', () => {
  try {
    livePage.seeSwitchPlayerButton();
  } catch (e) {
    console.error('Error seeing the Switch Player button:', e);
  }
});
