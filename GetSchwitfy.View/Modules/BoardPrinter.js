class BoardPrinter{

    constructor(){
        this.buttons = [];
    }
    
    PrintSquares(gameBoard){
        let body = document.getElementsByTagName("body")[0];

        for(let i =0; i < gameBoard.length; i++){
            let divElement = document.createElement("div");
           
            for(let j = 0; j < gameBoard[i].length; j++){
                let button = this.CreateButton(gameBoard[i][j]);
                divElement.appendChild(button);
            }
            body.appendChild(divElement);
        }
    }

    CreateButton(square){
        let button = document.createElement("button");
        button.innerHTML = `${square.PrintSquareDetails()}`;
        this.buttons.push(button);
        
        return button;
    }
}