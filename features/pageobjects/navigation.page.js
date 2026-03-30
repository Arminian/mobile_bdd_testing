class NavigationPage {
  get loginLocation() {
    return $("~Login");
  }

  get formLocation() {
    return $("~Forms");
  }

  get dragLocation() {
    return $("~Drag");
  }
}

export default new NavigationPage();