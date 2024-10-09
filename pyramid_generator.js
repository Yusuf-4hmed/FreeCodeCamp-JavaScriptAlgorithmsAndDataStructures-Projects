const character = "!"; //character variable is what will be used to make up the pyramid
const count = 10; //count variable is is how many rows neededt to make the pyramid
const rows = []; //rows array is what will store the pyramid as a a string
let inverted = false; //inverted variable controls wether the pyramid will be inverted or normal


function padRow(rowNumber, rowCount) { /* padRow function creates a single row for the pyramid. rowNumber: the currents rows number
starting from one. rowCount: total number of rows. */
  return " ".repeat(rowCount - rowNumber) + character.repeat(2 * rowNumber - 1) + " ".repeat(rowCount - rowNumber);
} 
/*
" ".repeat(rowCount - rowNumber) adds spaces to center the row.
character.repeat(2 * rowNumber - 1) adds the ! characters. This number increases with each row (1 !, 3 !, 5 !, etc.).
The second " ".repeat(rowCount - rowNumber) adds spaces after the ! characters for symmetry.
*/


for (let i = 1; i <= count; i++) { // this loop runs count times.
  if (inverted) { /* 
  If inverted is false, rows are added to the end of the array using rows.push().
  This creates a regular pyramid, with smaller rows on top and larger rows on the bottom.
  */
    rows.unshift(padRow(i, count));
  } else {
    rows.push(padRow(i, count));
  }
}

let result = "" 
// result = result + "\n" + row; adds each row to the result string, with a newline (\n) so each row appears on a new line.
for (const row of rows) {
  result = result + "\n" + row;
}

console.log(result);
