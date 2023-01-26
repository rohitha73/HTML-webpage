document.getElementById('date').innerHTML = new Date().toDateString();

function e() {
           
    var doc = prompt("Please enter your Name",
        "Rohith");
   
    if (doc != null) {
        document.getElementById("heading").innerHTML ="Welcome " + doc;
    }
}