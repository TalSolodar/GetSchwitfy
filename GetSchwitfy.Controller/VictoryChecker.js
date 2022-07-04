class VictoryChecker{
    
    IsBoardSolved(gameBoard){
        let counterSquareNumbers = 0;
        let copyGameBoard = gameBoard.flat(); 

        for(let square of copyGameBoard){
            if(square.number - 1 != counterSquareNumbers){
                return false;
            }
            counterSquareNumbers++;
        }
        return true;
    }
}