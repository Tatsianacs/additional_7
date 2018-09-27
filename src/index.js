module.exports = function solveSudoku(matrix) {
        for (var row = 0; row < 9; row++) {
            for (var col = 0; col < 9; col++) {
                //need to find 0
                if (matrix[row][col] == 0) {
                    //need to check which number can match
                    for (var number = 1; number <= 9; number++) {
                        if (isSatisfy(row, col, number, matrix)) {
                            matrix[row][col] = number;

                            if (solveSudoku(matrix)) {
                                return true;
                            } else {
                                matrix[row][col] = 0;
                            }
                        }
                    }

                    return false;
                }
            }
        }

        return matrix; // return sudoku
}

//need to check if our number is already presented in the row
function isNumberInRow(row, number, matrix) {
    for (var i = 0; i < 9; i++) {
        if (matrix[row][i] == number) {
            return true; }
    }
    return false;
}
//need to check if our number is already presented in the column
function isNumberInColumn(col, number, matrix) {
    for (var i = 0; i < 9; i++) {
        if (matrix[i][col] == number) {
            return true; }
    }
    return false;
}
//need to check if our number that we are checking is already presented in 3x3 sudoku cells
function isInSquare(row, col, number, matrix) {
    var rowStart = row - row % 3;
    var colStart = col - col % 3;

    for (var i = rowStart; i < rowStart + 3; i++) {
        for (var j = colStart; j < colStart + 3; j++) {
            if (matrix[i][j] == number)
                return true;
        }
    }
    return false;
}

function isSatisfy(row, col, number, matrix) {
    return !isNumberInRow(row, number, matrix)  &&  !isNumberInColumn(col, number, matrix)  &&  !isInSquare(row, col, number, matrix);
}

