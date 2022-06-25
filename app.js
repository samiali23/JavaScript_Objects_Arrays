console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");

const numbers = [2, 22, 12, 17, 18, 39, 129]

function arraySum(numbs){
    // let sum = 0
    // numbs.forEach(element => {
    //      sum+= element
    // }); return sum

     return numbs.reduce((sum, number) => {
        return sum + number;
    }, 0)

}console.log(arraySum(numbers))

// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");

let book = {
}

book.title = "bookTitle"
book.author = "SAM"
book.numOfPages = 260
book.readCount = 2

console.log(book)

function info() {
    return `${this.title} ${this.author} ${this.numOfPages} ${this.readCount}`
}

book.info = info;

console.log(book.info())

let sentence = "The quick brown fox jumps over the lazy dog";

function reverseWord(sentence){

    let words = sentence.split(' ')

    let result = words.map((word) => {
        let letters = word.split(" ");
        letters.reverse();
        return letters.join("")
    })

    // let words = sentence.split(" ")
    // for(let i = 0; i < words.length; i--){
    //     let letters = words[i].split(" ");
    //     letters.reverse();
    //     let reverseWord = letters.join("")
    //     result.push(reverseWord)
    // }
    return result.join(" ")

} console.log(reverseWord(sentence))



// for(let i = 0; i =< sentence.length; i--){
//     newSentence+= sentence[i]
// } 

// console.log(newSentence)

let csvData = "name,age\nFrodo,50\nSam,38\nMerry,36\nPippin,26";

function csvConverter(data) {
    let headers = data.slice(0, data.indexOf("\n")).split(","); 

 
  let valuesList = data.slice(data.indexOf("\n") + 1).split("\n");

  const output = valuesList.map((row) => {
    
    let values = row.split(",");
    let obj = {};

    values.forEach((value, idx) => {
      if (idx < headers.length) {
        obj[headers[idx]] = value;
      } else {
        obj[`misc${idx - headers.length + 1}`] = value;
      }
    });

    return obj;
  });

  return output;
}

console.log(csvConverter(csvData));

