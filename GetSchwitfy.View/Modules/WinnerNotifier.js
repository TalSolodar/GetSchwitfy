class WinnerNotifier{

    constructor(boardEraser){
        this.boardEraser = boardEraser;
    }

    NotifyVictory(){
        alert("you won");
        alert("play again");
        this.boardEraser.RemoveButtons();
    }
}