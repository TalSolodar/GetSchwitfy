class GameView{

    constructor(boardPrinter, buttonsEventHandler, buttonUpdater, winnerNotifier, inputBoardSize){
        this.buttonsEventHandler = buttonsEventHandler;
        this.boardPrinter = boardPrinter;
        this.buttonUpdater = buttonUpdater;
        this.winnerNotifier = winnerNotifier;
        this.inputBoardSize = inputBoardSize;
    }

}