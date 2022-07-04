 class GameSquaresInitializer{

    constructor(gameSolvableChecker){
        this.squaresNumbers = [];
        this.gameSolvableChecker = gameSolvableChecker;
    }

    InitializeGameBoard(numberLines, numberSquaresInLine){
        this.numberLines = numberLines;
        this.numberSquaresInLine = numberSquaresInLine;
        let gameBoard = this.CreateBoard();
    
        while(!this.gameSolvableChecker.IsGameSolvableׂׂ(gameBoard, this.numberLines, this.numberSquaresInLine)){
            gameBoard = this.CreateBoard();
        }

        return gameBoard;
    }

    CreateBoard(){
        let square = null;
        let gameBoard = new GameBoard(this.numberLines);
        
        for(let i = 0; i < this.numberLines; i++){

            for(let j = 0; j < this.numberSquaresInLine; j++){
                square = this.CreateUniqueSquare();
                gameBoard.addSquare(square,i,j);        
            }
        }
        this.squaresNumbers = [];
        return gameBoard;
    }

    RandomNumber(){
        let maxRandomNumber = this.numberLines * this.numberSquaresInLine;
        let squareNumber = Math.floor(Math.random()*maxRandomNumber + 1);

        return squareNumber;
    }

    CreateUniqueSquare(){
        let squareRandomNumber = this.RandomNumber();
        
        while(this.squaresNumbers.indexOf(squareRandomNumber) != -1){
            squareRandomNumber = this.RandomNumber();
        }

        this.squaresNumbers.push(squareRandomNumber);
        let maximumSquareNumber = this.numberLines*this.numberSquaresInLine;
        let square = new Square(squareRandomNumber, maximumSquareNumber);

        return square;
    }
}