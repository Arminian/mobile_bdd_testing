# 🗣️ Mobile Automation with WebdriverIO and Cucumber

This project tests the native android application provided by the wdio team, available here: https://github.com/webdriverio/native-demo-app (last accessed: 2026/03/25)

## 🙈 Description
This project demonstrates industry standards to mobile test automation with WebdriverIO and Cucumber in terms of file structure and syntax. This is a part of the TDL School course.

## 🙉 Tested Features
1. Login & Signup
2. Form filling
3. Drag and Drop

## 🙊 Technologies
- Allure reporter
- Spec terminal reporter
- Selenium
- Faker
- Appium
  - uiautomator2-driver

## 👀 File structure
```
├── features
│   ├── drag.feature
│   ├── forms.feature
│   ├── login.feature
│   ├── pageobjects
│   │   ├── drag.page.js
│   │   ├── forms.page.js
│   │   ├── login.page.js
│   │   └── navigation.page.js
│   ├── step-definitions
│   │   ├── drag.steps.js
│   │   ├── forms.steps.js
│   │   └── login.steps.js
│   ├── support
│   │   └── data
│   │       └── login-signup-data.js
│   └── test-objects
│       ├── drag.test.js
│       ├── forms.test.js
│       └── login.test.js
├── package.json
├── README.md
└── wdio.conf.js
```