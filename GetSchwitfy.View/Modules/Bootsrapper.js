let boardPrinter = new BoardPrinter();
let gameView = new GameView(boardPrinter);
let gameSquaresInitializer = new GameSquaresInitializer();
let gameController = new GameController(gameSquaresInitializer, gameView);
