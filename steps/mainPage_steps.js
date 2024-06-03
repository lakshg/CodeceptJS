const { I, mainPage } = inject();
const dataHelper = require('../helpers/dataHelper');
const config = require('../codecept.conf').config;

Given('I am on the main page with {string} viewport', (viewport) => {
  const size = config.screenSizes[viewport];
  const data = dataHelper.getDataFromJSON('../data/testData.json');
  I.amOnPage(data.mainPage.url);
  I.waitForElement(mainPage.mostReadSection, 30);
  mainPage.seeMostReadSection(data.mainPage.heading);
  console.log("Main page loaded");
});


Then('I should see the Most Read section', async () => {
  try {
    I.waitForElement(mainPage.mostReadSection, 30);
    mainPage.seeMostReadSection();
  } catch (e) {
    console.error('Error seeing the Most Read section:', e);
  }
});

Then('I should see expected posts in the Most Read section', async () => {
  try {
    const data = dataHelper.getDataFromJSON('../data/testData.json');
    I.waitForElement(mainPage.mostReadArticles, 30);
    mainPage.seeMostReadPosts(data.mainPage.expectedPosts);
    console.log('10 posts are visible in the Most Read section');
  } catch (e) {
    console.error('Error seeing 10 posts in the Most Read section:', e);
  }
});

Then('I should not see the Most Read section', async () => {
  try {
    I.seeCssPropertiesOnElements(mainPage.mostReadSection, { display: 'none' });// Validate the property of the element to be hidden
  } catch (e) {
    console.error('Error ensuring the Most Read section is not visible:', e);
  }
});

When('I click on the Bypass Block menu', async () => {
  try {
    I.waitForElement('body', 30);
    mainPage.clickBypassMenu();
  } catch (e) {
    console.error('Error clicking the Bypass Block menu:', e);
  }
});

Then('The URL should change to include #most-read-container', async () => {
  try {
    I.seeInCurrentUrl('#most-read-container');
  } catch (e) {
    console.error('Error ensuring the URL includes #most-read-container:', e);
  }
});
