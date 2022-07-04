class GameBoard{

    constructor(numberLinesInBoard){
        this.squares = Array.from(Array(numberLinesInBoard), ()=> new Array(numberLinesInBoard));
    }

    addSquare(square, numberLine, numberIndexInLine){
        this.squares[numberLine][numberIndexInLine] = square;
    }
}