class GameController{
    
    constructor(gameSquaresInitializer, gameView, squareMovementHandler, victoryChecker){
        this.gameView = gameView;
        this.squareMovementHandler = squareMovementHandler;
        this.gameSquaresInitializer = gameSquaresInitializer;
        this.victoryChecker = victoryChecker;
        this.CreateGameBoard();
    }

    CreateGameBoard(){
        let boardSize = this.gameView.inputBoardSize.GetBoardSize();
        this.gameBoard = this.gameSquaresInitializer.InitializeGameBoard(boardSize, boardSize);
        this.squareMovementHandler.SetNumberLines(boardSize);
        this.squareMovementHandler.SetNumberSquaresInLine(boardSize);
        this.gameView.boardPrinter.PrintSquares(this.gameBoard.squares);
        let buttons = this.gameView.boardPrinter.buttons;
        this.gameView.buttonsEventHandler.AddButtonsEventListener(buttons, this);
    }

    HandleButtonEvent(numberButton, buttons){
        console.log("here");
        this.squareMovementHandler.gameBoard = this.gameBoard.squares;
        this.squareMovementHandler.TryMoveSquare(numberButton);
        this.gameView.buttonUpdater.UpdateButtonsValues(squareMovementHandler.gameBoard, buttons);
        if(this.victoryChecker.IsBoardSolved(this.gameBoard.squares)){
            this.gameView.winnerNotifier.NotifyVictory();
            this.gameView.boardPrinter.buttons = [];
            this.CreateGameBoard();
        }
    }
}