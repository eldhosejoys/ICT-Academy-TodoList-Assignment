var datainfo = document.getElementById("datainfo");
var count = 0;

function selection(i) {
    var card = document.getElementById(i);
    if (card.getAttribute("selected") == "1") {
        card.style.backgroundColor = "#FFF";
        card.setAttribute("selected", "0");
        count = count - 1;
    } else if (card.getAttribute("selected") == "0") {
        card.style.backgroundColor = "#ADFF2F";
        card.setAttribute("selected", "1");
        count += 1;
        if (count % 5 == 0) {
            setTimeout(function() {
                alert("Congrats. " + count + " Tasks have been Successfully Completed");
            }, 10);

        }
    }

}

function requestjson() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var content = JSON.parse(this.responseText);
            var out = "";

            for (var i = 0; i < content.length; i++) {
                var userid = content[i].userId;
                var id = content[i].id;
                var title = content[i].title;
                out += `
                <div class="col pb-2"><div onclick='selection(${i});' class="card" selected="0" id="${i}">
<div class="card-body">
<span class="card-text">
${title}
</span>
</div>
</div></div>
                `;
            }
            datainfo.innerHTML = "<div class='mb-3 text-center '>Click on card to select tasks which are completed.</div><div class='d-flex justify-content-center'><div class='row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4'>" + out + "</div></div>";

        }
    }
    xhttp.open("GET", "https://jsonplaceholder.typicode.com/todos", true);
    xhttp.send();
}
requestjson();



// var card = document.getElementsByClassName('card');
// var selected = document.getElementsByTagName("selected");

// console.log(card.length);
// card.onclick = function() {
//     card.innerHTML = "antiquewhite";

// }