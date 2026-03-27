class FormsPage {
  get inputFieldLocation() {
    return $("~text-input");
  }

  get inputRepeatLocation() {
    return $("~input-text-result");
  }

  get switchLocation() {
    return $("~switch");
  }

  get switchTextLocation() {
    return $("~switch-text");
  }

  get dropdownLocation() {
    return $("~Dropdown");
  }

  get activeButtonLocation() {
    return $("~button-Active");
  }

  get buttonMessageLocation() {
    return $("id:android:id/message");
  }

  dropdownValueLocation(opt) {
    return $(`//*[@text="${opt}"]`);
  }
  
  dropdownSelectedLocation() {
    return $(`//*[@resource-id="text_input"]`);
  }
}

export default new FormsPage();