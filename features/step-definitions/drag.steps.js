import { Given, When, Then } from "@wdio/cucumber-framework";
import DragTest from "../test-objects/drag.test";

Given('I navigate to drag page', async () => {
  await DragTest.open();
});

When('I drag and drop the correct pieces into slots', async (PuzzleTable) => {
  const puzzlePiecesArray = PuzzleTable.hashes();

  for (const piece of puzzlePiecesArray) {
    const dragPiece = piece.PieceLocation;
    const dropPiece = piece.SlotLocation;

    await DragTest.dragPieceToSlot(dragPiece, dropPiece);
    
    // console.log("~~~~~~~~~");
    // console.log(dragPiece);
    // console.log(dropPiece);
  }
});

Then('I check for a message saying {string}', async (str) => {
  await DragTest.validateMessage(str);
});