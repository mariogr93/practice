console.log("hola mundo" +" " + getNumber(5));
function getNumber(n){
    var list = [ ];
    for( n ; n >= 1 ; n-- ){
        list.push(n);
    }
    return list;
}

/////////////////////////////////////////////////

function divisors(n){
    const list = [];
    for(var i = 2; i <= n ; i++){
        if(n%i === 0){
            list.push(i);
        }
    }
    return list;
}

console.log(divisors(26))

////////////////////////////////////////////////
var a = [1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89];
var b = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
// 1,2,3,5,8,13

const listOverlap = (listOne, listTwo) => {
    var repeated = [];

    listOne.forEach(e => {
        if(!repeated.includes(e) && listTwo.includes(e)){
          repeated.push(e);
        } 
    })
    return repeated;
}

console.log(listOverlap(a,b))

/////////////////////////////////////////////////////

const interview = "how to remove    all white    spaces from          a str     ing";

console.log(interview.split(" "));
console.log(interview[0]);

spaceRemover = (string) => {
    let newString = '';
    for(let i = 0; i < string.length ; i++){
        if(string[i] !== ' '){
            newString += string[i];
        }
    }
    return newString
}

console.log(spaceRemover(interview), ' klk');

/////////////////////////////////////////////////////////////

const palinrome = string => {

    let newString = '';
    for(let i = string.length-1; i >=0 ; i--){
        newString += string[i];
    }
    console.log((string === newString)?  true: false);
    
}

palinrome('wow');