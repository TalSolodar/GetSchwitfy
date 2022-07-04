const NumberLines = 2;
const NumberSquaresInLine = 2; 

class GameSquaresInitializer{

    constructor(){
        this.squaresNumbers = [];
    }

    InitializeGameBoard(){
        let gameBoard = this.CreateBoard();
    
        while(!this.IsGameSolvableׂׂ(gameBoard)){
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

    IsGameSolvableׂׂ(gameBoard){
        let gameBoardSquares = gameBoard.squares.flat(); 
        if(NumberLines % 2 == 0){
            return this.IsGameWithEvenNumberLinesSolvable(gameBoardSquares);
        }
        else{
            return this.IsGameWithOddNumberLinesSolvable(gameBoardSquares);
        }       
    }

    IsGameWithEvenNumberLinesSolvable(gameBoardSquares){
        let indexEmptySquare = gameBoardSquares.indexOf(NumberLines*NumberSquaresInLine);
        let squares = gameBoardSquares.slice(indexEmptySquare, gameBoardSquares.length)
        
        if(squares.length == 0){
            return true;
        }

        let opposites = this.CreateCounterOpposite(gameBoardSquares);
        let isSolvable = this.IsCounterOppositeEven(opposites);

        return isSolvable;
    }

    IsGameWithOddNumberLinesSolvable(gameBoardSquares){
        let opposites = this.CreateCounterOpposite(gameBoardSquares);
        let isSolvable = this.IsCounterOppositeEven(opposites);

        return isSolvable;
    }

    CreateCounterOpposite(gameBoardSquares){
        let opposites = [];

        for(let i = 0 ; i <gameBoardSquares.length; i++){
            opposites[i] = 0;
        }

        for(let i = 0 ; i < gameBoardSquares.length -1 ; i++){
            for(let j = i+1 ; j < gameBoardSquares.length;  j++){
                if(gameBoardSquares[i].number > gameBoardSquares[j].number){
                    opposites[i] += 1;
                }
            }
        }
        return opposites;
    }

    IsCounterOppositeEven(opposites){
        let counterOpposites = 0 ;

        opposites.forEach((opposite) => {
            counterOpposites += opposite;
        }); 

        let IsCountOppositeEven = counterOpposites % 2 == 0 ;

        return IsCountOppositeEven;
    }
}