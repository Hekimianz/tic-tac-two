(function () {
    let gameTile = document.querySelectorAll('.gameTile');

    let gameBoard = (function () {
        let gameBoardArray = ['', '', '',
            '', '', '',
            '', '', ''];



        return gameBoardArray;
    })();

    const playerFactory = (name, marker) => {
        return { name, marker };
    };

    let displayController = (function () {
        let mainDiv = document.querySelector('#mainDiv');
        let playerForm = document.querySelector('#playerForm');
        let closed = true;
        //playerForm 
        let nameForm = document.querySelector('#nameForm');
        let markerForm = document.querySelector('#markSelectorsDiv');
        let nameSubmit = document.querySelector('#nameNext');
        let oSelector = document.querySelector('#oSelector');
        let xSelector = document.querySelector('#xSelector');
        let playerName;
        let playerMarker;
        let currentMark;

        nameSubmit.addEventListener('click', function () {
            if (nameInput.value != '') {
                playerName = nameInput.value;
                nameForm.style.display = 'none';
                markerForm.style.display = 'grid';
            }

        })

        oSelector.addEventListener('click', function () {
            playerMarker = 'O';
            let player = playerFactory(playerName, playerMarker);
            markerForm.style.display = 'none';
            playerForm.style.display = 'none';
            mainDiv.style.display = 'flex';
            currentMark = player.marker;
            return currentMark;
        })
        xSelector.addEventListener('click', function () {
            playerMarker = 'X';
            let player = playerFactory(playerName, playerMarker);
            markerForm.style.display = 'none';
            playerForm.style.display = 'none';
            mainDiv.style.display = 'flex';
            currentMark = player.marker;
            return currentMark;
        })
        if (closed == false) {
            mainDiv.style.display = 'flex';
            playerForm.style.display = 'none';
        }
        else if (closed == true) {
            mainDiv.style.display = 'none';
            playerForm.style.display = 'flex';
        }

        let gameEnd = false;

        console.log(currentMark);

        for (let i = 0; i < gameTile.length; i++) {
            gameTile[i].addEventListener('click', function () {
                if (gameBoard[i] !== '' || gameEnd == true) {

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
                    for (let i = 0; i < 3; i++) {
                        gameTile[i].classList.add('winTile');
                    }
                    gameEnd = true;
                }
                else if (gameBoard[3] == 'X' && gameBoard[4] == 'X' && gameBoard[5] == 'X') {
                    gameBoard.forEach((element, index) => {
                        gameBoard[index] = '';
                    })
                    for (let i = 3; i < 6; i++) {
                        gameTile[i].classList.add('winTile');
                    }
                    gameEnd = true;
                }
                else if (gameBoard[6] == 'X' && gameBoard[7] == 'X' && gameBoard[8] == 'X') {
                    gameBoard.forEach((element, index) => {
                        gameBoard[index] = '';
                    })
                    for (let i = 6; i < 9; i++) {
                        gameTile[i].classList.add('winTile');
                    }
                    gameEnd = true;
                }
                else if (gameBoard[0] == 'O' && gameBoard[1] == 'O' && gameBoard[2] == 'O') {
                    gameBoard.forEach((element, index) => {
                        gameBoard[index] = '';
                    })
                    for (let i = 0; i < 3; i++) {
                        gameTile[i].classList.add('winTile');
                    }
                    gameEnd = true;
                }
                else if (gameBoard[3] == 'O' && gameBoard[4] == 'O' && gameBoard[5] == 'O') {
                    gameBoard.forEach((element, index) => {
                        gameBoard[index] = '';
                    })
                    for (let i = 3; i < 6; i++) {
                        gameTile[i].classList.add('winTile');
                    }
                    gameEnd = true;
                }
                else if (gameBoard[6] == 'O' && gameBoard[7] == 'O' && gameBoard[8] == 'O') {
                    gameBoard.forEach((element, index) => {
                        gameBoard[index] = '';
                    })
                    for (let i = 6; i < 9; i++) {
                        gameTile[i].classList.add('winTile');
                    }
                    gameEnd = true;
                }
                // Vertical win conditions
                else if (gameBoard[0] == 'X' && gameBoard[3] == 'X' && gameBoard[6] == 'X') {
                    gameBoard.forEach((element, index) => {
                        gameBoard[index] = '';
                    })
                    for (let i = 0; i < 7; i = i + 3) {
                        gameTile[i].classList.add('winTile');
                    }
                    gameEnd = true;
                }
                else if (gameBoard[1] == 'X' && gameBoard[4] == 'X' && gameBoard[7] == 'X') {
                    gameBoard.forEach((element, index) => {
                        gameBoard[index] = '';
                    })
                    for (let i = 1; i < 8; i = i + 3) {
                        gameTile[i].classList.add('winTile');
                    }
                    gameEnd = true;
                }
                else if (gameBoard[2] == 'X' && gameBoard[5] == 'X' && gameBoard[8] == 'X') {
                    gameBoard.forEach((element, index) => {
                        gameBoard[index] = '';
                    })
                    for (let i = 2; i < 9; i = i + 3) {
                        gameTile[i].classList.add('winTile');
                    }
                    gameEnd = true;
                }
                else if (gameBoard[0] == 'O' && gameBoard[3] == 'O' && gameBoard[6] == 'O') {
                    gameBoard.forEach((element, index) => {
                        gameBoard[index] = '';
                    })
                    for (let i = 0; i < 7; i = i + 3) {
                        gameTile[i].classList.add('winTile');
                    }
                    gameEnd = true;
                }
                else if (gameBoard[1] == 'O' && gameBoard[4] == 'O' && gameBoard[7] == 'O') {
                    gameBoard.forEach((element, index) => {
                        gameBoard[index] = '';
                    })
                    for (let i = 1; i < 8; i = i + 3) {
                        gameTile[i].classList.add('winTile');
                    }
                    gameEnd = true;
                }
                else if (gameBoard[2] == 'O' && gameBoard[5] == 'O' && gameBoard[8] == 'O') {
                    gameBoard.forEach((element, index) => {
                        gameBoard[index] = '';
                    })
                    for (let i = 2; i < 9; i = i + 3) {
                        gameTile[i].classList.add('winTile');
                    }
                    gameEnd = true;
                }
                // Diagonal win conditions
                else if (gameBoard[0] == 'X' && gameBoard[4] == 'X' && gameBoard[8] == 'X') {
                    gameBoard.forEach((element, index) => {
                        gameBoard[index] = '';
                    })
                    for (let i = 0; i < 9; i = i + 4) {
                        gameTile[i].classList.add('winTile');
                    }
                    gameEnd = true;
                }
                else if (gameBoard[2] == 'X' && gameBoard[4] == 'X' && gameBoard[6] == 'X') {
                    gameBoard.forEach((element, index) => {
                        gameBoard[index] = '';
                    })
                    for (let i = 2; i < 7; i = i + 2) {
                        gameTile[i].classList.add('winTile');
                    }
                    gameEnd = true;
                }
                else if (gameBoard[0] == 'O' && gameBoard[4] == 'O' && gameBoard[8] == 'O') {
                    gameBoard.forEach((element, index) => {
                        gameBoard[index] = '';
                    })
                    for (let i = 0; i < 9; i = i + 4) {
                        gameTile[i].classList.add('winTile');
                    }
                    gameEnd = true;
                }
                else if (gameBoard[2] == 'O' && gameBoard[4] == 'O' && gameBoard[6] == 'O') {
                    gameBoard.forEach((element, index) => {
                        gameBoard[index] = '';
                    })
                    for (let i = 2; i < 7; i = i + 2) {
                        gameTile[i].classList.add('winTile');
                    }
                    gameEnd = true;
                }

            })

            gameTile[i].addEventListener('mousedown', function () {
                if (gameBoard[i] !== '') {
                    gameTile[i].style.textShadow = '0px 1.5px 3px rgba(255, 0, 0, 0.5)';
                }
            })
            gameTile[i].addEventListener('mouseup', function () {
                if (gameBoard[i] !== '') {
                    gameTile[i].style.textShadow = '0px 3px 3px rgba(255, 255, 255, 0.5)';
                }
            })
        }

        let restartBtn = document.querySelector('#reset');
        restartBtn.addEventListener('click', function () {
            gameBoard.forEach((element, index) => {
                gameBoard[index] = '';
                gameTile[index].innerHTML = '';
                gameTile[index].classList.remove('winTile');
            })
            gameEnd = false;
            currentMark = playerMarker;
        })





        markerForm.style.display = 'none';




    })();




})();

