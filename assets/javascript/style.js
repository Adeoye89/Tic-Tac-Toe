(function () {

    let playerX = "X"
    let playerO = "O"



    let currentPlayer = 'X';
    let playerXSelections = [];
    let playerOSelections = [];


    const winningCombinations = [
        //horizontals
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9],

        //verticals

        [1, 4, 7],
        [2, 5, 8],
        [3, 6, 9],

        //diagonals

        [1, 5, 9],
        [3, 5, 7],

    ];

    // get all td elements from the DOM and store in cellElementArray

    const cellElementArray = document.querySelectorAll('td');

    // write for loop to iterate over cellElementArray

    for (let i = 0; i < cellElementArray.length; i++) {

        // set cellElementArray[i] to currentCell variable

        let currentCell = cellElementArray[i]

        // add an event listener to the currentCell

        currentCell.addEventListener('click', function (event) {
            const clickedCellElement = event.target;

            // console log the id of the cell being clicked on
            //console.log("You clicked on cell number: " + clickedCellElement.id)

            //make sure the cell is empty
            if (clickedCellElement.innerHTML === '') {

                //if it's player X's turn

                if (currentPlayer === playerX) {

                    //add the cell id to playerXSelections array

                    playerXSelections.push(parseInt(clickedCellElement.id))
                    console.log(playerXSelections)
                    checkForWin(playerXSelections, playerX)
                }

                //otherwise (if it's player O's turn)
                else {
                    playerOSelections.push(parseInt(clickedCellElement.id))
                    console.log(playerOSelections)
                    checkForWin(playerOSelections, playerO)

                }
                //print X/O to page
                clickedCellElement.innerHTML = currentPlayer;
                switchplayers();

            }

            function checkForWin(playerSelections, currentPlayer) {
                for (let i = 0; i < winningCombinations.length; i++) {
                    let matches = 0;
                    for (let j = 0; j < playerSelections.length; j++) {
                        if (winningCombinations[i].includes(playerSelections[j])) {
                            matches++;
                        }

                        if (matches === 3) {
                            alert(currentPlayer+'win')
                            return true;
                        }
                    }

                }

                return false;

            }
            

        });

        function switchplayers() {
            if (currentPlayer === playerX) {
                currentPlayer = playerO;
            }

            else if (currentPlayer === playerO) {
                currentPlayer = playerX;
            }
        }
    }


})()