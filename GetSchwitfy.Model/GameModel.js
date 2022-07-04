class Game{
    constructor(playerName, boardSize){
        this.playerName = playerName;
        this.boardSize = boardSize;
        this.date = this.GetCurrentDate();
        this.initialTime = performance.now();
    }

    GetCurrentDate(){
        let today = new Date();
        let day = String(today.getDate()).padStart(2, '0');
        let month = String(today.getMonth() + 1).padStart(2, '0'); 
        let year = today.getFullYear();
        let currentDate = day + '/' + month + '/' + year;
        
        return currentDate;
    }

    EndGame(){
        console.log(this.playerName);
        let endTime = performance.now()
        this.GameTimeIsMiliSeconds = endTime = this.initialTime;
    }
}