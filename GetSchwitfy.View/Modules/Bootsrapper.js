let inputBoardSize = new InputBoardSize();
let winnerNotifier = new WinnerNotifier();
let buttonUpdater = new ButtonUpdater();
let buttonsEventHandler = new ButtonEventHandler();
let boardPrinter = new BoardPrinter();
let gameView = new GameView(boardPrinter,
                            buttonsEventHandler,
                            buttonUpdater,
                            winnerNotifier,
                            inputBoardSize);
let victoryChecker = new VictoryChecker();
let gameSolvableChecker = new GameSolvableChecker();
let squareMovementHandler = new SquareMovementHandler();
let gameSquaresInitializer = new GameSquaresInitializer(gameSolvableChecker);
let gameController = new GameController(gameSquaresInitializer,
                                        gameView,
                                        squareMovementHandler,
                                        victoryChecker);
