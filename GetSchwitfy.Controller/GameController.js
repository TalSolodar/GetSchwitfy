class GameController{
    
    constructor(gameSquaresInitializer, gameView){
        this.gameView = gameView;
        this.gameSquaresInitializer = gameSquaresInitializer;
        this.CreateGameBoard();
        this.gameView.boardPrinter.PrintSquares(this.gameBoard.squares);
    }

    CreateGameBoard(){
        this.gameBoard = this.gameSquaresInitializer.InitializeGameBoard();
    }
}