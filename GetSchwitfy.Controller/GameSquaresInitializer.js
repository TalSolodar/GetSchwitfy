const NumberLines = 2;
const NumberSquaresInLine = 2; 

class GameSquaresInitializer{

    constructor(gameSolvableChecker){
        this.squaresNumbers = [];
        this.gameSolvableChecker = gameSolvableChecker;
    }

    InitializeGameBoard(){
        let gameBoard = this.CreateBoard();
    
        while(!this.gameSolvableChecker.IsGameSolvableׂׂ(gameBoard)){
            gameBoard = this.CreateBoard();
        }

        return gameBoard;
    }

    CreateBoard(){
        let square = null;
        let gameBoard = new GameBoard(NumberLines);
        
        for(let i = 0; i < NumberLines; i++){

            for(let j = 0; j < NumberSquaresInLine; j++){
                square = this.CreateUniqueSquare();
                gameBoard.addSquare(square,i,j);        
            }
        }
        this.squaresNumbers = [];
        return gameBoard;
    }

    RandomNumber(){
        let maxRandomNumber = NumberLines * NumberSquaresInLine;
        let squareNumber = Math.floor(Math.random()*maxRandomNumber + 1);

        return squareNumber;
    }

    CreateUniqueSquare(){
        let squareRandomNumber = this.RandomNumber();
        
        while(this.squaresNumbers.indexOf(squareRandomNumber) != -1){
            squareRandomNumber = this.RandomNumber();
        }

        this.squaresNumbers.push(squareRandomNumber);
        let square = new Square(squareRandomNumber);
        
        return square;
    }
}