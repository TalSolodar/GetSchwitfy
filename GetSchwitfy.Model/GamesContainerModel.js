class GamesContainer{

    constructor(){
        this.games = [];
    }

    AddGame(playerName, boardSize){
        let game = new Game(playerName, boardSize);
        this.games.push(game);
    }

    EndGame(){
        this.games[this.games.length -1].EndGame();
    }
}