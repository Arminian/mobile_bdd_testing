import { Given, When, Then } from "@wdio/cucumber-framework";
import FormsTest from "../test-objects/forms.test";


Given('I navigate to forms page', async () => {
  await FormsTest.open();
});

When('I fill the input field with {string}', async (str) => {
  await FormsTest.inputText(str);
});

When('I toggle the switch to {word} and validate', async (state) => {
  await FormsTest.toggleSwitch();
  await FormsTest.validateSwitch(state);
});

When('I select an option {string} from dropdown', async (opt) => {
  await FormsTest.selectDropdown(opt);
});

When('I press the active button', async () => {
  await FormsTest.pressActiveButton();
});

Then('I should see a message saying {string}', async (str) => {
  await FormsTest.validateButtonMessage(str);
});

Then('I should see the text below {string}', async (str) => {
  await FormsTest.validateInput(str);
});