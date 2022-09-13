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

            })

            gameTile[i].addEventListener('mousedown', function () {
                if (gameBoard[i] !== '') {
                    gameTile[i].style.color = 'red';
                }
            })
            gameTile[i].addEventListener('mouseup', function () {
                if (gameBoard[i] !== '') {
                    gameTile[i].style.color = 'black';
                }
            })


        }

    })();

    const playerFactory = (name, marker) => {
        return { name, marker };
    };


})();

