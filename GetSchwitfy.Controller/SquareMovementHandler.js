class SquareMovementHandler{

    constructor(numberLines , numberSquaresInLine){
        this.gameBoard = [];
        this.numberSquaresInLine = numberSquaresInLine;
        this.numberLines = numberLines;
    }

    TryMoveSquare(numberPressedSquare){
        let numberButtonLine = Math.floor(numberPressedSquare / this.numberLines);
        let numberButtonSquareInLine = numberPressedSquare % this.numberLines;
        let [numberEmptySquareline,numberEmptySquareIndexInLine] = this.FindEmptySquareIndex();

        if(numberButtonSquareInLine == numberEmptySquareIndexInLine && 
            ((numberButtonLine + 1 == numberEmptySquareline) ||
            (numberEmptySquareline +1 == numberButtonLine))){
                this.UpdateGameBoardModel(numberButtonLine,
                                          numberButtonSquareInLine,
                                          numberEmptySquareline,
                                          numberEmptySquareIndexInLine);
            }
        else if(numberButtonLine == numberEmptySquareline && 
             (numberButtonSquareInLine + 1 == numberEmptySquareIndexInLine ||
              numberEmptySquareIndexInLine + 1 ==numberButtonSquareInLine 
             )){
                this.UpdateGameBoardModel(numberButtonLine,
                    numberButtonSquareInLine,
                    numberEmptySquareline,
                    numberEmptySquareIndexInLine);
            }
        
        return this.gameBoard;
    }

    FindEmptySquareIndex(){

        for(let line = 0 ; line < this.gameBoard.length; line ++){
            
            for(let indexInLine = 0; indexInLine < this.gameBoard[line].length; indexInLine++){
                if(this.gameBoard[line][indexInLine].number == this.numberLines * this.numberSquaresInLine){
                    return [line].concat([indexInLine]);
                }
            }
        }
        return null;
    }

    UpdateGameBoardModel(numberButtonLine,
                         numberButtonSquareInLine,
                         numberEmptySquareline,
                         numberEmptySquareIndexInLine){
        this.gameBoard[numberEmptySquareline][numberEmptySquareIndexInLine].number = 
            this.gameBoard[numberButtonLine][numberButtonSquareInLine].number;
        this.gameBoard[numberButtonLine][numberButtonSquareInLine].number = this.numberLines * this.numberSquaresInLine;
    }
}