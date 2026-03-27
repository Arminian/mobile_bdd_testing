# Mobile Automation with WebdriverIO and Cucumber

This project tests the native android application provided by the wdio team, available here: https://github.com/webdriverio/native-demo-app (last accessed: 2026/03/25)

## Description
This project demonstrates the recommended approach to mobile test automation with WebdriverIO and Cucumber in terms of file structure and syntax practices. This is a part of the TDL School course.

## Technologies
- Allure reporter
- Spec terminal reporter
- Selenium
- Faker
- Appium
  - uiautomator2-driver

## File structure
```
├── features
│   ├── forms.feature
│   ├── login.feature
│   ├── data
│   │   └── login-signup-data.js
│   ├── pageobjects
│   │   ├── forms.page.js
│   │   ├── login.page.js
│   │   └── navigation.page.js
│   ├── step-definitions
│   │   ├── forms.steps.js
│   │   └── login.steps.js
│   └── test-objects
│       ├── forms.test.js
│       └── login.test.js
├── package.json
├── README.md
├── support
└── wdio.conf.js
```