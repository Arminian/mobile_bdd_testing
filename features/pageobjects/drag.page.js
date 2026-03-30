class DragPage {
  dragLocation(dragId) {
    return $(`~drag-${dragId}`);
  }

  dropLocation(dropId) {
    return $(`~drop-${dropId}`);
  }

  messageLocation(message) {
    return $(`//android.widget.TextView[@text="${message}"]`);
  }
}

export default new DragPage();