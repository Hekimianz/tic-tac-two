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
        let player;
        let gameTable = document.querySelector('#gameBoard');
        let aiMark;


        nameSubmit.addEventListener('click', function () {
            if (nameInput.value != '') {
                playerName = nameInput.value;
                nameForm.style.display = 'none';
                markerForm.style.display = 'grid';
            }

        })

        oSelector.addEventListener('click', function () {
            playerMarker = 'O';
            player = playerFactory(playerName, playerMarker);
            markerForm.style.display = 'none';
            playerForm.style.display = 'none';
            mainDiv.style.display = 'flex';
            currentMark = player.marker;
            return { currentMark, player };
        })
        xSelector.addEventListener('click', function () {
            playerMarker = 'X';
            player = playerFactory(playerName, playerMarker);
            markerForm.style.display = 'none';
            playerForm.style.display = 'none';
            mainDiv.style.display = 'flex';
            currentMark = player.marker;
            return { currentMark, player };
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
        let aiSpot = Math.floor(Math.random() * 9);


        let checkifDraw = function () {
            let maxArray = 9;
            console.log(gameBoard.length);
            if (gameBoard.length == maxArray) {
                return true;
            }
            else {
                return false;
            }
        };

        if (gameEnd == false) {
            for (let i = 0; i < gameTile.length; i++) {
                gameTile[i].addEventListener('click', function () {
                    if (gameBoard[i] !== '' || gameEnd == true) {

                    }
                    else {
                        // sets current Mark at play
                        gameBoard[i] = player.marker;
                        // set an ai marker
                        if (player.marker == 'X') {
                            aiMark = 'O';
                        }
                        else if (player.marker == 'O') {
                            aiMark = 'X';
                        }
                        // makes ai choose a random spot if empty 

                        gameTile[i].innerHTML = gameBoard[i];



                    }
                    // Horizontal win conditions
                    let checkWin = function () {
                        if (gameBoard[0] == 'X' && gameBoard[1] == 'X' && gameBoard[2] == 'X') {

                            gameBoard.forEach((element, index) => {
                                gameBoard[index] = '';
                            })
                            if (playerMarker == 'X') {
                                for (let i = 0; i < 3; i++) {
                                    gameTile[i].classList.add('winTile');
                                }
                                gameTable.style.boxShadow = 'rgba(0, 255, 76, 0.25) 0px 50px 100px -20px, rgba(3, 31, 2, 0.3) 0px 30px 60px -30px, rgba(8, 194, 36, 0.35) 0px -2px 6px 0px inset';
                            }
                            else if (playerMarker == 'O') {
                                for (let i = 0; i < 3; i++) {
                                    gameTile[i].classList.add('loseTile');
                                }
                                gameTable.style.boxShadow = 'rgba(255, 0, 0, 0.25) 0px 50px 100px -20px, rgba(31, 2, 2, 0.3) 0px 30px 60px -30px, rgba(194, 8, 8, 0.35) 0px -2px 6px 0px inset';
                            }
                            gameEnd = true;
                        }
                        else if (gameBoard[3] == 'X' && gameBoard[4] == 'X' && gameBoard[5] == 'X') {
                            gameBoard.forEach((element, index) => {
                                gameBoard[index] = '';
                            })
                            if (playerMarker == 'X') {
                                for (let i = 3; i < 6; i++) {
                                    gameTile[i].classList.add('winTile');
                                }
                                gameTable.style.boxShadow = 'rgba(0, 255, 76, 0.25) 0px 50px 100px -20px, rgba(3, 31, 2, 0.3) 0px 30px 60px -30px, rgba(8, 194, 36, 0.35) 0px -2px 6px 0px inset';
                            }
                            else if (playerMarker == 'O') {
                                for (let i = 3; i < 6; i++) {
                                    gameTile[i].classList.add('loseTile');
                                }
                                gameTable.style.boxShadow = 'rgba(255, 0, 0, 0.25) 0px 50px 100px -20px, rgba(31, 2, 2, 0.3) 0px 30px 60px -30px, rgba(194, 8, 8, 0.35) 0px -2px 6px 0px inset';
                            }
                            gameEnd = true;
                        }
                        else if (gameBoard[6] == 'X' && gameBoard[7] == 'X' && gameBoard[8] == 'X') {
                            gameBoard.forEach((element, index) => {
                                gameBoard[index] = '';
                            })
                            if (playerMarker == 'X') {
                                for (let i = 6; i < 9; i++) {
                                    gameTile[i].classList.add('winTile');
                                }
                                gameTable.style.boxShadow = 'rgba(0, 255, 76, 0.25) 0px 50px 100px -20px, rgba(3, 31, 2, 0.3) 0px 30px 60px -30px, rgba(8, 194, 36, 0.35) 0px -2px 6px 0px inset';
                            }
                            else if (playerMarker == 'O') {
                                for (let i = 6; i < 9; i++) {
                                    gameTile[i].classList.add('loseTile');
                                }
                                gameTable.style.boxShadow = 'rgba(255, 0, 0, 0.25) 0px 50px 100px -20px, rgba(31, 2, 2, 0.3) 0px 30px 60px -30px, rgba(194, 8, 8, 0.35) 0px -2px 6px 0px inset';
                            }
                            gameEnd = true;
                        }
                        else if (gameBoard[0] == 'O' && gameBoard[1] == 'O' && gameBoard[2] == 'O') {
                            gameBoard.forEach((element, index) => {
                                gameBoard[index] = '';
                            })
                            if (playerMarker == 'O') {
                                for (let i = 0; i < 3; i++) {
                                    gameTile[i].classList.add('winTile');
                                }
                                gameTable.style.boxShadow = 'rgba(0, 255, 76, 0.25) 0px 50px 100px -20px, rgba(3, 31, 2, 0.3) 0px 30px 60px -30px, rgba(8, 194, 36, 0.35) 0px -2px 6px 0px inset';
                            }
                            else if (playerMarker == 'X') {
                                for (let i = 0; i < 3; i++) {
                                    gameTile[i].classList.add('loseTile');
                                }
                                gameTable.style.boxShadow = 'rgba(255, 0, 0, 0.25) 0px 50px 100px -20px, rgba(31, 2, 2, 0.3) 0px 30px 60px -30px, rgba(194, 8, 8, 0.35) 0px -2px 6px 0px inset';
                            } gameEnd = true;
                        }
                        else if (gameBoard[3] == 'O' && gameBoard[4] == 'O' && gameBoard[5] == 'O') {
                            gameBoard.forEach((element, index) => {
                                gameBoard[index] = '';
                            })
                            if (playerMarker == 'O') {
                                for (let i = 3; i < 6; i++) {
                                    gameTile[i].classList.add('winTile');
                                }
                                gameTable.style.boxShadow = 'rgba(0, 255, 76, 0.25) 0px 50px 100px -20px, rgba(3, 31, 2, 0.3) 0px 30px 60px -30px, rgba(8, 194, 36, 0.35) 0px -2px 6px 0px inset';
                            }
                            else if (playerMarker == 'X') {
                                for (let i = 3; i < 6; i++) {
                                    gameTile[i].classList.add('loseTile');
                                }
                                gameTable.style.boxShadow = 'rgba(255, 0, 0, 0.25) 0px 50px 100px -20px, rgba(31, 2, 2, 0.3) 0px 30px 60px -30px, rgba(194, 8, 8, 0.35) 0px -2px 6px 0px inset';
                            } gameEnd = true;
                        }
                        else if (gameBoard[6] == 'O' && gameBoard[7] == 'O' && gameBoard[8] == 'O') {
                            gameBoard.forEach((element, index) => {
                                gameBoard[index] = '';
                            })
                            if (playerMarker == 'O') {
                                for (let i = 6; i < 9; i++) {
                                    gameTile[i].classList.add('winTile');
                                }
                                gameTable.style.boxShadow = 'rgba(0, 255, 76, 0.25) 0px 50px 100px -20px, rgba(3, 31, 2, 0.3) 0px 30px 60px -30px, rgba(8, 194, 36, 0.35) 0px -2px 6px 0px inset';
                            }
                            else if (playerMarker == 'X') {
                                for (let i = 6; i < 9; i++) {
                                    gameTile[i].classList.add('loseTile');
                                }
                                gameTable.style.boxShadow = 'rgba(255, 0, 0, 0.25) 0px 50px 100px -20px, rgba(31, 2, 2, 0.3) 0px 30px 60px -30px, rgba(194, 8, 8, 0.35) 0px -2px 6px 0px inset';
                            } gameEnd = true;
                        }
                        // Vertical win conditions
                        else if (gameBoard[0] == 'X' && gameBoard[3] == 'X' && gameBoard[6] == 'X') {
                            gameBoard.forEach((element, index) => {
                                gameBoard[index] = '';
                            })
                            if (playerMarker == 'X') {
                                for (let i = 0; i < 7; i = i + 3) {
                                    gameTile[i].classList.add('winTile');
                                }
                                gameTable.style.boxShadow = 'rgba(0, 255, 76, 0.25) 0px 50px 100px -20px, rgba(3, 31, 2, 0.3) 0px 30px 60px -30px, rgba(8, 194, 36, 0.35) 0px -2px 6px 0px inset';
                            }
                            else if (playerMarker == 'O') {
                                for (let i = 0; i < 7; i = i + 3) {
                                    gameTile[i].classList.add('loseTile');
                                }
                                gameTable.style.boxShadow = 'rgba(255, 0, 0, 0.25) 0px 50px 100px -20px, rgba(31, 2, 2, 0.3) 0px 30px 60px -30px, rgba(194, 8, 8, 0.35) 0px -2px 6px 0px inset';
                            } gameEnd = true;
                        }
                        else if (gameBoard[1] == 'X' && gameBoard[4] == 'X' && gameBoard[7] == 'X') {
                            gameBoard.forEach((element, index) => {
                                gameBoard[index] = '';
                            })
                            if (playerMarker == 'X') {
                                for (let i = 1; i < 8; i = i + 3) {
                                    gameTile[i].classList.add('winTile');
                                }
                                gameTable.style.boxShadow = 'rgba(0, 255, 76, 0.25) 0px 50px 100px -20px, rgba(3, 31, 2, 0.3) 0px 30px 60px -30px, rgba(8, 194, 36, 0.35) 0px -2px 6px 0px inset';
                            }
                            else if (playerMarker == 'O') {
                                for (let i = 1; i < 8; i = i + 3) {
                                    gameTile[i].classList.add('loseTile');
                                }
                                gameTable.style.boxShadow = 'rgba(255, 0, 0, 0.25) 0px 50px 100px -20px, rgba(31, 2, 2, 0.3) 0px 30px 60px -30px, rgba(194, 8, 8, 0.35) 0px -2px 6px 0px inset';
                            } gameEnd = true;
                        }
                        else if (gameBoard[2] == 'X' && gameBoard[5] == 'X' && gameBoard[8] == 'X') {
                            gameBoard.forEach((element, index) => {
                                gameBoard[index] = '';
                            })
                            if (playerMarker == 'X') {
                                for (let i = 2; i < 9; i = i + 3) {
                                    gameTile[i].classList.add('winTile');
                                }
                                gameTable.style.boxShadow = 'rgba(0, 255, 76, 0.25) 0px 50px 100px -20px, rgba(3, 31, 2, 0.3) 0px 30px 60px -30px, rgba(8, 194, 36, 0.35) 0px -2px 6px 0px inset';
                            }
                            else if (playerMarker == 'O') {
                                for (let i = 2; i < 9; i = i + 3) {
                                    gameTile[i].classList.add('loseTile');
                                }
                                gameTable.style.boxShadow = 'rgba(255, 0, 0, 0.25) 0px 50px 100px -20px, rgba(31, 2, 2, 0.3) 0px 30px 60px -30px, rgba(194, 8, 8, 0.35) 0px -2px 6px 0px inset';
                            } gameEnd = true;
                        }
                        else if (gameBoard[0] == 'O' && gameBoard[3] == 'O' && gameBoard[6] == 'O') {
                            gameBoard.forEach((element, index) => {
                                gameBoard[index] = '';
                            })
                            if (playerMarker == 'O') {
                                for (let i = 0; i < 7; i = i + 3) {
                                    gameTile[i].classList.add('winTile');
                                }
                                gameTable.style.boxShadow = 'rgba(0, 255, 76, 0.25) 0px 50px 100px -20px, rgba(3, 31, 2, 0.3) 0px 30px 60px -30px, rgba(8, 194, 36, 0.35) 0px -2px 6px 0px inset';
                            }
                            else if (playerMarker == 'X') {
                                for (let i = 0; i < 7; i = i + 3) {
                                    gameTile[i].classList.add('loseTile');
                                }
                                gameTable.style.boxShadow = 'rgba(255, 0, 0, 0.25) 0px 50px 100px -20px, rgba(31, 2, 2, 0.3) 0px 30px 60px -30px, rgba(194, 8, 8, 0.35) 0px -2px 6px 0px inset';
                            } gameEnd = true;
                        }
                        else if (gameBoard[1] == 'O' && gameBoard[4] == 'O' && gameBoard[7] == 'O') {
                            gameBoard.forEach((element, index) => {
                                gameBoard[index] = '';
                            })
                            if (playerMarker == 'O') {
                                for (let i = 1; i < 8; i = i + 3) {
                                    gameTile[i].classList.add('winTile');
                                }
                                gameTable.style.boxShadow = 'rgba(0, 255, 76, 0.25) 0px 50px 100px -20px, rgba(3, 31, 2, 0.3) 0px 30px 60px -30px, rgba(8, 194, 36, 0.35) 0px -2px 6px 0px inset';
                            }
                            else if (playerMarker == 'X') {
                                for (let i = 1; i < 8; i = i + 3) {
                                    gameTile[i].classList.add('loseTile');
                                }
                                gameTable.style.boxShadow = 'rgba(255, 0, 0, 0.25) 0px 50px 100px -20px, rgba(31, 2, 2, 0.3) 0px 30px 60px -30px, rgba(194, 8, 8, 0.35) 0px -2px 6px 0px inset';
                            } gameEnd = true;
                        }
                        else if (gameBoard[2] == 'O' && gameBoard[5] == 'O' && gameBoard[8] == 'O') {
                            gameBoard.forEach((element, index) => {
                                gameBoard[index] = '';
                            })
                            if (playerMarker == 'O') {
                                for (let i = 2; i < 9; i = i + 3) {
                                    gameTile[i].classList.add('winTile');
                                }
                                gameTable.style.boxShadow = 'rgba(0, 255, 76, 0.25) 0px 50px 100px -20px, rgba(3, 31, 2, 0.3) 0px 30px 60px -30px, rgba(8, 194, 36, 0.35) 0px -2px 6px 0px inset';
                            }
                            else if (playerMarker == 'X') {
                                for (let i = 2; i < 9; i = i + 3) {
                                    gameTile[i].classList.add('loseTile');
                                }
                                gameTable.style.boxShadow = 'rgba(255, 0, 0, 0.25) 0px 50px 100px -20px, rgba(31, 2, 2, 0.3) 0px 30px 60px -30px, rgba(194, 8, 8, 0.35) 0px -2px 6px 0px inset';
                            } gameEnd = true;
                        }
                        // Diagonal win conditions
                        else if (gameBoard[0] == 'X' && gameBoard[4] == 'X' && gameBoard[8] == 'X') {
                            gameBoard.forEach((element, index) => {
                                gameBoard[index] = '';
                            })
                            if (playerMarker == 'X') {
                                for (let i = 0; i < 9; i = i + 4) {
                                    gameTile[i].classList.add('winTile');
                                }
                                gameTable.style.boxShadow = 'rgba(0, 255, 76, 0.25) 0px 50px 100px -20px, rgba(3, 31, 2, 0.3) 0px 30px 60px -30px, rgba(8, 194, 36, 0.35) 0px -2px 6px 0px inset';
                            }
                            else if (playerMarker == 'O') {
                                for (let i = 0; i < 9; i = i + 4) {
                                    gameTile[i].classList.add('loseTile');
                                }
                                gameTable.style.boxShadow = 'rgba(255, 0, 0, 0.25) 0px 50px 100px -20px, rgba(31, 2, 2, 0.3) 0px 30px 60px -30px, rgba(194, 8, 8, 0.35) 0px -2px 6px 0px inset';
                            } gameEnd = true;
                        }
                        else if (gameBoard[2] == 'X' && gameBoard[4] == 'X' && gameBoard[6] == 'X') {
                            gameBoard.forEach((element, index) => {
                                gameBoard[index] = '';
                            })
                            if (playerMarker == 'X') {
                                for (let i = 2; i < 7; i = i + 2) {
                                    gameTile[i].classList.add('winTile');
                                }
                                gameTable.style.boxShadow = 'rgba(0, 255, 76, 0.25) 0px 50px 100px -20px, rgba(3, 31, 2, 0.3) 0px 30px 60px -30px, rgba(8, 194, 36, 0.35) 0px -2px 6px 0px inset';
                            }
                            else if (playerMarker == 'O') {
                                for (let i = 2; i < 7; i = i + 2) {
                                    gameTile[i].classList.add('loseTile');
                                }
                                gameTable.style.boxShadow = 'rgba(255, 0, 0, 0.25) 0px 50px 100px -20px, rgba(31, 2, 2, 0.3) 0px 30px 60px -30px, rgba(194, 8, 8, 0.35) 0px -2px 6px 0px inset';
                            } gameEnd = true;
                        }
                        else if (gameBoard[0] == 'O' && gameBoard[4] == 'O' && gameBoard[8] == 'O') {
                            gameBoard.forEach((element, index) => {
                                gameBoard[index] = '';
                            })
                            if (playerMarker == 'O') {
                                for (let i = 0; i < 9; i = i + 4) {
                                    gameTile[i].classList.add('winTile');
                                }
                                gameTable.style.boxShadow = 'rgba(0, 255, 76, 0.25) 0px 50px 100px -20px, rgba(3, 31, 2, 0.3) 0px 30px 60px -30px, rgba(8, 194, 36, 0.35) 0px -2px 6px 0px inset';
                            }
                            else if (playerMarker == 'X') {
                                for (let i = 0; i < 9; i = i + 4) {
                                    gameTile[i].classList.add('loseTile');
                                }
                                gameTable.style.boxShadow = 'rgba(255, 0, 0, 0.25) 0px 50px 100px -20px, rgba(31, 2, 2, 0.3) 0px 30px 60px -30px, rgba(194, 8, 8, 0.35) 0px -2px 6px 0px inset';
                            } gameEnd = true;
                        }
                        else if (gameBoard[2] == 'O' && gameBoard[4] == 'O' && gameBoard[6] == 'O') {
                            gameBoard.forEach((element, index) => {
                                gameBoard[index] = '';
                            })
                            if (playerMarker == 'O') {
                                for (let i = 2; i < 7; i = i + 2) {
                                    gameTile[i].classList.add('winTile');
                                }
                                gameTable.style.boxShadow = 'rgba(0, 255, 76, 0.25) 0px 50px 100px -20px, rgba(3, 31, 2, 0.3) 0px 30px 60px -30px, rgba(8, 194, 36, 0.35) 0px -2px 6px 0px inset';
                            }
                            else if (playerMarker == 'X') {
                                for (let i = 2; i < 7; i = i + 2) {
                                    gameTile[i].classList.add('loseTile');
                                }
                                gameTable.style.boxShadow = 'rgba(255, 0, 0, 0.25) 0px 50px 100px -20px, rgba(31, 2, 2, 0.3) 0px 30px 60px -30px, rgba(194, 8, 8, 0.35) 0px -2px 6px 0px inset';
                            } gameEnd = true;
                        }

                    }
                    let aiFun = function () {

                        if (gameEnd == false) {
                            if (gameBoard[aiSpot] == '') {
                                gameBoard[aiSpot] = aiMark;
                                gameTile[aiSpot].innerHTML = gameBoard[aiSpot];
                            }
                            else if (gameBoard.includes('')) {
                                aiSpot = Math.floor(Math.random() * 9);
                                aiFun();
                            }
                        }
                        else {

                        }
                        checkWin();
                    }

                    checkWin();
                    aiFun();

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
        }

        let restartBtn = document.querySelector('#reset');
        restartBtn.addEventListener('click', function () {
            gameBoard.forEach((element, index) => {
                gameBoard[index] = '';
                gameTile[index].innerHTML = '';
                gameTile[index].classList.remove('winTile');
                gameTile[index].classList.remove('loseTile');
            })
            gameEnd = false;
            currentMark = playerMarker;
            gameTable.style.boxShadow = 'rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px'
        })







        markerForm.style.display = 'none';




    })();




})();

