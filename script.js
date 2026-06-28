// ===== PLAYER FACTORY =====
const PlayerFactory = (() => {
    return (name, marker) => {
        return {
            name,
            marker,
            getMarker() {
                return this.marker;
            },
            getName() {
                return this.name;
            }
        };
    };
})();

// ===== GAMEBOARD MODULE (IIFE) =====
const Gameboard = (() => {
    let board = [];

    const initBoard = () => {
        board = Array(9).fill(null);
    };

    const getBoard = () => [...board];

    const setMarker = (index, marker) => {
        if (board[index] === null) {
            board[index] = marker;
            return true;
        }
        return false;
    };

    const getCell = (index) => board[index];

    const isBoardFull = () => board.every(cell => cell !== null);

    const reset = () => {
        initBoard();
    };

    const checkWinner = (marker) => {
        const winPatterns = [
            // Rows
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            // Columns
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            // Diagonals
            [0, 4, 8],
            [2, 4, 6]
        ];

        return winPatterns.some(pattern =>
            pattern.every(index => board[index] === marker)
        );
    };

    const isGameOver = () => {
        const xWins = checkWinner('X');
        const oWins = checkWinner('O');
        const isFull = isBoardFull();

        if (xWins) return { over: true, winner: 'X' };
        if (oWins) return { over: true, winner: 'O' };
        if (isFull) return { over: true, winner: null };
        return { over: false, winner: null };
    };

    return {
        initBoard,
        getBoard,
        setMarker,
        getCell,
        isBoardFull,
        reset,
        checkWinner,
        isGameOver
    };
})();

// ===== GAME CONTROLLER MODULE (IIFE) =====
const GameController = (() => {
    let player1;
    let player2;
    let currentPlayer;
    let gameOver;

    const initGame = (name1, name2) => {
        player1 = PlayerFactory(name1, 'X');
        player2 = PlayerFactory(name2, 'O');
        currentPlayer = player1;
        gameOver = false;
        Gameboard.initBoard();
    };

    const getCurrentPlayer = () => currentPlayer;

    const playMove = (index) => {
        if (gameOver) return false;

        const marker = currentPlayer.getMarker();
        const moveValid = Gameboard.setMarker(index, marker);

        if (!moveValid) return false;

        // Check game status
        const status = Gameboard.isGameOver();
        if (status.over) {
            gameOver = true;
            return { success: true, gameOver: true, winner: status.winner };
        }

        // Switch player
        currentPlayer = currentPlayer === player1 ? player2 : player1;
        return { success: true, gameOver: false };
    };

    const getGameStatus = () => {
        return Gameboard.isGameOver();
    };

    const isGameOver = () => gameOver;

    const getPlayers = () => ({
        player1: player1.getName(),
        player2: player2.getName()
    });

    const resetGame = () => {
        gameOver = false;
        currentPlayer = player1;
        Gameboard.reset();
    };

    return {
        initGame,
        getCurrentPlayer,
        playMove,
        getGameStatus,
        isGameOver,
        getPlayers,
        resetGame
    };
})();

// ===== DISPLAY CONTROLLER MODULE (IIFE) =====
const DisplayController = (() => {
    const setupSection = document.getElementById('setupSection');
    const gameSection = document.getElementById('gameSection');
    const gameBoard = document.getElementById('gameBoard');
    const currentPlayerDisplay = document.getElementById('currentPlayer');
    const gameResultDiv = document.getElementById('gameResult');
    const resultMessage = document.getElementById('resultMessage');
    const startBtn = document.getElementById('startBtn');
    const restartBtn = document.getElementById('restartBtn');
    const playAgainBtn = document.getElementById('playAgainBtn');
    const player1Input = document.getElementById('player1Name');
    const player2Input = document.getElementById('player2Name');

    const hideSetup = () => setupSection.classList.add('hidden');
    const showSetup = () => setupSection.classList.remove('hidden');
    const hideGame = () => gameSection.classList.add('hidden');
    const showGame = () => gameSection.classList.remove('hidden');

    const renderBoard = () => {
        const board = Gameboard.getBoard();
        const squares = gameBoard.querySelectorAll('.square');

        squares.forEach((square, index) => {
            square.textContent = board[index] || '';
            square.classList.remove('x', 'o', 'disabled');
            if (board[index]) {
                square.classList.add(board[index].toLowerCase());
                square.classList.add('disabled');
            }
        });
    };

    const updateCurrentPlayerDisplay = () => {
        const player = GameController.getCurrentPlayer();
        currentPlayerDisplay.textContent = `${player.getName()}'s Turn (${player.getMarker()})`;
        currentPlayerDisplay.classList.remove('x', 'o');
        currentPlayerDisplay.classList.add(player.getMarker().toLowerCase());
    };

    const showGameOver = (winner) => {
        gameResultDiv.classList.remove('hidden', 'winner', 'tie');

        if (winner) {
            const players = GameController.getPlayers();
            const winnerName = winner === 'X' ? players.player1 : players.player2;
            resultMessage.textContent = `🎉 ${winnerName} Wins! 🎉`;
            gameResultDiv.classList.add('winner');
        } else {
            resultMessage.textContent = "It's a Tie!";
            gameResultDiv.classList.add('tie');
        }
    };

    const hideGameOver = () => {
        gameResultDiv.classList.add('hidden');
    };

    const handleSquareClick = (e) => {
        const square = e.target;
        if (!square.classList.contains('square')) return;

        const index = parseInt(square.dataset.index);
        const result = GameController.playMove(index);

        if (!result.success) return;

        renderBoard();

        if (result.gameOver) {
            showGameOver(result.winner);
        } else {
            updateCurrentPlayerDisplay();
        }
    };

    const attachEventListeners = () => {
        startBtn.addEventListener('click', () => {
            const name1 = player1Input.value || 'Player 1';
            const name2 = player2Input.value || 'Player 2';

            GameController.initGame(name1, name2);
            hideSetup();
            showGame();
            hideGameOver();
            renderBoard();
            updateCurrentPlayerDisplay();
        });

        restartBtn.addEventListener('click', () => {
            GameController.resetGame();
            hideGameOver();
            renderBoard();
            updateCurrentPlayerDisplay();
        });

        playAgainBtn.addEventListener('click', () => {
            GameController.resetGame();
            hideGameOver();
            renderBoard();
            updateCurrentPlayerDisplay();
        });

        gameBoard.addEventListener('click', handleSquareClick);
    };

    return {
        attachEventListeners,
        renderBoard,
        updateCurrentPlayerDisplay,
        showGameOver,
        hideSetup,
        showSetup,
        hideGame,
        showGame
    };
})();

// ===== INITIALIZATION =====
DisplayController.attachEventListeners();
