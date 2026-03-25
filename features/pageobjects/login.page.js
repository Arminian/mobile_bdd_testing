class LoginPage {
  get emailLocation() {
    return $("~input-email");
  }

  get passwordLocation() {
    return $("~input-password");
  }

  get passwordRepeatLocation() {
    return $("~input-repeat-password");
  }

  get loginButtonLocation() {
    return $("~button-LOGIN");
  }

  get singupButtonLocation() {
    return $("~button-SIGN UP");
  }

  get popupLocation() {
    return $("id:android:id/button1");
  }

  get signupTabLocation() {
    return $("~button-sign-up-container");
  }

  get loginTabLocation() {
    return $("~button-login-container");
  }

  messageLocation(message) {
    return $(`//android.widget.TextView[@text="${message}"]`);
  }

  // Alternatively
  /*
  signupMessageLocation() {
    return $("#android:id/message")
  }
  */
}

export default new LoginPage();