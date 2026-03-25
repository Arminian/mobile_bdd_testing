import { Given, When, Then } from "@wdio/cucumber-framework";
import LoginTest from "../test-objects/login.test";

import { signupData, invalidLoginData } from "../../support/data/login-signup-data";

Given(/^I navigate to login page$/, async () => {
  await LoginTest.open();
});

Given(/^I click on (.*) tab$/, async (tab_name) => {
  await LoginTest.openTab(tab_name);
});

When(/^I input invalid email and password$/, async () => {
  await LoginTest.input(invalidLoginData.email, invalidLoginData.password);
});

When(/^I input valid email and password$/, async () => {
  await LoginTest.input(signupData.email, signupData.password);
});

When(/^I repeat the password$/, async () => {
  await LoginTest.repeat(signupData.password);
});

When(/^I click the login button$/, async () => {
  await LoginTest.login();
});

When(/^I click the sign up button$/, async () => {
  await LoginTest.signup();
});

Then(/^I should see the message saying "(.*)"$/, async (message) => {
  await LoginTest.validateMessage(message);
});

Then(/^I close the popup$/, async () => {
  await LoginTest.closePopup();
});