(function () {
    let gameTile = document.querySelectorAll('.gameTile');

    let gameBoard = (function () {
        let gameBoardArray = ['', '', '',
            '', '', '',
            '', '', ''];



        return gameBoardArray;
    })();

    let displayController = (function () {
        let currentMark = 'X';

        for (let i = 0; i < gameTile.length; i++) {
            gameTile[i].addEventListener('click', function () {
                if (gameBoard[i] !== '') {

                }
                else {
                    gameBoard[i] = currentMark;
                    if (currentMark === 'X') {
                        currentMark = 'O';
                    }
                    else if (currentMark === 'O') {
                        currentMark = 'X';
                    }
                    gameTile[i].innerHTML = gameBoard[i];
                }
                // Horizontal win conditions
                if (gameBoard[0] == 'X' && gameBoard[1] == 'X' && gameBoard[2] == 'X') {

                    gameBoard.forEach((element, index) => {
                        gameBoard[index] = '';
                    })
                    console.log(gameBoard);
                }
                else if (gameBoard[3] == 'X' && gameBoard[4] == 'X' && gameBoard[5] == 'X') {
                    gameBoard.forEach((element, index) => {
                        gameBoard[index] = '';
                    })
                }
                else if (gameBoard[6] == 'X' && gameBoard[7] == 'X' && gameBoard[8] == 'X') {
                    gameBoard.forEach((element, index) => {
                        gameBoard[index] = '';
                    })
                }
                else if (gameBoard[0] == 'O' && gameBoard[1] == 'O' && gameBoard[2] == 'O') {
                    gameBoard.forEach((element, index) => {
                        gameBoard[index] = '';
                    })
                }
                else if (gameBoard[3] == 'O' && gameBoard[4] == 'O' && gameBoard[5] == 'O') {
                    gameBoard.forEach((element, index) => {
                        gameBoard[index] = '';
                    })
                }
                else if (gameBoard[6] == 'O' && gameBoard[7] == 'O' && gameBoard[8] == 'O') {
                    gameBoard.forEach((element, index) => {
                        gameBoard[index] = '';
                    })
                }
                // Vertical win conditions
                else if (gameBoard[0] == 'X' && gameBoard[3] == 'X' && gameBoard[6] == 'X') {
                    gameBoard.forEach((element, index) => {
                        gameBoard[index] = '';
                    })
                }
                else if (gameBoard[1] == 'X' && gameBoard[4] == 'X' && gameBoard[7] == 'X') {
                    gameBoard.forEach((element, index) => {
                        gameBoard[index] = '';
                    })
                }
                else if (gameBoard[2] == 'X' && gameBoard[5] == 'X' && gameBoard[8] == 'X') {
                    gameBoard.forEach((element, index) => {
                        gameBoard[index] = '';
                    })
                }
                else if (gameBoard[0] == 'O' && gameBoard[3] == 'O' && gameBoard[6] == 'O') {
                    gameBoard.forEach((element, index) => {
                        gameBoard[index] = '';
                    })
                }
                else if (gameBoard[1] == 'O' && gameBoard[4] == 'O' && gameBoard[7] == 'O') {
                    gameBoard.forEach((element, index) => {
                        gameBoard[index] = '';
                    })
                }
                else if (gameBoard[2] == 'O' && gameBoard[5] == 'O' && gameBoard[8] == 'O') {
                    gameBoard.forEach((element, index) => {
                        gameBoard[index] = '';
                    })
                }
                // Diagonal win conditions
                else if (gameBoard[0] == 'X' && gameBoard[4] == 'X' && gameBoard[8] == 'X') {
                    gameBoard.forEach((element, index) => {
                        gameBoard[index] = '';
                    })
                }
                else if (gameBoard[6] == 'X' && gameBoard[4] == 'X' && gameBoard[2] == 'X') {
                    gameBoard.forEach((element, index) => {
                        gameBoard[index] = '';
                    })
                }
                else if (gameBoard[0] == 'O' && gameBoard[4] == 'O' && gameBoard[8] == 'O') {
                    gameBoard.forEach((element, index) => {
                        gameBoard[index] = '';
                    })
                }
                else if (gameBoard[6] == 'O' && gameBoard[4] == 'O' && gameBoard[2] == 'O') {
                    gameBoard.forEach((element, index) => {
                        gameBoard[index] = '';
                    })
                }

            })

            gameTile[i].addEventListener('mousedown', function () {
                if (gameBoard[i] !== '') {
                    gameTile[i].style.color = 'red';
                }
            })
            gameTile[i].addEventListener('mouseup', function () {
                if (gameBoard[i] !== '') {
                    gameTile[i].style.color = 'transparent';
                }
            })
        }

    })();

    const playerFactory = (name, marker) => {
        return { name, marker };
    };


})();

