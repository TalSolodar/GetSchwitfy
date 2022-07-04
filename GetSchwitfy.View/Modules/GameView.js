class GameView{

    constructor(boardPrinter, buttonsEventHandler, buttonUpdater, winnerNotifier){
        this.buttonsEventHandler = buttonsEventHandler;
        this.boardPrinter = boardPrinter;
        this.buttonUpdater = buttonUpdater;
        this.winnerNotifier = winnerNotifier;
    }

}