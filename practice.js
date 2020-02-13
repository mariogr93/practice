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

///////////////////////////////////////////////////////////////

console.log("prueba de every");

const computers = [    {name:"dell", ram:16, HD:1500},
{name:"MSI", ram:32, HD:2000},
{name:"Razer", ram:32, HD:1300},
{name:"Apple", ram:8, HD:1000}      ];

// console.log(
//     computers.map(computer=>computer.ram>=16?computer:{computer.qualify: " does not qualify"}));

console.log(
    computers.filter(function(computer){
        return computer.ram>=16
    }).every(function(computer){return computer.HD>900}));


/////////////////////////////////////////////////////////////

console.log("balance.....")


console.log("((())".split('').reduce(function(x,e){if(e === '('){return x+1 } else{return x-1}}, 0));

const math = {
    multiply(...arg){
        return arg.reduce((x,e)=>x*e,1);
    }
}

console.log(math.multiply(1,2,3));

///////////////////////////////////////////////////////

console.log("////////////////////////////")
const points = [[4,5], [10,1], [0,40]];

const newPoints = points.map((e)=>{
    const [a, b] = e;
    return {a,b};
});


console.log(newPoints);

///////////////////////////////////////////////////////

console.log("////////////////////////////")
const names = [[[4,5],[5,4]], [[2,1],[1,2]], [[0,3],[3,0]]];

const newNames = names.map((e)=>{
    let [a,b] = e;
    let [x1,y1] = a;
    let [x2,y2] = b;
    return [{x1,y1},{x2,y2}];
});

console.log(names);
console.log(newNames);
console.log("////////////////////////////")
newNames.forEach(e=>e.forEach(x=>console.log(x)));


console.log("////////////////////////////")

function spiralNum(n){
    const finalArr = [];
    for(let i = 0 ; i < n ; i++){
        finalArr.push([i]);
    }


    
    return finalArr;
}

console.log(spiralNum(5));


