class GameSolvableChecker{

    IsGameSolvableׂׂ(gameBoard, numberLines, numberSquaresInLine){
        this.numberLines = numberLines;
        this.numberSquaresInLine = numberSquaresInLine;
        let gameBoardSquares = gameBoard.squares.flat(); 
        
        if(this.numberLines % 2 == 0){
            return this.IsGameWithEvenNumberLinesSolvable(gameBoardSquares);
        }
        else{
            return this.IsGameWithOddNumberLinesSolvable(gameBoardSquares);
        }       
    }

    IsGameWithEvenNumberLinesSolvable(gameBoardSquares){
        let indexEmptySquare = -1;
        let opposites = [];

        for(let i = 0 ; i< gameBoardSquares.length; i++){
            if(gameBoardSquares[i].number == this.numberLines*this.numberSquaresInLine){
                indexEmptySquare = i ;
            }
        }
        
        let squares = gameBoardSquares.slice(indexEmptySquare +1, gameBoardSquares.length)

        if(squares.length != 0){
            opposites = this.CreateCounterOpposite(squares);
        }
        
        opposites.push(this.FindEmptySquareLine(gameBoardSquares));
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

    FindEmptySquareLine(gameBoard){
        let indexOfEmptySquare = -1;
        
        for(let i = 0 ; i < gameBoard.length; i++){
            if(gameBoard[i].number == this.numberLines*this.numberSquaresInLine){
                indexOfEmptySquare = i;
            }
        }
        let emptySquareLine = Math.floor(indexOfEmptySquare / this.numberLines);
        emptySquareLine++;

        return emptySquareLine;
    }
}