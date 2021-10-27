class Game {
    #config = {
        easy = {
            rows: 8,
            cols: 8,
            mines: 10
        },
        medium = {
            rows: 16,
            cols: 16,
            mines: 40
        },
        expert = {
            rows: 16,
            cols: 30,
            mines: 99
        }
    }
    #numberOfRows = null;
    #numberOfCols = null;
    #numberOfMines = null;
}

window.onload = function() {
    const game = new Game(); 
    game.initializeGame();
}