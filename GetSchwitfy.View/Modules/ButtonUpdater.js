class ButtonUpdater{

    UpdateButtonsValues(gameBoard, buttons){
        let counterButtonsArray = 0;
        this.buttons = buttons;

        for(let i =0; i < gameBoard.length; i++){
            for(let j = 0; j < gameBoard[i].length; j++){
                this.buttons[counterButtonsArray].innerText = gameBoard[i][j].PrintSquareDetails();
                counterButtonsArray++;
            }
        }
    }
}