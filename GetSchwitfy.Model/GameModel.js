class Game{
    constructor(playerName, boardSize){
        this.playerName = playerName;
        this.boardSize = boardSize;
        this.date = this.GetCurrentDate();
    }

    GetCurrentDate(){
        let today = new Date();
        let day = String(today.getDate()).padStart(2, '0');
        let month = String(today.getMonth() + 1).padStart(2, '0'); 
        let year = today.getFullYear();
        currentDate = day + '/' + month + '/' + year;
        
        return currentDate;
    }
}