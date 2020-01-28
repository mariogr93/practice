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