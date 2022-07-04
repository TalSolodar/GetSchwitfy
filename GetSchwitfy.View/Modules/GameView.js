class GameView{

    constructor(boardPrinter,
                buttonsEventHandler,
                buttonUpdater,
                winnerNotifier,
                inputBoardSize,
                inputPlayerName){
        this.buttonsEventHandler = buttonsEventHandler;
        this.boardPrinter = boardPrinter;
        this.buttonUpdater = buttonUpdater;
        this.winnerNotifier = winnerNotifier;
        this.inputBoardSize = inputBoardSize;
        this.inputPlayerName = inputPlayerName;
    }

}