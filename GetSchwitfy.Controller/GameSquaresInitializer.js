const NumberLines = 3;
const NumberSquaresInLine = 3; 

class GameSquaresInitializer{

    constructor(){
        this.squaresNumbers = [];
    }

    InitializeGameBoard(){
        let square;
        let gameBoard = new GameBoard(NumberLines);
        
        for(let i = 0; i < NumberLines; i++){

            for(let j = 0; j < NumberSquaresInLine; j++){
                square = this.CreateUniqueSquare();
                gameBoard.addSquare(square,i,j);        
            }
        }
        
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