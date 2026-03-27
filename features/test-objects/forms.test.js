import formsPage from "../pageobjects/forms.page"
import navigationPage from "../pageobjects/navigation.page";

class FormsTest {
  async inputText(text) {
    await formsPage.inputFieldLocation.setValue(text);
  }

  async validateInput(text) {
    await expect(formsPage.inputRepeatLocation).toHaveText(text);
  }

  async toggleSwitch() {
    await formsPage.switchLocation.click();
  }

  async validateSwitch(opt) {
    const string = `Click to turn the switch ${opt}`;
    await expect(formsPage.switchTextLocation).toHaveText(string);
  }

  async selectDropdown(option) {
    await formsPage.dropdownLocation.click();
    await formsPage.dropdownValueLocation(option).waitForDisplayed();
    await formsPage.dropdownValueLocation(option).click();
    await expect(formsPage.dropdownSelectedLocation())
      .toHaveText(option);
  }

  async pressActiveButton() {
    await formsPage.activeButtonLocation.click();
  }

  async validateButtonMessage(text) {
    await formsPage.buttonMessageLocation.waitForDisplayed();
    await expect(formsPage.buttonMessageLocation).toHaveText(text);
  }

  async open() {
    await navigationPage.formLocation.waitForDisplayed();
    await navigationPage.formLocation.click();
  }
}

export default new FormsTest();