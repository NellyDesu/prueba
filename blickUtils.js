

// var info = new XMLHttpRequest();
// info.open('GET', 'http://demo6292426.mockable.io/blickTest');
// info.onload = function() {
//     if (info.status === 200) {
//         alert('yes');
//
//     }
//     else {
//         alert('Request failed.  Returned status of ' + info.status);
//     }
// };
// info.send();

// function press() {
//      alert("I am an alert box!");
// }

var info = new XMLHttpRequest();
var url = "http://demo6292426.mockable.io/blickTest";

info.onreadystatechange = function() {
if (this.readyState == 4 && this.status == 200) {
    var myArr = JSON.parse(this.responseText);
    myFunction(myArr);
    }
};

info.open("GET", url, true);
info.send();
console.log(myFunction)

function myFunction(arr) {
    var out = "";
    var i;
    for(i = 0; i < arr.length; i++) {
        out += '<a href="' + arr[i].url + '">' +
        arr[i].display + '</a><br>';
    }
    document.getElementById("id01").innerHTML = out;
}
