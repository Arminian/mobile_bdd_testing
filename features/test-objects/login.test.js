import loginPage from "../pageobjects/login.page"
import navigationPage from "../pageobjects/navigation.page";

class LoginTest {
  async input(email, password) {
    await loginPage.emailLocation.setValue(email);
    await loginPage.passwordLocation.setValue(password);
  }

  async repeat(password) {
    await loginPage.passwordRepeatLocation.setValue(password);
  }
  
  async login() {
    await loginPage.loginButtonLocation.click();
  }

  async signup() {
    await loginPage.singupButtonLocation.click();
  }

  async closePopup() {
    if (loginPage.popupLocation.isDisplayed()) {
      await loginPage.popupLocation.click();
    }
  }

  async validateMessage(message) {
    await expect(loginPage.messageLocation(message)).toBeDisplayed();
  }

  async openTab(tab_name) {
    if (tab_name === "Login") {
      loginPage.loginTabLocation.click();
    }
    else if (tab_name === "Sign up") {
      loginPage.signupTabLocation.click();
    }
  }

  async open() {
    await navigationPage.loginLocation.waitForDisplayed();
    await navigationPage.loginLocation.click();
  }
}

export default new LoginTest();