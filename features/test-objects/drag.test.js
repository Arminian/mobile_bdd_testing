import dragPage from "../pageobjects/drag.page"
import navigationPage from "../pageobjects/navigation.page";

class DragTest {
  async dragPieceToSlot(piece, slot) {
    const dragPiece = await dragPage.dragLocation(piece);
    const dropPiece = await dragPage.dropLocation(slot);

    await dragPiece.dragAndDrop(dropPiece);
  }

  async validateMessage(message) {
    await expect(dragPage.messageLocation(message)).toBeDisplayed();
  }
  
  async open() {
    await navigationPage.dragLocation.waitForDisplayed();
    await navigationPage.dragLocation.click();
  }
}

export default new DragTest();