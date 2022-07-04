class InputBoardSize{

    GetBoardSize(){
        let boardSize = prompt("Please Enter Board Size:(should be an integer and above 1)");

        while(!(Number(boardSize) != NaN && boardSize > 1)){
            boardSize = prompt("You wrong value, the value should be an integer and above 1");
        }

        return boardSize;
    }
}