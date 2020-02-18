const request = new XMLHttpRequest();

request.open("POST", "http://localhost:5000/", true);

function prueba() {
  console.log("prueba 2");
}

request.open("GET", "/");
console.log("OPENED: ", request.status);

request.onprogress = function() {
  console.log("LOADING: ", request.status);
};

request.onload = function() {
  console.log("DONE: ", request.status);
};

request.send();