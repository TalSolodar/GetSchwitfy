class GameController{
    
    constructor(gameSquaresInitializer, gameView, squareMovementHandler, victoryChecker, gamesModel){
        this.gameView = gameView;
        this.squareMovementHandler = squareMovementHandler;
        this.gameSquaresInitializer = gameSquaresInitializer;
        this.victoryChecker = victoryChecker;
        this.gamesModel = gamesModel;
        this.CreateGameBoard();
    }

    CreateGameBoard(){
        let playerName = this.gameView.inputPlayerName.GetName();
        let boardSize = this.gameView.inputBoardSize.GetBoardSize();
        this.AddGameToModel(playerName, boardSize);
        this.gameBoard = this.gameSquaresInitializer.InitializeGameBoard(boardSize, boardSize);
        this.squareMovementHandler.SetNumberLines(boardSize);
        this.squareMovementHandler.SetNumberSquaresInLine(boardSize);
        this.gameView.boardPrinter.PrintSquares(this.gameBoard.squares);
        let buttons = this.gameView.boardPrinter.buttons;
        this.gameView.buttonsEventHandler.AddButtonsEventListener(buttons, this);
    }

    HandleButtonEvent(numberButton, buttons){
        this.squareMovementHandler.gameBoard = this.gameBoard.squares;
        this.squareMovementHandler.TryMoveSquare(numberButton);
        this.gameView.buttonUpdater.UpdateButtonsValues(squareMovementHandler.gameBoard, buttons);
        if(this.victoryChecker.IsBoardSolved(this.gameBoard.squares)){
            this.gameView.winnerNotifier.NotifyVictory();
            this.gameView.boardPrinter.buttons = [];
            this.gamesModel.EndGame();
            this.CreateGameBoard();
        }
    }

    AddGameToModel(playerName, boardSize){
        this.gamesModel.AddGame(playerName, boardSize);
        console.log(this.gamesModel.games);
    }
}