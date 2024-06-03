exports.config = {
  tests: './steps/*_steps.js',
  output: './output',
  helpers: {
    WebDriver: {
      url: 'https://www.aljazeera.com',
      browser: 'chrome',
      restart: false,
      windowSize: '1200x900',
      host: '127.0.0.1',
      port: 9516, // Updated port
      path: '/',
      desiredCapabilities: {
        chromeOptions: {
          args: [
           // "--headless",
            "--disable-gpu",
            "--no-sandbox",
            "--ignore-certificate-errors",
            "--disable-web-security",
            "--allow-insecure-localhost",
            "--disable-features=IsolateOrigins,site-per-process",
            "--disable-site-isolation-trials",
            "--disable-blink-features=AutomationControlled",
            "--disable-third-party-cookies"
          ]
        }
      }
    }
  },
  include: {
    I: './steps_file.js',
    mainPage: './pages/mainPage.js',
    livePage: './pages/livePage.js'
  },
  bootstrap: null,
  mocha: {},
  name: 'project',
  plugins: {
    allure: {
      enabled: true,
      require: '@codeceptjs/allure-legacy',
    },
    screenshotOnFail: {
      enabled: true
    }
  },
  gherkin: {
    features: './features/*.feature',
    steps: [
      './steps/mainPage_steps.js',
      './steps/livePage_steps.js'
    ],
    retry: 2
  },
  screenSizes: {
    desktop: { width: 1200, height: 900 },
    mobile: { width: 375, height: 812 }
  }
};
