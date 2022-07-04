class GameBoard{

    constructor(numberLinesInBoard){
        this.squares= [];
        for(let i = 0 ; i < numberLinesInBoard; i++){
            this.squares.push([]);
        }
    }

    addSquare(square, numberLine, numberIndexInLine){
        this.squares[numberLine][numberIndexInLine] = square;
    }
}