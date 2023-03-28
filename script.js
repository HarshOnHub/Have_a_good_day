setInterval(() => {
    var attributes = ["Productive","Bright","Lovely","Super","Wonderful","Splendid","Comfortable","Glorious","Magnificent","Pleasant"]
    var randomAttribute = Math.floor(Math.random()*10);
    document.querySelector(".attribute").textContent=attributes[randomAttribute];
    }, 5000);

var d = new Date();
var day = d.getDay();
console.log(day);
var dayName = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
document.querySelector(".day").innerHTML = dayName[day];